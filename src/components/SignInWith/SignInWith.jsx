import React from 'react';
import './SignInWith.style.css';
import facebookIcon from './../../img/facebook.png';
import googleIcon from './../../img/google.png';

const SignInWith = () => {
    return (
        <div className="sign-in-with">
            <div className="or-line">
                <hr />
                <span>Or</span>
                <hr />
            </div>

            <div className="sign-in-media">
                <div>
                    <img src={facebookIcon} alt="facebook"/>
                    <p>Continue with Facebook</p>
                </div>

                <div>
                    <img src={googleIcon} alt="google"/>
                    <p>Continue with Google</p>
                </div>
            </div>
        </div>
    );
};

export default SignInWith;