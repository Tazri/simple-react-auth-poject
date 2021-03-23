import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
        newUserConfirmPassword
    } = useContext(UserContext);

    return (
        <div className="sign-up">
            <Header />

            <div className="login">
                <h1>Create an account</h1>
                
                <Input
                    label="Name"
                    value={newUserName[0]}
                    setValue={newUserName[1]}
                    />

                 <Input 
                    label="Email"
                    value={newUserEmail[0]}
                    setValue={newUserEmail[1]}
                    />
                
                <Input
                    label="Password"
                    type="password"
                    value={newUserPassword[0]}
                    setValue={newUserPassword[1]}
                    />

                <Input 
                    label="Confirm Password"
                    type="password"
                    value={newUserConfirmPassword[0]}
                    setValue={newUserConfirmPassword[1]}
                    />

                <button onClick={signUpHandler}>Create an account</button>
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