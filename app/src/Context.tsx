import React, {useEffect, useState, useContext, createContext, ReactNode} from 'react';
import {v4 as uuidv4} from "uuid";
import {WebSocketLink} from "@apollo/client/link/ws";
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache, split} from "@apollo/client";
import {getMainDefinition} from "@apollo/client/utilities";

export const Context = createContext("");

export const Provider = ({children}: { children: ReactNode }) => {

    const [uniqueId] = useState(uuidv4())
    //const uniqueId = uuidv4()
    const getLocalStorage = () => {
        if (localStorage.getItem('token')) {
            return localStorage.getItem('token')
        }
        localStorage.setItem('token', uniqueId)
        return localStorage.getItem('token')
    }

    const makeApolloClient = () => {
        //const uniqueId = uuidv4()
        const wsLink = new WebSocketLink({
            uri: 'ws://192.168.100.4:4000/',
            options: {
                reconnect: true,
                connectionParams: {
                    headers: {
                        authorization: getLocalStorage()
                    }
                }
            }
        })
        const httpLink = new HttpLink({
            uri: "http://192.168.100.4:4000", // use https for secure endpoint
            headers: {
                authorization: getLocalStorage()
            }
        });

        const link = split(
            ({query}) => {
                const definition = getMainDefinition(query);
                return (
                    definition.kind === 'OperationDefinition' &&
                    definition.operation === 'subscription'
                );
            },
            wsLink,
            httpLink,
        );
        return new ApolloClient({
            link,
            cache: new InMemoryCache()
        })
    }

    return (
        <ApolloProvider client={makeApolloClient()}>
            <React.StrictMode>
                <Context.Provider value={uniqueId}>
                    {children}
                </Context.Provider>
            </React.StrictMode>
        </ApolloProvider>
    );
};

export const useUniqueId = () => useContext(Context)
