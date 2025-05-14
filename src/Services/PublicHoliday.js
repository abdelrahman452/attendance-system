import axios from "axios";

const addFormData=async(values)=>{

try {
const res=await axios.post(`https://localhost:44389/api/PublicHolidays/Add`,values)
return res.data 
} catch (error) {
    console.error(error)
}
}
export {addFormData}