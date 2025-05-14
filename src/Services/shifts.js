import axios from "./axiosInstance"

const getShifts=async ()=>{
  
    try {
    const response=await axios.get(`${import.meta.env.VITE_API_BASE}api/Branches/GetAllBranches`);
         

    return response.data
}
 catch (error) {
    console.error(error)
}
}
const addShifts=async(values)=>{
  
  try {
      const response=await axios.post(`${import.meta.env.VITE_API_BASE}api/Branches/CreateBranch`,values)
      return response
  } catch (error) {
    console.log(error)
  }
}
export {getShifts,addShifts}