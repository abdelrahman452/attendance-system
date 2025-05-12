import axios from "axios"
const axiosInstance=()=>{
    axios.create({
        baseUrl:import.meta.env.VITE_API_BASE,
        headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        }
    })
}
export default axiosInstance