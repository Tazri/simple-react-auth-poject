import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Input from '../Input/Input';
import SignInWith from '../SignInWith/SignInWith';
import { UserContext } from '../UserProvider/UserProvider';
import './LogIn.style.css'

const LogIn = () => {
    let {
        userEmail,
        userPassword
    } = useContext(UserContext);

    return (
        <div className="login-body">
            <Header />
            <div className="login">
                <h1>Login</h1>
                <Input 
                    label="Email"
                    value={userEmail[0]}
                    setValue={userEmail[1]}
                    />

                <Input 
                    label="Password"
                    type="password"
                    value={userPassword[0]}
                    setValue={userPassword[1]}
                     />

                <div className="forget-password">
                    <label htmlFor="remember-me">
                        <input type="checkbox" id="remember-me"/>Remember Me
                    </label>

                    <p>Forgot Password</p>
                </div>

                <button>Login</button>

                <p>Don't have an account? 
                    <Link to="/signup">
                        <span> Create an account</span>
                    </Link>
                </p>
            </div>

            <SignInWith />
        </div>
    );
};

export default LogIn;