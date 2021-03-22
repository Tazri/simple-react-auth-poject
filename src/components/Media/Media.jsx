import React from 'react';
import Header from '../Header/Header';
import Map from '../Map/Map';
import SearchBody from '../SearchBody/SearchBody';
import './Media.css'

const Media = () => {
    return (
        <div className="media">
            <Header />
            <div className="media-line"></div>
            <div className="media-container">
                <SearchBody />
                <Map />
            </div>
        </div>
    );
};

export default Media;