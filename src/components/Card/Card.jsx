import React from 'react';
import './Card.style.css';

const Card = props => {
    let {
        img,
        name
    } = props

    return (
        <div className="card">
            <div>
                <img src={img} alt={name}/>
            </div>
            <h2>{name}</h2>
        </div>
    );
};

export default Card;