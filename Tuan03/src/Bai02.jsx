import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function DigitalClock(){
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log('lala');

    const timer = setInterval(() =>{
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);


  return (
      <div>
        <h2>Clock: </h2>
        <h1>{time.toLocaleTimeString()}</h1>
      </div>
  );
  
}



export default DigitalClock;
