import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Input from '../Input/Input';
import SignInWith from '../SignInWith/SignInWith';
import './LogIn.style.css'

const LogIn = () => {
    return (
        <div className="login-body">
            <Header />
            <div className="login">
                <h1>Login</h1>
                <Input 
                    label="Email"/>

                <Input 
                    label="Password"
                    type="password" />

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