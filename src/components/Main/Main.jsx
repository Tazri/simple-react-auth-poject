import React from 'react';
import Card from '../Card/Card';
import './Main.style.css'
import bikeImg from './../../img/bike.png';
import carImg from './../../img/car.png';
import busImg from './../../img/bus.png';
import trainImg from './../../img/train.png';

const Main = () => {
    return (
        <main>
            <Card img={bikeImg} name="Bike" />
            <Card img={carImg} name="Car" />
            <Card img={busImg} name="Bus" />
            <Card img={trainImg} name="Train" />
        </main>
    );
};

export default Main;