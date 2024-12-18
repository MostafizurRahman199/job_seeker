import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import ApiComponent from "../../API/ApiComponent";
import Loading from "../Loading/Loading";
import ErrorPage from "../Error.jsx/ErrorPage";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
const TodayJobs = () => {


  const {
    fetchJobs,

  } = ApiComponent();

  const { data: jobs, isLoading, isError, error } = useQuery({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (isError) {
    return <ErrorPage errorMessage={error.message}></ErrorPage>;
  }

  const colorClasses = [
    "bg-green-100 text-green-600",
    "bg-blue-100 text-blue-600", 
    "bg-purple-100 text-purple-600",
  
    "bg-yellow-100 text-yellow-800",
    "bg-indigo-100 text-indigo-600",
    "bg-teal-100 text-teal-600"
  ];

  return (
    <div className="w-11/12 max-w-screen-xl mx-auto py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Today's Jobs
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Explore the latest job opportunities available today.
        </p>
      </div>

      {/* Job Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {jobs.map((job) => (
    <div
      key={job._id}
      className="bg-white border border-gray-200 rounded-2xl shadow-md p-5 hover:shadow-lg transition duration-300 hover:-translate-y-2 flex flex-col justify-between min-h-[350px]"
    >
      {/* Company Info */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={job.company_logo}
          alt={job.company}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="text-lg font-bold text-gray-800">{job.title}</h3>
          <p className="text-sm text-gray-600">{job.company}</p>
        </div>
      </div>

      {/* Job Details */}
      <div className="text-sm text-gray-600 space-y-2">
        <p>
          <span className="font-bold">Location:</span> {job.location}
        </p>
        <p>
          <span className="font-bold">Type:</span> {job.jobType}
        </p>
        <p className="">
          <span className="font-bold ">Salary:</span> {job.salaryRange.min} - {job.salaryRange.max}{" "}
        
          {job.salaryRange.currency.toUpperCase()}
        </p>
        <p>
          <span className="font-bold">Deadline:</span> {job.applicationDeadline}
        </p>
      </div>

      {/* Job Description */}
      <div className="mt-4 text-gray-600 text-sm flex-1">
        <p className="line-clamp-3">{job.description}</p>
      </div>

      {/* Requirements */}
      <div className="mt-4">
        <h4 className="font-bold text-gray-800 mb-2">Requirements:</h4>
        <div className="flex flex-wrap gap-2">
          {job.requirements.map((requirement, index) => {
            // Array of color classes to cycle through
        
            // Cycle through colors based on index
            const colorClass = colorClasses[index % colorClasses.length];

            return (
              <span
                key={index}
                className={`${colorClass} px-3 py-1 rounded-full text-sm font-medium`}
              >
                {requirement}
              </span>
            );
          })}
        </div>
      </div>

      {/* Apply Button */}
      <div className="mt-4">
        <Link
          to={`/jobDetails/${job._id}`}
          className="bg-blue-600 text-white px-4 py-2 rounded-full text-center block hover:bg-blue-700 transition duration-300"
        >
          Apply Now
        </Link>
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default TodayJobs;
