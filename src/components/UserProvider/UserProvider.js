import React, { createContext, useState } from 'react';
import { signUp } from '../../logic/Authentication';

const UserContext = createContext();

const UserProvider = props => {
    let [isAuthenticate,setIsAuthenticate] = useState(false);
    let [error,setError] = useState({});
    let [userName,setUserName] = useState('');
    let [userEmail,setUserEmail] = useState('');
    let [userPassword,setUserPassword] = useState('');
    let [userConfirmPassword,setUserConfirmPassword] = useState('');
    let [email,setEmail] = useState('');
    let [password,setPassword] = useState('');
    let [user,setUser] = useState({});

    function signUpHandler(event){
        signUp({userName,userEmail,userPassword,userConfirmPassword,error,setError});
    }

    let state = {
        isAuthenticate,
        setIsAuthenticate,
        signUpHandler,
        newUserName : [userName,setUserName],
        newUserEmail : [userEmail,setUserEmail],
        newUserPassword : [userPassword,setUserPassword],
        newUserConfirmPassword : [userConfirmPassword,setUserConfirmPassword],
        userEmail : [email,setEmail],
        userPassword : [password,setPassword]
    }

    return (
        <UserContext.Provider value={state}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;

export {UserContext}