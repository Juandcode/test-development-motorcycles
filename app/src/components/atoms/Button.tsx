import React, {FC} from 'react';

type ButtonProps = {
    width: string
    height: string,
    margin?: string
    padding?: string
    rounded?: string
    onClick: () => void
}

export const Button: FC<ButtonProps> = ({width, onClick, height, margin, padding, rounded, children}) => {
    return <div onClick={onClick}
                className={`cursor-pointer ${width} ${height} ${rounded} bg-white ${margin} ${padding} shadow-lg flex justify-center items-center`}>
        {children}
    </div>
}
