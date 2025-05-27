import { createContext, useState, useEffect } from "react";
import { message } from "antd";
import axios from "../Services/axiosInstance";

export const DepartmentsContext = createContext();
const DepartmentsProvider = ({ children }) => {
  const [departments, setDepartments] = useState([]);
  //Get Department Data
  const getDepartments = async () => {
    try {
      const response = await axios.get(`api/Departments/GetAllDepartments`);

      const data = response.data.response;
      setDepartments(
        data?.map((item) => ({
          ...item,
          key: item.id,
        }))
      );
    } catch (error) {
      console.error(error);
    } finally {
      console.log("Departments fetched successfully");
    }
  };

  useEffect(() => {
    getDepartments();
  }, []);
  return (
    <DepartmentsContext.Provider
      value={{ departments, reFetch: getDepartments }}
    >
      {children}
    </DepartmentsContext.Provider>
  );
};

export default DepartmentsProvider;
