import { createContext, useState } from "react";

export const BranchContext = createContext();
const BranchProvider = ({ children }) => {
  const [branches, setBranches] = useState(["s"]);
  return (
    <BranchContext.Provider value={{ branches }}>
      {children}
    </BranchContext.Provider>
  );
};

export default BranchProvider;
