import React, { useEffect, useState } from 'react'

export default function Timer() {
  const [timer, updateTimer] = useState(0);
  useEffect(() => {
    return () => {
        console.log('this is run on every unmount 1');
    }
  }, []);
  useEffect(()=> {
   const timerInterval = setInterval(() => {
    console.log('Timer is still running' , timer);
        updateTimer((preState) => {
            return preState + 1
        });
    },1000);

    return  () => {
        console.log('Component unmounted');
        console.log('this is run on every unmount 2');
        clearInterval(timerInterval)
    }

  }, []);
  return (
    <div> Timer running : <span>{timer}</span></div>
  )
}
