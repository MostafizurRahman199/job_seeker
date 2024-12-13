import React from "react";
import { useQuery } from "@tanstack/react-query";
import { allJob } from "../../API/api";
import { Link } from "react-router-dom";

const AllJobs = () => {
  const { data: jobs, isLoading, isError, error } = useQuery({
    queryKey: ["allJobs"],
    queryFn: allJob,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#1b98e0] to-[#006494]">
        <div className="animate-spin h-10 w-10 border-4 border-white border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#1b98e0] to-[#006494]">
        <p className="text-white text-lg">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen  w-10/12 mx-auto p-6">
      <h1 className="text-4xl font-extrabold text-center text-white mb-8">
        All Jobs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300"
          >
            {/* Company Logo and Title */}
            <div className="flex items-center mb-4">
              <img
                src={job.company_logo}
                alt={job.company}
                className="w-14 h-14 rounded-full mr-4 border border-gray-200 shadow"
              />
              <div>
                <h2 className="text-xl font-bold text-gray-800">{job.title}</h2>
                <p className="text-gray-500">{job.company}</p>
              </div>
            </div>

            {/* Job Details */}
            <div>
              <p className="text-gray-600 mb-2">
                <span className="font-bold">Location:</span> {job.location}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-bold">Type:</span> {job.jobType}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-bold">Category:</span> {job.category}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-bold">Salary:</span>{" "}
                {job.salaryRange.min}-{job.salaryRange.max}{" "}
                {job.salaryRange.currency.toUpperCase()}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-bold">Deadline:</span>{" "}
                {new Date(job.applicationDeadline).toLocaleDateString()}
              </p>
            </div>

            {/* View Details Button */}
            <div className="mt-4 flex justify-center">
              <Link
                to={`/jobDetails/${job._id}`}
                className="bg-gradient-to-r from-[#1b98e0] to-[#006494] text-white px-5 py-2 rounded-lg font-bold hover:from-[#006494] hover:to-[#1b98e0] transition duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
