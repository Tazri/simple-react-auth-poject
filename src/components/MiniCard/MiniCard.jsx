import React from 'react';
import './MiniCard.css';
import bike from './../../img/bike.png';
import bus from './../../img/bus.png';
import car from './../../img/car.png';
import train from './../../img/train.png';
import GroupIcon from '@material-ui/icons/Group';
import { useParams } from 'react-router-dom';
import { rgbToHex } from '@material-ui/core';

const MiniCard = props => {
    let {
        media
    } = useParams();

    let {
        seat,
        price
    } = props

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

    let iconStyle = {
        color: 'rgba(150, 148, 148, 0.638)'
    }

    return (
        <div className="mini-card">
            <div className="img-div">
                <img src={imgSrc} alt={media}/>

                <p>{media}</p>
            </div>
            <div>
                <div className="mini-icon"><GroupIcon style={iconStyle} /><p>{seat}</p></div>

                <p>${price}</p>
            </div>
        </div>
    );
};

export default MiniCard;