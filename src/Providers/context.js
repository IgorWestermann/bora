import React, { createContext, useEffect, useRef, useState } from "react";

import { friends } from "../Mocks/friends";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);
    const [isConnected, setIsConnected] = useState(false);
    const [initializing, setInitializing] = useState(true);

    setTimeout(() => {
        setInitializing(false);
    }, 3000);

    const contextValue = {
        isLogged,
        setIsLogged,
        isConnected,
        setIsConnected,
        initializing,
        setInitializing,
    };

    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

const arrayRandomElement = (array) => {
    const random = Math.floor(Math.random() * array.length);
    const element = array.splice(random, 1)[0];
    return element;
};

const fetchUser = (usersArr) => {
    return new Promise((resolve) => {
        const resolveFetch = (usersArr) => {
            const element = arrayRandomElement(usersArr);
            resolve(element);
        };
        const duration = Math.floor(Math.random() * 3000);
        setTimeout(resolveFetch, duration, usersArr);
    });
};

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const counter = useRef(0);
    const [isSearching, setIsSearching] = useState(false);
    const [fullParty, setFullParty] = useState(false);
    const lock = useRef(true);

    const toggleSearch = () => {
        setIsSearching(!isSearching);
        setUsers([]);
        setFullParty(false);
        counter.current = 0;
        lock.current = !lock.current;
    };

    const resetSearch = () => {
        setIsSearching(false);
        setFullParty(false);
        setUsers([]);
        counter.current = 0;
        lock.current = true;
    };

    const getRandomUsers = async (availableUsers) => {
        if (!lock.current) {
            const newUser = await fetchUser(availableUsers);
            counter.current += 1;
            setUsers((prevUsers) => [...prevUsers, newUser]);
        } else {
            resetSearch();
            return;
        }

        if (counter.current < 3) {
            getRandomUsers(availableUsers);
        } else {
            lock.current = true;
            setIsSearching(false);
            setFullParty(true);
        }
    };

    useEffect(() => {
        if (isSearching) {
            getRandomUsers(friends);
        }
    }, [isSearching]);

    const store = {
        users,
        isSearching,
        fullParty,
        toggleSearch,
        resetSearch,
    };

    return (
        <SearchContext.Provider value={store}>
            {children}
        </SearchContext.Provider>
    );
};
