import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [date,getDate] = useState(new Date());

  useEffect(()=>{
    const timerId = setTimeout( () => {
      getDate(new Date())
    },1000)

    return () => clearInterval(timerId);
  });

  return (
    <div>
       <input></input>
       <p>{date.toString()}</p>
    </div>
  );
}

export default App;
