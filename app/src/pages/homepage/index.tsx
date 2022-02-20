import React, {ReactElement, ReactNode, useEffect} from 'react'
import CardList from "../../components/organisms/CardList";
import {gql, useApolloClient} from "@apollo/client";
import Notification from "../../components/atoms/Notification"
import {useUniqueId} from "../../Context";
import {SUBSCRIBE} from "../../shared/apollo";


export default (): ReactElement => {
    const client = useApolloClient();
    const uniqueId = useUniqueId()
    const subscribe = (): void => {
        client.subscribe({
            query: SUBSCRIBE
        }).subscribe({
            next: async (event) => {
                console.log('event ', event.data.horarios);
                //console.log('finish');
            }
        })
    }
    useEffect(() => {
        subscribe()
        return () => console.log("unmout")
    }, [])
    return (
        <div
            className={"w-full h-auto min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 font-body font-semibold"}>
            <div className={"w-9/12 h-auto divide-y border-white my-4"}>
                <CardList/>
            </div>
        </div>
    )
}
