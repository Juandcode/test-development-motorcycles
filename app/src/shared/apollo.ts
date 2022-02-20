import {gql} from "@apollo/client";

export const LIST = gql`
    query($pagination: Int!){
        horarios(pagination:$pagination) {
            id
            time
            countDrivers
            user {
                id
                idUser
            }
        }
    }`
export const LENGTH = gql`
    query{
        lengthHorarios
    }`

export const TAKE = gql`
    mutation($takeHorarioId: Int!){
        takeHorario(id: $takeHorarioId) {
            id
            time
            countDrivers
            user {
                id
                idUser
            }

        }
    }`


export const SUBSCRIBE = gql`subscription{
    horarios {
        id
        time
        countDrivers
    }
}`
