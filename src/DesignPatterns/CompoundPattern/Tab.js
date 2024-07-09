import React, { createContext, useContext } from "react";
import './Tab.css';
export const TabContext = createContext();

function Tab({ currentTab, onChange, children }) {
  return <TabContext.Provider value={{currentTab, onChange }}>{children}</TabContext.Provider>;
}

export default Tab;

Tab.TabContainer = ({ children }) => {
  return <div className="tabContainer">{children}</div>;
};

Tab.HeadingContainer = ({ children }) => {
  return <div className="headingContainer">{children}</div>;
};
Tab.Item = ({ label, index }) => {
  const { onChange, currentTab }  = useContext(TabContext);
  const handleTabClick = () => {
    onChange(index);
  }
  return <div className={`item ${currentTab === index ? 'active': ''}`} onClick={handleTabClick}>{label}</div>;
};

Tab.ContentContainer = ({ children }) => {
    return <div className="contentContainer">{children}</div>;
}
Tab.Content = ({ children, index }) => {
    const { currentTab } = useContext(TabContext);
    return currentTab === index ? <div className="content">{children}</div> : null;
}