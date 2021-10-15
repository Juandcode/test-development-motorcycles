import React, {useEffect, useState, useContext, createContext, ReactNode} from 'react';

export const context1 = createContext("s");

export const Context2 = ({children, uniqueId}: { children: ReactNode, uniqueId: string }) => {
    return (
        <context1.Provider value={uniqueId}>
            {children}
        </context1.Provider>
    );
};
