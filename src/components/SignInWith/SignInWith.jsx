import React, { useContext } from 'react';
import './SignInWith.style.css';
import facebookIcon from './../../img/facebook.png';
import googleIcon from './../../img/google.png';
import { UserContext } from '../UserProvider/UserProvider';

const SignInWith = () => {
    let {
        googleSignIn,
        facebookSignIn
    } = useContext(UserContext);

    return (
        <div className="sign-in-with">
            <div className="or-line">
                <hr />
                <span>Or</span>
                <hr />
            </div>

            <div className="sign-in-media">
                <div onClick={googleSignIn}>
                    <img src={googleIcon} alt="facebook"/>
                    <p>Continue with Google</p>
                </div>

                <div onClick={facebookSignIn}>
                    <img src={facebookIcon} alt="google"/>
                    <p>Continue with Facebook</p>
                </div>
            </div>
        </div>
    );
};

export default SignInWith;