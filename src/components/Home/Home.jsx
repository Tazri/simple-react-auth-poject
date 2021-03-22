import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';

const Home = () => {
    return (
        <div className="home">
            <Header active="home" />
            <Main />
        </div>
    );
};

export default Home;