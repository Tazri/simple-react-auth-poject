import React, { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = props => {
    let [isAuthenticate,setIsAuthenticate] = useState(false);

    let state = {
        isAuthenticate,
        setIsAuthenticate
    }

    return (
        <UserContext.Provider value={state}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;

export {UserContext}