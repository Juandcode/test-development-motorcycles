import React, {Fragment, useContext, useState} from 'react'
import Card from "../molecules/Card";
import CardHeader from "../molecules/CardHeader";
import {gql, useApolloClient, useQuery, useMutation} from "@apollo/client";
import {Horario} from "../../shared/types";
import {useUniqueId} from "../../Context";
import {Pagination} from "../molecules/Pagination";

import {LIST, LENGTH, TAKE} from "../../shared/apollo";

export default () => {
    const [pagination, setPagination] = useState(0)
    const uniqueId = useUniqueId()
    const {loading: loadingLength, error: errorLength, data: count} = useQuery(LENGTH)
    const {loading, error, data, refetch} = useQuery(LIST, {
        variables: {pagination: 0},
        onError: (err) => console.log(err),
        onCompleted: (data) => console.log(data),
    })
    const [takeHorario] = useMutation(TAKE, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (err) => {
            console.log(err);
        }
    })

    if (loading) return <div className={'w-full flex justify-center'}><p>loading...</p></div>
    if (error) return <div className={'w-full flex justify-center'}><p>Error...</p></div>

    return (
        <Fragment>
            <CardHeader/>
            {data && data.horarios && data.horarios.map((elem: Horario, index: number) =>
                (<Card key={elem.id}
                       onClick={async () => await takeHorario({
                           variables: {takeHorarioId: elem.id}
                       })}
                       id={elem.id}
                       time={elem.time}
                       user={!!elem.user.find((elem: { idUser: string; }) => elem.idUser === uniqueId)}
                       driversCount={elem.countDrivers}/>)
            )}
            <Pagination pagination={pagination} setPagination={setPagination} refetch={refetch}
                        length={count.lengthHorarios}/>
        </Fragment>
    )
}
