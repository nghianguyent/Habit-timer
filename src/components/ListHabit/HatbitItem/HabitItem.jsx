import React, { useState } from 'react';
import './HabitItem.css';

// import form material UI
import { DialogActions, DialogContent, DialogTitle, Dialog} from '@material-ui/core';
import { Button, TextField  } from '@material-ui/core';
import  TimePicker  from '@material-ui/lab/TimePicker';

import Input from './Input/Input.jsx';

const HabitItem = (props) => {
    const [open, setOpen] = useState(false);
    const [habit, setHabit] = useState("Habit");
    const [notifyValid, setNotifyValid] = useState();
    const [reminder, setReminder] = useState(new Date(2021, 5, 3, 0, 0, 0, 0));
    
    // validate input value
    const validate = () => {
        if (habit === ""){
            setNotifyValid("Please enter your habit");
            return false;
        }
        if (reminder.getHours() + reminder.getMinutes() <= 0) {
            setNotifyValid("Please enter the reminding time");
            return false;
        }
        setNotifyValid("");
        return true;
    };
    //handle event for dialog
    const openDialog = () => {    
        setOpen(true);
    };
    const closeDialog = () => {
        setOpen(false);
    };
    const handleInput = (e) => {
        setHabit(e.target.value);
    };
    // get time value
    const getTime = (value) => {
        setReminder(new Date(value));
    };
    // Submit event
    const submitDialog = () => {
        if (!validate()){
            return false; 
        }
        props.returnTime(reminder);
        setOpen(false);
    };
    return (
        <div className="habit-item">
            <div className="habit-label">
                <h4>{habit}: {reminder.getHours()}:{reminder.getMinutes()}</h4>
            </div>  
            <button className="edit-button icofont-pencil-alt-1" onClick={openDialog}></button>
            <Dialog 
                className="dialog-container"
                open={open}
                maxWidth={'sm'}
                onClose={closeDialog}
            >    
                <DialogTitle className="dialog-title">
                    Edit your habit
                </DialogTitle>
                <DialogContent className="dialog-content">
                    <Input type="text" label="Your habit: " value={habit} eventOnChange={handleInput} notify={notifyValid}/>
                    <TimePicker
                        ampm={false}
                        className="time-picker"
                        views={['hours', 'minutes']}
                        inputFormat="HH:mm"
                        mask={"__:__"}
                        value={reminder}
                        label="Remind time"
                        onChange={getTime}     
                        renderInput={(params) => <TextField {...params} />}       
                    ></TimePicker>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={closeDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={submitDialog} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default HabitItem;