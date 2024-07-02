import React, { useCallback, useState } from "react";
import "./App.css";
import ButtonWithTooltip from "./ButtonWithTooltip";
const App = () => {
  return (
    <>
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
      />
    </>
  );
};

export default App;
