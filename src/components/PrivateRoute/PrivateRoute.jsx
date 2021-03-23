import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../UserProvider/UserProvider';

const PrivateRoute = ({children,...rest}) => {
    let {
        isAuthenticate
    } = useContext(UserContext);

    return (
        <Route
            {...rest}
            render={({location})=>{
                return isAuthenticate ? 
                    (children) : 
                    <Redirect
                        to={{
                            pathname : "/signup",
                            state : { from : location } 
                        }}
                    />
            }}
        />

    );
};

export default PrivateRoute;