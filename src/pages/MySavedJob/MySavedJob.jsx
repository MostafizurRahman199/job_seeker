import React from "react";
import { useQuery } from "@tanstack/react-query";
// import { useFirebaseAuth } from "../../Auth/AuthProvider";
import { Link } from "react-router-dom";
import ApiComponent from "../../API/ApiComponent";
import { useFirebaseAuth } from "../../hooks/useAuth";

const MySavedJob = () => {
  
  
  const { user } = useFirebaseAuth();
  const email = user.email;
  const {
  getMySavedJobs,
  } = ApiComponent();

  // Fetch saved jobs using TanStack Query
  const { data: savedJobs, isLoading, isError, error } = useQuery({
    queryKey: ["mySavedJobs", email],
    queryFn: () => getMySavedJobs(email), // API function to fetch saved jobs
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin h-12 w-12 border-4 border-indigo-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-600 text-lg">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="p-8 w-full max-w-7xl mx-auto">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">My Saved Jobs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {savedJobs?.map((job) => (
          <div
            key={job._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
        
            {/* Job Details */}
            <div className="p-6">
            <div className="flex items-center gap-2">
           
              {/* Company Logo */}
              <img
                src={job.company_logo}
                alt={job.company}
                className="w-16 h-16 object-cover rounded-full border-4 border-white shadow-md"
              />
           
              <div>
              <h2 className="text-2xl font-semibold text-gray-800">{job.title}</h2>
              <p className="text-lg text-gray-600 mt-1">{job.company}</p>
              </div>
            </div>
              <p className="text-gray-500 mt-2">
                <span className="font-medium">Location:</span> {job.location}
              </p>
              <p className="text-gray-500">
                <span className="font-medium">Type:</span> {job.jobType}
              </p>
              <p className="text-gray-500">
                <span className="font-medium">Category:</span> {job.category}
              </p>
              <div className="mt-4">
                <Link
                  to={`/jobDetails/${job.jobId}`}
                  className="inline-block text-indigo-600 font-semibold hover:underline"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySavedJob;
