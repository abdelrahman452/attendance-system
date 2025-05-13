import axios from "axios"

const axiosInstance=
    axios.create({
        baseURL:import.meta.env.VITE_API_BASE,
        headers:{
            "Content-Type":"application/json",
        
        }
    })

export default axiosInstance
// // axiosInstance.js
// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE, // Correct key: baseURL, not baseUrl
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// export default axiosInstance;
