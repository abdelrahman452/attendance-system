import { createContext, useEffect, useState } from "react";
import axios from "../Services/axiosInstance";
export const EmployeesContext = createContext();
const EmployeesProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  //get Employees Data
  const getEmployees = async () => {
    try {
      const response = await axios.get("api/Accounting/GetAllUsers");
      const data = response.data.response;
      setEmployees(
        data.map((item) => {
          return {
            ...item,
            key: item.userId,
            hireDate: item.hireDate.split("T")[0],
          };
        })
      );
    } catch (error) {
      console.error(`${error.message}`);
    } finally {
      console.log("done");
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);
  return (
    <EmployeesContext.Provider value={{ employees }}>
      {children}
    </EmployeesContext.Provider>
  );
};
export default EmployeesProvider;
