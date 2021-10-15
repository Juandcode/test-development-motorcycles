import {Prisma} from "@prisma/client";

export default {
    horarios: {
        subscribe: (_: any, args: any, context: any) => {
            //console.log(context.pubSub)
            return context.pubSub.asyncIterator(["PRUEBA"])
        },
    }
}
