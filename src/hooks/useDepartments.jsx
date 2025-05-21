import { useContext } from "react";
import { DepartmentsContext } from "../context/DepartmentsContext";

const useDepartments = () => {
  const context = useContext(DepartmentsContext);

  return context;
};

export default useDepartments;
