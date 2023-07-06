/* eslint-disable prefer-destructuring */
import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);
    const [isConnected, setIsConnected] = useState(false);
    const [initializing, setInitializing] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setInitializing(false);
        }, 3000);
    }, []);

    return (
        <Context.Provider
            value={{
                isLogged,
                setIsLogged,
                isConnected,
                setIsConnected,
                initializing,
                setInitializing,
            }}
        >
            {children}
        </Context.Provider>
    );
};
