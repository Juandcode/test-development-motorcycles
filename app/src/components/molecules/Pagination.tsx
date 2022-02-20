import React, {FC} from 'react'
import {Button} from '../atoms/Button'
import {ApolloQueryResult} from "@apollo/client";

type Refetch = {
    pagination: number
}

type PaginationProps = {
    pagination: number
    setPagination: React.Dispatch<React.SetStateAction<number>>
    refetch: (variables?: (Partial<{ pagination: number }> | undefined)) => Promise<ApolloQueryResult<any>>
    length: number
}
export const Pagination = ({pagination, setPagination, refetch, length}: PaginationProps) => {
    return (
        <div className={'w-full flex justify-center p-2'}>
            {pagination > 0 && <Button onClick={async () => {
                await refetch({pagination: pagination - 1})
                setPagination(pagination - 1)
            }} width={'w-12'} height={'h-12'} rounded={'rounded-full'} margin={'mr-2'}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                          d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                          clip-rule="evenodd"/>
                </svg>
            </Button>}
            {length > pagination && <Button
                onClick={async () => {
                    await refetch({pagination: pagination + 1})
                    setPagination(pagination + 1)
                }}
                width={'w-12'} height={'h-12'} rounded={'rounded-full'} margin={'ml-2'}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"/>
                </svg>
            </Button>}
        </div>
    )
}
