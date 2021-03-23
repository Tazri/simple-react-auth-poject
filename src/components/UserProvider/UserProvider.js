import React, { createContext, useState } from 'react';
import { signUp,logIn, signInWithGoogle, signInWithFacebook } from '../../logic/Authentication';

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
        signUp({userName,userEmail,userPassword,userConfirmPassword,error,setError,setIsAuthenticate,isAuthenticate,user,setUser});
    }

    function logInHandler(event){
        logIn({email,password,error,setError,setIsAuthenticate,setUser})
    }

    function googleSignIn() {
        signInWithGoogle(setUser,setIsAuthenticate)
    }

    function facebookSignIn() {
        signInWithFacebook(setUser,setIsAuthenticate);
    }

    let state = {
        isAuthenticate,
        setIsAuthenticate,
        signUpHandler,
        logInHandler,
        newUserName : [userName,setUserName],
        newUserEmail : [userEmail,setUserEmail],
        newUserPassword : [userPassword,setUserPassword],
        newUserConfirmPassword : [userConfirmPassword,setUserConfirmPassword],
        userEmail : [email,setEmail],
        userPassword : [password,setPassword],
        error,
        user,
        googleSignIn,
        facebookSignIn
    }

    return (
        <UserContext.Provider value={state}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;

export {UserContext}