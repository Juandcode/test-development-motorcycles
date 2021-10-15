import {PrismaClient, Prisma, Horarios} from "@prisma/client";
import {PubSub} from "graphql-subscriptions";

export default {
    takeHorario: async (_: any, args: { id: number }, context: { prisma: PrismaClient, pubSub: PubSub, user: string }): Promise<Horarios> => {
        const horario = await context.prisma.horarios.findFirst({
            where: {id: args.id}
        })
        if (horario === null) {
            throw new Error("Horario does not exist")
        }

        // if(horario != null && horarios.countDrivers > 3)
        const alreadyTaken = await context.prisma.user.findFirst({
            where: {idUser: context.user, horariosId: horario.id}
        })
        let newHorario;
        if (alreadyTaken) {
            await context.prisma.user.delete({
                where: {id: alreadyTaken.id}
            })
            newHorario = await context.prisma.horarios.update({
                where: {id: args.id},
                data: {countDrivers: horario.countDrivers + 1},
                include: {user: true}
            })

        } else {
            if (horario.countDrivers < 1) {
                throw new Error("Not enough drivers")
            }
            await context.prisma.user.create({
                data: {idUser: context.user, horariosId: horario.id}
            })
            newHorario = await context.prisma.horarios.update({
                where: {id: args.id},
                data: {countDrivers: horario.countDrivers - 1},
                include: {user: true}
            })
        }
        await context.pubSub.publish("PRUEBA", {horarios: newHorario})
        return newHorario
    }
}
