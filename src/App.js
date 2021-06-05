import React, { useState } from 'react';
import './App.css';
import Timer from './components/Timer/Timer.jsx';
import ListHabit from './components/ListHabit/ListHabit.jsx';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
function App() {
  const [habitTimer, setHabitTimer] = useState(new Date("00:00:00"));
  
  const getTime = (value) => {
    setHabitTimer(value);
  }
  const countdown = () => {
    let tmp = habitTimer - 1000;
    setHabitTimer(new Date(tmp));
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
         <div className="habit-timer-container">
            <div className="habit-timer">
                  <Timer getTimer={habitTimer} countdownTimer={countdown} />
                  <ListHabit returnTime={getTime}/>
            </div>
          </div>
    </LocalizationProvider>
  );
}

export default App;
