import React, { useEffect, useRef, useState } from 'react'

export default function Timer() {
  const [timer, updateTimer] = useState(0);
  const timerRef = useRef(null);
  
  useEffect(() => {
    return () => {
        console.log('this is run on every unmount 1');
    }
  }, []);
  useEffect(()=> {
    timerRef.current = setInterval(() => {
    console.log('Timer is still running' , timer);
        updateTimer((preState) => {
            return preState + 1
        });
    },1000);

    return  () => {
        console.log('Component unmounted');
        console.log('this is run on every unmount 2');
        clearInterval(timerRef.current)
    }

  }, []);
  const stopTimer = () => {
    clearInterval(timerRef.current);
    console.log('Stop the timer state', timer );

  }
  return (
    <div> Timer running : <span>{timer}</span>
      <div>
         <button onClick={stopTimer}>Stop Timer</button>
      </div>
     </div>
    
  )
}
