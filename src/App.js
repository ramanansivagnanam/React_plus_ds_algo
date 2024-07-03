import React, { Suspense, lazy, useCallback, useState } from "react";
import "./App.css";
import ButtonWithTooltip from "./ButtonWithTooltip";
import UseRefSample from "./UseRefSample";
import Child1 from "./Child1";
const Text = lazy(() => import("./Text.js"));
const App = () => {
  console.log("App rendered");
  const [showtext, updateText] = useState(false);
  const handleClick = () => {
    updateCount((prev) => prev + 1);
  };
  return (
    <>
      <div>
        <button onClick={() => updateText((prev) => !prev)}>Toggle text</button>
        <Suspense fallback={<div>loading...</div>}>
          <Text data="dsfsdfd dsafdf" />
        </Suspense>

        {/* <span>Count:</span>
        <h4>{count}</h4>
        <button onClick={handleClick} >Update App count</button>
        <Child1 data={count}/> */}
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
