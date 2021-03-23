import React, { useContext } from 'react';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Input from '../Input/Input';
import SignInWith from '../SignInWith/SignInWith';
import { UserContext } from '../UserProvider/UserProvider';
import './SignUp.css'

const SignUp = () => {
    let {
        signUpHandler,
        newUserName,
        newUserEmail,
        newUserPassword,
        newUserConfirmPassword,
        error,
        isAuthenticate
    } = useContext(UserContext);

    let location = useLocation();

    let errorMessage = <p className="login-error">* {error.signUp}</p>

    let from = location.state ? location.state.from : '/';

    let fromPathname = from.pathname ? from.pathname : '/';

    let to = {
        pathname:'/login',
        state: {from}
    }

    return (
        <div className="sign-up">
            <Header />

            <div className="login">
                <h1>Create an account</h1>
                
                {error.signUp && errorMessage}

                <Input
                    label="Name"
                    value={newUserName[0]}
                    setValue={newUserName[1]}
                    error= {error.userName}
                    />

                 <Input 
                    label="Email"
                    value={newUserEmail[0]}
                    setValue={newUserEmail[1]}
                    error = {error.userEmail}
                    />
                
                <Input
                    label="Password"
                    type="password"
                    value={newUserPassword[0]}
                    setValue={newUserPassword[1]}
                    error = {error.userPassword}
                    />

                <Input 
                    label="Confirm Password"
                    type="password"
                    value={newUserConfirmPassword[0]}
                    setValue={newUserConfirmPassword[1]}
                    error = {error.userConfirmPassword}
                    />

                <button onClick={signUpHandler}>Create an account</button>
                <p>Already have an account?
                    <Link to={to}>
                        <span> Login</span>
                    </Link>
                </p>
            </div>

            {isAuthenticate && <Redirect to={fromPathname} />}

            <SignInWith />
        </div>
    );
};

export default SignUp;