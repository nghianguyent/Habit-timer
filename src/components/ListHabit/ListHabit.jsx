import React, { useState } from 'react';
import './ListHabit.css';
import HabitItem from './HatbitItem/HabitItem.jsx';

const ListHabit = (props) => {
    const [list, setList] = useState([
        <HabitItem returnTime={props.returnTime}/>
    ]);

    const addItem = () => {
        let tmpList = list;
        tmpList.push(<HabitItem returnTime={props.returnTime}/>)
        setList(tmpList)
    }
    return (
        <div className="habit-container">   
            <h2>List of Habits:</h2>
            {/* <button onClick={addItem} className="icofont-ui-add"></button> */}
            <ul>
                {list}
            </ul>
        </div>
    );
};

export default ListHabit;