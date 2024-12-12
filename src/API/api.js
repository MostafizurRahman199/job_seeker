import axios from "axios";


const api = axios.create({
    baseURL : "http://localhost:5000",
});

export const fetchJobs = async()=>{
    try {
        const response = await api.get("/jobs");
        if (response.status === 200) {
          return response.data; 
        }
        return []; 
      } catch (error) {
        console.log(error.message);
        return []; 
      }
}


export const fetchJobDetails = async(id)=>{
    try {
        const response = await api.get(`/jobDetails/${id}`);
        if (response.status === 200) {
          return response.data; 
        }
        return []; 
      } catch (error) {
        console.log(error.message);
        return []; 
      }
}