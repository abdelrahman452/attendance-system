import axios from "./axiosInstance"

const getBranches=async ()=>{
  
    try {
    const response=await axios.get(`${import.meta.env.VITE_API_BASE}api/Branches/GetAllBranches`);
         

    return response.data
}
 catch (error) {
    console.error(error)
}
}
const addBranches=async(values)=>{
  console.log(values)
  try {
      const response=await axios.post(`${import.meta.env.VITE_API_BASE}api/Branches/CreateBranch`,values)
      return response
  } catch (error) {
    console.log(error)
  }
}
export {getBranches,addBranches}