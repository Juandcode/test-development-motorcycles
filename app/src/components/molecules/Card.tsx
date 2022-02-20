import React, {useContext} from 'react'
import Card from "../atoms/Card";
import Title from "../atoms/Title"
import {gql, useMutation} from "@apollo/client";

type props = {
    time: string,
    driversCount: number,
    onClick?: () => void,
    user?: any,
    id?: string | number,
}

export default ({time, driversCount, onClick, user, id}: props) => {

    return (
        <Card onClick={onClick} driversCount={driversCount} user={user}>
            <div className={"mx-2 w-full flex justify-center"}><Title type={"Normal"}>{time}</Title></div>
            <div className={"mx-2 w-full flex justify-center"}><Title type={"Normal"}>{driversCount}</Title></div>
            <div className={"mx-2 w-full flex justify-center"}><Title
                type={"Normal"}>{driversCount > 0 ? "Yes" : "No"}</Title></div>
        </Card>
    )
}
