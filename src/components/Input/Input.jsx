import React from 'react';
import './Input.style.css'

const Input = props => {
    let {
        type = 'text',
        label,
        error
    } = props;

    let errorMessage = <p>* {error}</p>
    return (
        <div className="input-field">
        <div className="input">
            <input 
                type={type}
                id={label}
                required
                />
            <div className="underline"></div>
            <label htmlFor={label} className="label">{label}</label>
        </div>

        {error && errorMessage}
        </div>
    );
};

export default Input;