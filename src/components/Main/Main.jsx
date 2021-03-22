import React from 'react';
import Card from '../Card/Card';
import './Main.style.css'
import bikeImg from './../../img/bike.png';
import carImg from './../../img/car.png';
import busImg from './../../img/bus.png';
import trainImg from './../../img/train.png';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <main>
            <Link to="/media/bike">
                <Card img={bikeImg} name="Bike" />
            </Link>

            <Link to="/media/car">
                <Card img={carImg} name="Car" />
            </Link>


            <Link to="/media/bus">
                <Card img={busImg} name="Bus" />
            </Link>

            <Link to="/media/train">
                <Card img={trainImg} name="Train" />
            </Link>
            
        </main>
    );
};

export default Main;