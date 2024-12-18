import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import ApiComponent  from "../../API/ApiComponent";
import Swal from "sweetalert2";
// import { useFirebaseAuth } from "../../Auth/AuthProvider";
import Loading from "../../components/Loading/Loading";
import ErrorPage from "../../components/Error.jsx/ErrorPage";
import { useFirebaseAuth } from "../../hooks/useAuth";

const EditJobPost = () => {
  const {
    
    fetchJobDetails,
    updateJobPost,
   
  } = ApiComponent();

  const navigate = useNavigate();
  const { id } = useParams(); // Getting job ID from the URL parameters
  const{user} = useFirebaseAuth();
  const name = user.displayName;
  const email = user.email;

  const [formData, setFormData] = useState({
    title: '',
    location: '',
    jobType: '',
    category: '',
    applicationDeadline: '',
    salaryRangeMin: '',
    salaryRangeMax: '',
    salaryRangeCurrency: '',
    description: '',
    company: '',
    hr_name: '',
    hr_email: '',
    requirements: '',
    responsibilities: '',
    company_logo: '',
    addJobOwnerName: '', // Add Job Owner Name
    addJobOwnerEmail: '' // Add Job Owner Email
  });

  // Fetch job details using the job ID
  const { data: selectedJob, isLoading, isError } = useQuery({
    queryKey: ["fetchJobDetails", id],
    queryFn: () => fetchJobDetails(id),
  });

  // Update job post mutation
  const updateMutation = useMutation({
    // mutationFn now receives both updatedFormData and the job id
    mutationFn: (updatedData) => updateJobPost(updatedData, id),
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Job post updated successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/myJobPost"); // Redirect back to the job list
    },
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: "Failed to update job!",
        text: error.message,
        showConfirmButton: true,
      });
    },
  });

  // Set the form data when job details are loaded
  useEffect(() => {
    if (selectedJob) {
      setFormData({
        title: selectedJob.title || '',
        location: selectedJob.location || '',
        jobType: selectedJob.jobType || '',
        category: selectedJob.category || '',
        applicationDeadline: selectedJob.applicationDeadline || '',
        salaryRangeMin: selectedJob.salaryRange?.min || '',
        salaryRangeMax: selectedJob.salaryRange?.max || '',
        salaryRangeCurrency: selectedJob.salaryRange?.currency || '',
        description: selectedJob.description || '',
        company: selectedJob.company || '',
        hr_name: selectedJob.hr_name || '',
        hr_email: selectedJob.hr_email || '',
        requirements: selectedJob.requirements?.join(", ") || '',
        responsibilities: selectedJob.responsibilities?.join(", ") || '',
        company_logo: selectedJob.company_logo || '',
        addJobOwnerName: name || '', // Add Job Owner Name
        addJobOwnerEmail: email || '' // Add Job Owner Email
      });
    }
  }, [selectedJob]);

  // Handle input change for form fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Split comma-separated strings back into arrays
    const updatedFormData = {
      ...formData,
      requirements: formData.requirements.split(",").map(req => req.trim()),
      responsibilities: formData.responsibilities.split(",").map(res => res.trim())
    };

    // Now include updatedFormData in the mutation
    updateMutation.mutate(updatedFormData);
  };

  if (isLoading) {
    return (
      <Loading></Loading>
    );
  }

  if (isError) {
    return (
      <ErrorPage></ErrorPage>
    );
  }

  return (
    <div className="p-6 w-full sm:w-10/12 lg:w-8/12 mx-auto my-10">
      <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-[#1b98e0] to-[#006494] text-transparent bg-clip-text mb-8">Update Job Post</h1>
      <form
        onSubmit={handleSubmit}
        className="shadow-lg rounded-lg p-8 space-y-6"
      >



     {/* Add Job Owner Name */}
     <div>
          <label className="block text-lg font-semibold">Name</label>
          <input
            type="text"
            name="addJobOwnerName"
            value={formData.addJobOwnerName}
            // onChange={handleInputChange}
            readOnly
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Add Job Owner Email */}
        <div>
          <label className="block text-lg font-semibold">Email</label>
          <input
            type="email"
            name="addJobOwnerEmail"
            value={formData.addJobOwnerEmail}
            readOnly
            // onChange={handleInputChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>


        <div>
          <label className="block text-lg font-semibold">Job Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold">Job Type</label>
          <select
            name="jobType"
            value={formData.jobType}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          >
            <option value="">Select Job Type</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
            <option value="Freelance">Freelance</option>
          </select>
        </div>

        <div>
          <label className="block text-lg font-semibold">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          >
            <option value="">Select Category</option>
            <option value="Engineering">Engineering</option>
            <option value="Marketing">Marketing</option>
            <option value="Design">Design</option>
            <option value="Finance">Finance</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Customer Support">Customer Support</option>
          </select>
        </div>

        <div>
          <label className="block text-lg font-semibold">Application Deadline</label>
          <input
            type="date"
            name="applicationDeadline"
            value={formData.applicationDeadline}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold">Salary Range</label>
          <div className="flex space-x-2">
            <input
              type="number"
              name="salaryRangeMin"
              value={formData.salaryRangeMin}
              onChange={handleInputChange}
              placeholder="Min"
              className="w-1/3 p-2 border rounded"
              required
            />
            <input
              type="number"
              name="salaryRangeMax"
              value={formData.salaryRangeMax}
              onChange={handleInputChange}
              placeholder="Max"
              className="w-1/3 p-2 border rounded"
              required
            />
            <input
              type="text"
              name="salaryRangeCurrency"
              value={formData.salaryRangeCurrency}
              onChange={handleInputChange}
              placeholder="Currency"
              className="w-1/3 p-2 border rounded"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-lg font-semibold">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-lg font-semibold">Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold">Requirements (comma-separated)</label>
          <input
            type="text"
            name="requirements"
            value={formData.requirements}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold">Responsibilities (comma-separated)</label>
          <input
            type="text"
            name="responsibilities"
            value={formData.responsibilities}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold">Company Logo URL</label>
          <input
            type="text"
            name="company_logo"
            value={formData.company_logo}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

       <div className="flex gap-2">
       <Link to={"/myJobPost"}
          type="submit"
          className="w-fit p-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600"
        >
          Cancel 
        </Link>
       <button
          type="submit"
          className="w-fit p-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
        >
          Update Job
        </button>
       </div>
      </form>
    </div>
  );
};

export default EditJobPost;
