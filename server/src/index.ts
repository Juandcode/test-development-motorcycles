import {PrismaClient} from '@prisma/client'
import {ApolloServer} from "apollo-server-express"
import {makeExecutableSchema} from "@graphql-tools/schema"
import path from "path"
import fs from "fs"
import express from "express"

import {createServer} from "http"
import {SubscriptionServer} from "subscriptions-transport-ws";
import {execute, subscribe} from "graphql";
import {PubSub} from "graphql-subscriptions"

import resolvers from "./resolvers";

const init = async () => {
    const prisma = new PrismaClient()
    const pubSub = new PubSub()

    //create the times
    /*const ar2 = Array(13).fill(0).map((elem, index, arr) => [(index + 8).toString() + ":00", (index + 8).toString() + ":30"]).flat()
    for await(const var2 of ar2) {
        await prisma.horarios.create({
            data: {
                time: var2,
                countDrivers: 8
            }
        })
    }*/
    const app = express()
    const httpServer = createServer(app)
    const schema = makeExecutableSchema({
        typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), 'utf8'),
        resolvers
    })


    const server = new ApolloServer({
        schema,
        plugins: [{
            async serverWillStart() {
                return {
                    async drainServer() {
                        subscriptionServer.close();
                    }
                }
            }

        }],
        context: ({req}) => {
            return {...req, prisma, pubSub, user: req.headers.authorization}
        }
    })
    await server.start()
    server.applyMiddleware({
        app,
        path: '/'
    })

    const subscriptionServer = SubscriptionServer.create({
        schema,
        execute,
        subscribe,
        onConnect(connectionParams: any, webSocket: any, context: any) {
            console.log("websocket connected to a client!")
            console.log(connectionParams)
            return {...context, conectadoWS: true, pubSub, user: connectionParams.headers.authorization}
        }
    }, {
        server: httpServer,
        path: server.graphqlPath
    })
    httpServer.listen(4000, () => console.log(`server ready`))
}
(async () => await init())()
