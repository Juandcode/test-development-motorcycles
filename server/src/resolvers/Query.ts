import {PrismaClient, Horarios} from "@prisma/client";

export default {
    horarios: async (_: any, args: any, context: { prisma: PrismaClient }): Promise<Array<any>> => {
        return await context.prisma.horarios.findMany({
            select: {id: true, time: true, countDrivers: true, user: true}
        })
    },

}
