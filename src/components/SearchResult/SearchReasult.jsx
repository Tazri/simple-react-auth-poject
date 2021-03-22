import React from 'react';
import MiniCard from '../MiniCard/MiniCard';
import './SearchResult.css'

const SearchReasult = props => {
    
    let {
        from,
        to
    } = props;

    return (
        <div className="search-reasult search-card">
            <div className="from-to">
                <div className="progress">
                    <div className="circle-div-two"></div>
                    <div className="circle-div-one"></div>
                </div>
                <div>
                    <h3>{from}</h3>
                    <h3>{to}</h3>
                </div>
            </div>

            <div className="mini-card-container">
                <MiniCard />
            </div>
        </div>
    );
};

export default SearchReasult;