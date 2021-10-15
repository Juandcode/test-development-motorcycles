import React, {ReactNode} from 'react'

type props = {
    children: ReactNode
    type: 'Bold' | 'Normal'
}

export default ({type, children}: props) => {
    return (
        <p className={`font-body ${type==="Bold" ? "font-bold" : "font-normal"} text-base`}>{children}</p>
    )
}
