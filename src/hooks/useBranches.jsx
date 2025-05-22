import { useContext } from "react";
import { BranchContext } from "../context/BranchContext";

const useBranches = () => {
  const context = useContext(BranchContext);

  return context;
};

export default useBranches;
