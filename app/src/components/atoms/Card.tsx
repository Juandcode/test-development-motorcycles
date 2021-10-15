import React, {ReactElement, ReactNode} from 'react'

type props = {
    onClick?: () => void
    children: ReactNode,
    header?: boolean
    user?: boolean,
    driversCount?: number
}

export default ({onClick, children, header, user, driversCount}: props): ReactElement => {
    return (
        <div onClick={onClick}
             className={`overflow-x-auto w-full h-14 shadow-md ${user ? "bg-green-600" : driversCount === 0 ? "bg-red-500" : "bg-white"} ${header ? "" : (driversCount != null && driversCount > 0) && "cursor-pointer hover:bg-gray-100"} flex justify-around items-center`}>
            {children}
        </div>
    )
}
