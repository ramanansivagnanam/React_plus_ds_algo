import React, { useRef, useState } from "react";
import Timer from "./Timer";
import Input from "./Input";

export default function UseRefSample() {
    let a = 0;
    const refS = useRef(null);
    const inputRef = useRef(null);
    const [data, updateData] = useState('*');
    const updateLocal = () => {
        a = 10;
    }
    const updateRef = () => {
        refS.current = 'dsfs';
    }
    const updateState = () => {
        updateData( prev => prev + 1);
    }
    const handleFocus = () => {
        inputRef.current?.focus();
    }
    console.log({ a ,  data}, refS.current);
  return (
    <> 
        <div>{data}</div>
        <div>{a}</div>
        <div>{refS.current}</div>
      <button onClick={updateLocal}>Update local </button>
      <button onClick={updateRef}>Update ref </button>
      <button onClick={updateState}>Update state </button>
      

      <h1>Timer</h1>
      <Timer/>
      <Input inputRef={inputRef}/> <button onClick={handleFocus}>Click here to focus</button>
    </>

  );
}
