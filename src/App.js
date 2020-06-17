import React, {useState} from 'react';
import {Message} from './Message.js'
import './App.css';

export default function App() {
  let [count, setCount] = useState(4)
  let [isMorning, setMorning] = useState(false)
  
  return (
    <div className={`box ${isMorning ? 'DayLight' : '' }`}>
      <h3> Have A Good {isMorning ? 'Morning' : 'Night'} </h3> 
      <Message counter={count}/>
      <br />
      <button onClick={()=> setCount(++count)}>Update Counter</button>
      <button onClick={()=> setMorning(!isMorning)}>Update Day</button>
    </div>
  );
}
