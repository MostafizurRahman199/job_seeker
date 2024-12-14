import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { allJob } from "../../API/api";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import ErrorPage from "../../components/Error.jsx/ErrorPage";

const AllJobs = () => {
  const { data: jobs, isLoading, isError, error } = useQuery({
    queryKey: ["allJobs"],
    queryFn: allJob,
  });

  // State for filters and search
  const [searchQuery, setSearchQuery] = useState("");
  const [jobType, setJobType] = useState("");
  const [category, setCategory] = useState("");

  // Filter jobs
  const filteredJobs = jobs?.filter((job) => {
    const matchesSearch = job?.title?.toLowerCase()?.includes(searchQuery.toLowerCase());
    const matchesJobType = jobType ? job.jobType === jobType : true;
    const matchesCategory = category ? job.category === category : true;

    return matchesSearch && matchesJobType && matchesCategory;
  });

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
    <div className="min-h-screen w-full  sm:w-10/12 mx-auto p-4 sm:p-6">
      <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-[#1b98e0] to-[#006494] text-transparent bg-clip-text mb-8">
        All Jobs
      </h1>

      {/* Search and Filter Controls */}
      <div className="mb-8 flex flex-wrap gap-4 justify-between items-center">
        <input
          type="text"
          placeholder="Search by title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-3 w-full sm:w-1/3 border rounded-lg shadow focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          className="p-3 w-full sm:w-1/4 border rounded-lg shadow focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Filter by Job Type</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
          <option value="Freelance">Freelance</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-3 w-full sm:w-1/4 border rounded-lg shadow focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Filter by Category</option>
          <option value="Engineering">Engineering</option>
          <option value="Marketing">Marketing</option>
          <option value="Design">Design</option>
          <option value="Development">Development</option>
          <option value="Finance">Finance</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Customer Support">Customer Support</option>
        </select>
      </div>

      {/* Job Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredJobs?.map((job) => (
          <div
            key={job._id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300"
          >
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
                {job.salaryRange.currency?.toUpperCase()}
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-bold">Deadline:</span>{" "}
                {new Date(job.applicationDeadline)?.toLocaleDateString()}
              </p>
            </div>
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
