import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import './SearchCard.css'

const SearchCard = props => {
    let {
        onClick,
        error,
        to,
        from,
    } = props;

    let errorMessage = <p className="search-error">* {error}</p>
    return (
        <div className="search-card">
                {error && errorMessage}

                <SearchInput 
                    label="Pick From"
                    name="fromPleace"
                    valueAndSetValue={from}
                />
            
                <SearchInput
                    label="Pick To"
                    name="toPleace"
                    valueAndSetValue={to}
                 />

                 <button onClick={onClick}>Search</button>
            </div>
    );
};

export default SearchCard;