import React, { useState, useEffect, useRef } from 'react';
import './Timer.css';
import Popup from './Popup/Popup.jsx';
import Clock from './Clock/Clock.jsx';
const Timer = (props) => {
    // create timer state
    const [state, setState] = useState(new Date(props.getTimer));
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        setState(new Date(props.getTimer));
        // setState((state) => new Date(state - 1000));
        const tick = () => {
            let validTime = state.getHours() + state.getMinutes() + state.getSeconds();
            if (validTime > 0){
                let tmpState = state - 1000;
                setState((state) => new Date(state - 1000));
                setHours(state.getHours());
                setMinutes(state.getMinutes());
                setSeconds(state.getSeconds());
                console.log(state);
            };
            if (validTime === 0 ){
                setState((state) => new Date(state - 1000));
                alert("do it");
            };
        };
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);

    }, []);

    return (
        <div className="reminding-clock">
            <h2>Reminding coming:</h2>
            <div className="timer-container">
                <Clock time={hours} percent={Math.floor(hours / 23 * 100)} unit="Hours"/>
                <Clock time={minutes} percent={Math.floor(minutes / 59 * 100)} unit="Minute"/>
                <Clock time={seconds} percent={Math.floor(seconds / 59 * 100)} unit="Second"/>
                <Popup habit={props.habit}/>
            </div>
        </div>
    );
};

export default Timer;