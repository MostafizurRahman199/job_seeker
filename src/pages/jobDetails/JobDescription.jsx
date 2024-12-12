import React from "react";

const JobDescription = ({ description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Description</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default JobDescription;
