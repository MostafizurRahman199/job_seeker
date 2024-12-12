import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import ErrorPage from "../../components/Error.jsx/ErrorPage";
import { fetchJobDetails } from "../../API/api";
import JobHeader from "./JobHeader";
import JobDetailsSection from "./JobDetailsSection";
import JobDescription from "./JobDescription";
import JobRequirements from "./JobRequirements";
import JobResponsibilities from "./JobResponsibilities";
import ContactInfo from "./ContactInfo";
import { motion } from "framer-motion";

const JobDetails = () => {
  const { id } = useParams();

  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved((prev) => !prev);
  };

  const { data: job, isLoading, isError, error } = useQuery({
    queryKey: ["jobDetails", id],
    queryFn: () => fetchJobDetails(id),
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorPage errorMessage={error.message} />;
  }

  return (
    <div className="w-11/12 max-w-screen-lg mx-auto py-10">
      <JobHeader job={job} onSave={handleSave} isSaved={isSaved} />
      <JobDetailsSection job={job} />
      <JobDescription description={job.description} />
      <JobRequirements requirements={job.requirements} />
      <JobResponsibilities responsibilities={job.responsibilities} />
      <ContactInfo hrName={job.hr_name} hrEmail={job.hr_email} />
      <div className="mt-6 text-center">

       <Link to={`/jobApply/${job._id}`}>
       <motion.button  className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
        
        
        animate={{ scale:[0.8,1,0.8]}}
        
        transition={{
         repeat:Infinity,
         duration:3
        }}
        >
          Apply Now
        </motion.button>
       </Link>
      </div>
    </div>
  );
};

export default JobDetails;
