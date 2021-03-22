import React from 'react';
import './SearchInput.css';

const SearchInput = props => {
    let {
        label,
        name
    } = props

    return (
        <div className="search-input">
            <label htmlFor={name}>{label}</label>
            <input 
                type="text"/>
        </div>
    );
};

export default SearchInput;