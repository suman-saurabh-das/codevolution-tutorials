import React from "react";
import ParentComponent from "./components/01_ParentComponent";

export const UserContext = React.createContext();
export const WorkContext = React.createContext();

function DataPassingUsingContext() {
  return (
    <div>
      <UserContext.Provider value="Saurabh">
        <WorkContext.Provider value="Developer">
          <ParentComponent />
        </WorkContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default DataPassingUsingContext;
