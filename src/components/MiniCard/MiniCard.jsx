import React from 'react';
import './MiniCard.css';
import bike from './../../img/bike.png';
import bus from './../../img/bus.png';
import car from './../../img/car.png';
import train from './../../img/train.png';
import GroupIcon from '@material-ui/icons/Group';

const MiniCard = () => {
    let media = 'bike';
    let imgSrc = null;

    if(media === 'bike'){
        imgSrc = bike;
    }else if(media === 'bus'){
        imgSrc= bus;
    }else if(media === 'car'){
        imgSrc = car;
    }else{
        imgSrc = train;
    }

    return (
        <div className="mini-card">
            <div className="img-div">
                <img src={imgSrc} alt="bike"/>

                <p>Bike</p>
            </div>
            <div>
                <div className="mini-icon"><GroupIcon /><p>36</p></div>

                <p>$65</p>
            </div>
        </div>
    );
};

export default MiniCard;