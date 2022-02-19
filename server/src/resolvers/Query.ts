import {PrismaClient, Horarios} from "@prisma/client";

export default {
    lengthHorarios: async (_: any, {pagination}: { pagination: number }, context: { prisma: PrismaClient }): Promise<number> => {
        return Math.floor((await context.prisma.horarios.count()) / 4);
    },
    horarios: async (_: any, {pagination}: { pagination: number }, context: { prisma: PrismaClient }): Promise<Array<any>> => {
        return await context.prisma.horarios.findMany({
            take: 4,
            skip: 4 * pagination,
            select: {id: true, time: true, countDrivers: true, user: true}
        })
    },

}
