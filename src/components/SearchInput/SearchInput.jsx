import React from 'react';
import './SearchInput.css';

const SearchInput = props => {
    let {
        label,
        name,
        valueAndSetValue
    } = props

    let [value,setValue] = valueAndSetValue;

    return (
        <div className="search-input">
            <label htmlFor={name}>{label}</label>
            <input 
                type="text"
                value={value}
                onChange={event =>{
                    setValue(event.target.value);
                }}
                />
        </div>
    );
};

export default SearchInput;