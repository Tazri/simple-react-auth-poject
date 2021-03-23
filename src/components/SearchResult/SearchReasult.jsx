import React from 'react';
import MiniCard from '../MiniCard/MiniCard';
import './SearchResult.css'

const SearchReasult = props => {
    
    let {
        from,
        to,
        data
    } = props;

    let one = data[0];

    let miniCards = data.map(obj=><MiniCard seat={obj.seat} price={obj.price} key={Math.random()} />)

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
                {miniCards}
            </div>
        </div>
    );
};

export default SearchReasult;