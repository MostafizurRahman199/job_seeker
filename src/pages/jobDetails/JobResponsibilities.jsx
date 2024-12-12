import React from "react";

const JobResponsibilities = ({ responsibilities }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Responsibilities
      </h2>
      <ul className="list-disc list-inside space-y-2">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="text-gray-600">
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobResponsibilities;
