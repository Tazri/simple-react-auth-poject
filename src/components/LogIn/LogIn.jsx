import React, { useContext } from 'react';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Input from '../Input/Input';
import SignInWith from '../SignInWith/SignInWith';
import { UserContext } from '../UserProvider/UserProvider';
import './LogIn.style.css'

const LogIn = () => {
    let {
        logInHandler,
        userEmail,
        userPassword,
        error,
        isAuthenticate
    } = useContext(UserContext);

    let location = useLocation();

    let from = location.state ? location.state.from : '/';

    let fromPathname = from.pathname ? fromPathname : '/';

    let to = {
        pathname: '/signup',
        state : {from}
    }

    let errorMessage = <p className="login-error">* {error.logIn}</p>

    return (
        <div className="login-body">
            <Header />
            <div className="login">
                <h1>Login</h1>

                {error.logIn && errorMessage}

                <Input 
                    label="Email"
                    value={userEmail[0]}
                    setValue={userEmail[1]}
                    error={error.email}
                    />

                <Input 
                    label="Password"
                    type="password"
                    value={userPassword[0]}
                    setValue={userPassword[1]}
                    error={error.password}       
                     />

                <div className="forget-password">
                    <label htmlFor="remember-me">
                        <input type="checkbox" id="remember-me"/>Remember Me
                    </label>

                    <p>Forgot Password</p>
                </div>

                <button onClick={logInHandler}>Login</button>

                <p>Don't have an account? 
                    <Link to={to}>
                        <span> Create an account</span>
                    </Link>
                </p>
            </div>
            {isAuthenticate && <Redirect to={fromPathname} />}
            <SignInWith />
        </div>
    );
};

export default LogIn;