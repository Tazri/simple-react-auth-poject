import React, { createContext } from 'react';

const UserContext = createContext();

const UserProvider = props => {
    

    let state = {

    }

    return (
        <UserContext.Provider value={state}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;

export {UserContext}