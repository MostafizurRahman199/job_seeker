import axios from "axios";

// Create an Axios instance
const api = axios.create({
     baseURL : import.meta.env.VITE_API_BASE_URL  || "http://localhost:5000",
});

// Helper function to handle responses
const handleResponse = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }
  throw new Error(`HTTP Error: ${response.status}`);
};

// Helper function to handle errors
const handleError = (error) => {
  console.error("API Error:", error.message);
  throw error; // Rethrow the error for the caller to handle
};

// Fetch all jobs
export const fetchJobs = async () => {
  try {
    const response = await api.get("/jobs");
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

// Fetch job details by ID
export const fetchJobDetails = async (id) => {
  try {
    const response = await api.get(`/jobDetails/${id}`);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

// Post a job application
export const postJobApplication = async (data) => {
  try {
    const response = await api.post(`/job-applications`, data);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};


export const getAppliedJob = async (email) => {
    try {
      const response = await api.get(`/applied-job/${email}`);
      return handleResponse(response);
    } catch (error) {
      handleError(error);
    }
  };