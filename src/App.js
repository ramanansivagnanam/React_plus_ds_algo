import React, { Suspense, lazy, useCallback, useState } from "react";
import "./App.css";
import ButtonWithTooltip from "./ButtonWithTooltip";
import UseRefSample from "./UseRefSample";
import Child1 from "./Child1";
import Button from "./Button.js";
import { ThemeContext } from "./context.js";
const Text = lazy(() => import("./Text.js"));

const App = () => {
  const [theme, updateTheme] = useState("dark");

  return (
    <>
      <ThemeContext.Provider value={[theme, updateTheme]}>
        <div>
          <Button> Theme value {theme} </Button>
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
