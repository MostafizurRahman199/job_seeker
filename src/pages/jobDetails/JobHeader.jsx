import React from "react";
import { motion } from "framer-motion";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
// import { useFirebaseAuth } from "../../Auth/AuthProvider";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import ApiComponent from "../../API/ApiComponent";
import { useFirebaseAuth } from "../../hooks/useAuth";


const JobHeader = ({ job, onSave, isSaved }) => {

  const {
   
    saveJob,
   
  } = ApiComponent();


  const { user } = useFirebaseAuth();
  const name = user.displayName;
  const email = user.email;

  const {
    title,
    location,
    jobType,
    category,
    company,
    company_logo,
    savedUserName,
    savedUserEmail,
    _id,
  } = job;

  // Mutation to save the job to the database
  const mutation = useMutation({
    mutationFn: (jobData) => saveJob(jobData),
    onSuccess: () => {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Job saved successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    onError: () => {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Failed to save the job.",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  });




  const handleSaveJob = () => {
    const jobData = {
   
     savedUserName : name,
     savedUserEmail : email,
     jobId: job._id,
     title,
     location,
     jobType,
     category,
     company,
     company_logo,
    
  };

    console.log(jobData);
    mutation.mutate(jobData);
  };

  return (
    <div className="bg-[#006494]/80 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-6 mb-8 relative">
      {/* Company Logo with Animation */}
      <motion.img
        src={job.company_logo}
        alt={job.company}
        className="w-16 h-16 object-cover"
        animate={{ scale: [0.9, 1, 0.9] }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
      />

      {/* Job Title and Company */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-white">{job.title}</h1>
        <p className="text-white text-sm">{job.company}</p>
      </div>

      {/* Save Job Button */}
      <div className="absolute top-6 right-6 md:static">
        <button
          onClick={handleSaveJob}
          className="flex items-center gap-2 bg-white text-[#006494] px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300"
        >
          {isSaved ? <FaBookmark /> : <FaRegBookmark />}
          <span>{isSaved ? "Saved" : "Save Job"}</span>
        </button>
      </div>
    </div>
  );
};

export default JobHeader;
