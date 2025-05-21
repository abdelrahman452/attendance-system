import { useContext } from "react";
import { EmployeesContext } from "../context/EmployeesContext";

const useEmployees = () => {
  const context = useContext(EmployeesContext);
  return context;
};

export default useEmployees;
