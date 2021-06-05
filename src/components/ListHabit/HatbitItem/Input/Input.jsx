import React from 'react';
import './Input.css';

const Input = (props) => {
    return (
        <div className="input-item">
            <label htmlFor={props.type}>{props.label}</label>
            <input type={props.type} onChange={props.eventOnChange} value={props.value}/>
            <p>{props.notify}</p>
        </div>
    );
};

export default Input;