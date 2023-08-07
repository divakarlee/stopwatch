import React, { useRef, useState } from "react";
import './App.css';

export default function App(){
      const [time ,setTime] = useState(null);
      const [now ,setNow] = useState(null);

      const intervalRef = useRef(null);
      
  const handleStart = ()=>{
    setTime(Date.now())
    setNow(Date.now())  
      intervalRef.current = setInterval(() => {
        setTime(Date.now())
      }, 10);
  }
  const handleStop = ()=>{
      clearInterval(intervalRef.current)
  }

  let timePassed = (time - now) /1000
  return(
    <div>
      <center>
      <h1>React Stop Watch</h1>
      <div className="watch">StopWatch:-{timePassed.toFixed(3)}</div>
      <div>
        <button className="Start" onClick={handleStart}>Start</button>
        <button className="Stop" onClick={handleStop}>Stop</button>
      </div>
      </center>
    </div>
  )
}