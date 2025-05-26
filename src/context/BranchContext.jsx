import { message } from "antd";
import { createContext, useEffect, useState } from "react";
import axios from "../Services/axiosInstance";

export const BranchContext = createContext();
const BranchProvider = ({ children }) => {
  const [branches, setBranches] = useState([]);
  //getting Branches Data
  const getBranches = async () => {
    try {
      const response = await axios.get(`api/Branches/GetAllBranches`);

      const data = response.data.response;
      setBranches(
        data?.map((item) => ({
          ...item,
          key: item.id,
        }))
      );
    } catch (error) {
      console.error(error);
    } finally {
      console.log("Branches fetched successfully");
    }
  };

  useEffect(() => {
    getBranches();
  }, []);
  return (
    <BranchContext.Provider value={{ branches, refetch: getBranches }}>
      {children}
    </BranchContext.Provider>
  );
};

export default BranchProvider;
