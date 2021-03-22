import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchCard from '../SearchCard/SearchCard';
import SearchReasult from '../SearchResult/SearchReasult';
import fakeData from './../../fakedata/fakedata.json';
import './SearchBody.css';
import car from './../../img/car.png';
import bike from './../../img/bike.png';
import bus from './../../img/train.png';
import train from './../../img/bus.png';

const SearchBody = () => {
    let [result,setResult] = useState([]);
    let [error,setError] = useState('');
    let [to,setTo] = useState('');
    let [from,setFrom] = useState('');

    let {
        media
    } = useParams();

    function onSearchButtonHandler(){
        setResult(fakeData[media]);
    }


    return (
        <div className="search-body">
            {!result.length && <SearchCard 
                onClick={onSearchButtonHandler} 
                error={error}
                 />}

            {result.length ? <SearchReasult data={result} from="Mirpur" to="Dhanmondi" /> : null}
        </div>
    );
};

export default SearchBody;