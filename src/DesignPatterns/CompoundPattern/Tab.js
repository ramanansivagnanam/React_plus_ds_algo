import React, { createContext } from 'react'

function Tab({ currentTab, onChange, children}) {
  const TabContext = createContext(null);
  return (
    <TabContext.Provider>
        {children}
    </TabContext.Provider>
  )
}

export default Tab;

Tab.TabContainer = ({children}) => {
    return (<div>
         {children}
    </div>)
}