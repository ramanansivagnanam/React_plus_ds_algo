import React, { useCallback, useState } from "react";
import "./App.css";
import ButtonWithTooltip from "./ButtonWithTooltip";
import UseRefSample from "./UseRefSample";
import Child1 from "./Child1";
const App = () => {
  console.log('App rendered');
  const [count, updateCount] = useState(0);
  const handleClick = () => {
    updateCount(prev => prev+1);
  }
  return (
    <>
      <div>
        <span>Count:</span>
        <h4>{count}</h4>
        <button onClick={handleClick} >Update App count</button>
        <Child1 data={count}/>
        {/* <ButtonWithTooltip
        tooltipContent={
          <>
            <div>I am the tooltip content showing above</div>
            <div>Some more content </div>
            <br />
          </>
        }
      />
      <br />
      <ButtonWithTooltip
        tooltipContent={
          <>
            <div>I am the tooltip content showing above</div>
            <div>Some more content </div>
            <br />
          </>
        }
      />
       <br />
      <ButtonWithTooltip
        tooltipContent={
          <>
            <div>Some more content </div>
            <br />
          </>
        }
      /> */}

        {/* <UseRefSample /> */}
      </div>
    </>
  );
};

export default App;
