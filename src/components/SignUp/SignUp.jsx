import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Input from '../Input/Input';
import SignInWith from '../SignInWith/SignInWith';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className="sign-up">
            <Header />

            <div className="login">
                <h1>Create an account</h1>
                
                <Input
                    label="Name"
                    />

                 <Input 
                    label="Email or Username"
                    />
                
                <Input
                    label="Password"
                    type="password"
                    />

                <Input 
                    label="Confirm Password"
                    type="password"
                    />

                <button>Create an account</button>
                <p>Already have an account?
                    <Link to="/login">
                        <span> Login</span>
                    </Link>
                </p>
            </div>

            <SignInWith />
        </div>
    );
};

export default SignUp;