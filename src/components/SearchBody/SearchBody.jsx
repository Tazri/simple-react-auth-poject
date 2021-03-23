import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchCard from '../SearchCard/SearchCard';
import SearchReasult from '../SearchResult/SearchReasult';
import fakeData from './../../fakedata/fakedata.json';
import './SearchBody.css';

const SearchBody = () => {
    let [result,setResult] = useState([]);
    let [error,setError] = useState('');
    let [to,setTo] = useState('');
    let [from,setFrom] = useState('');

    let {
        media
    } = useParams();

    function onSearchButtonHandler(){
        if(!to.trim() || !from.trim()){
            setError('Please Enter Place Name To and From correctly.');
        }
        else{
            setResult(fakeData[media]);
            setError('');
        }
    }


    return (
        <div className="search-body">
            {!result.length && <SearchCard 
                onClick={onSearchButtonHandler} 
                error={error}
                to={[to,setTo]}
                from={[from,setFrom]}
                 />}

            {result.length ? <SearchReasult data={result}  from={from} to={to} /> : null}
        </div>
    );
};

export default SearchBody;