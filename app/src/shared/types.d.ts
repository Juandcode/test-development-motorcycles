export type Horario = {
    id: number
    time: string
    countDrivers: number
    user: User[]
}

export type User = {
    id: number
    idUser: string
    horarios: Horario[]
}

