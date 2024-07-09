import React from "react";
import "./App.css";


import Input from "./DesignPatterns/RenderPropPattern/Input";

const App = () => {
 
  const multiplyBy10 = (value) => {
    return  <div>Value multiplyBy10 from input {value * 10} </div>
  }

  const showValue = (value) =>  <div>Value from input {value} </div>
 
  return (
    <>
       <Input multiplyBy10 = {multiplyBy10} showValue={showValue} />
      
      
    </>
  );
};

export default App;
