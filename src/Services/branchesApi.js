import axios from "./axiosInstance"

const getBranches=async ()=>{
    try {
    const response=await axios.get("/dsad");
    
    return response.json()
}
 catch (error) {
    console.error(error)
}
}
const addBranches=async(values)=>{
  try {
      const response=await axios.post("/uasdda",values)
      return response
  } catch (error) {
    console.log(error)
  }
}
export {getBranches,addBranches}