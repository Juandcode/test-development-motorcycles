import React, {Fragment, useContext} from 'react'
import Card from "../molecules/Card";
import CardHeader from "../molecules/CardHeader";
import {gql, useApolloClient, useQuery, useMutation} from "@apollo/client";
import {context1} from "../../Context";

const LIST = gql`
    query{
        horarios {
            id
            time
            countDrivers
            user {
                id
                idUser
            }
        }
    }`

const TAKE = gql`
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

export default () => {
    const uniqueId = useContext(context1)
    //console.log(uniqueId)
    const {loading, error, data} = useQuery(LIST, {
        onError: (err) => console.log(err),
        onCompleted: (data) => console.log(data),
    })
    const [takeHorario, {loading: loading1, error: error1, data: data1}] = useMutation(TAKE, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (err) => {
            console.log(err);
        }
    })

    if (loading) return <div>loading...</div>
    if (error) return <div>error</div>

    return (
        <Fragment>
            <CardHeader/>
            {data && data.horarios && data.horarios.map((elem: any, index: number) => <Card key={elem.id}
                                                                                            onClick={async () => await takeHorario({
                                                                                                variables: {
                                                                                                    takeHorarioId: elem.id
                                                                                                }
                                                                                            })
                                                                                            }
                                                                                            id={elem.id}
                                                                                            time={elem.time}
                                                                                            user={!!elem.user.find((elem: { idUser: string; }) => elem.idUser === uniqueId)}
                                                                                            driversCount={elem.countDrivers}/>)}
        </Fragment>
    )
}
