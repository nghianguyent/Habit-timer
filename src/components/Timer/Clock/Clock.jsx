import React from 'react';
import './Clock.css';
import CircularProgress from '@material-ui/core/CircularProgress';

const Clock = (props) => {
    return (
        <div className="clock-container">
            <CircularProgress 
                className="progress-bar"
                size={150}
                thickness={3.6}
                value={props.percent}
                variant={"determinate"}
             />
            <h2>{props.time}</h2>
            <h4>{props.unit}</h4>
        </div>
    );
};

export default Clock;;