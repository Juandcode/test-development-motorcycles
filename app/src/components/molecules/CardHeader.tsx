import React, {Fragment} from 'react'
import Card from "../atoms/Card";
import Title from "../atoms/Title"

export default () => (
    <Card header={true}>
        <div className={"flex flex-row mx-2 w-full justify-center"}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <Title type={"Bold"}>Time</Title>
        </div>
        <div className={"flex flex-row mx-2 w-full justify-center"}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <Title type={"Bold"}>Motorcycles</Title>
        </div>
        <div className={"flex flex-row mx-2 w-full justify-center"}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
            </svg>
            <Title type={"Bold"}>Available</Title>
        </div>
    </Card>
)
