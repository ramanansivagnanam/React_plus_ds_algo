import React, { useState } from "react";
import "./App.css";

import Tab from "./DesignPatterns/CompoundPattern/Tab";

const App = () => {
  const [currentIndex, updateCurrentIndex] = useState(0);

  return (
    <Tab currentTab={currentIndex} onChange={updateCurrentIndex}>
      <Tab.TabContainer>
        <Tab.HeadingContainer>
          <Tab.Item label={"item 1"} index={0} />
          <Tab.Item label={"item 2"} index={1} />
          <Tab.Item label={"item 3"} index={2} />
        </Tab.HeadingContainer>
        <Tab.ContentContainer>
          <Tab.Content index={0} >
            <div>Tab content 1</div>
          </Tab.Content>
          <Tab.Content index={1}>
            <div>Tab content 2</div>
          </Tab.Content>
          <Tab.Content index={2}>
            <div>Tab content 3</div>
          </Tab.Content>
        </Tab.ContentContainer>
      </Tab.TabContainer>
    </Tab>
  );
};

export default App;
