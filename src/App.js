import React, { useCallback, useState } from "react";
import './App.css';
const App = () => {

  const [text, updateText] = useState('Rendered text');
  const changeText = useCallback(() => {
    updateText((prevState)=>{
      console.log('prev data is', prevState);
      return prevState + ' Updated text';
    })
  }, []);
  return (
    <>
      <p>{text}</p>
      <button onClick={changeText}>Change Text</button>
    </>
  );
};

export default App;