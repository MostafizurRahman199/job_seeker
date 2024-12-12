import React from "react";
import { FaMapMarkerAlt, FaClock, FaFolderOpen, FaCalendarAlt, FaMoneyBillWave } from "react-icons/fa";

const JobDetailsSection = ({ job }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <p className="flex items-center gap-2">
          <FaMapMarkerAlt className=" text-black text-2xl" />
          <span className="font-bold">Location:</span> {job.location}
        </p>
        <p className="flex items-center gap-2">
          <FaClock className=" text-black text-2xl" />
          <span className="font-bold">Type:</span> {job.jobType}
        </p>
        <p className="flex items-center gap-2">
          <FaFolderOpen className=" text-black text-2xl" />
          <span className="font-bold">Category:</span> {job.category}
        </p>
        <p className="flex items-center gap-2">
          <FaCalendarAlt className=" text-black text-2xl" />
          <span className="font-bold">Deadline:</span> {job.applicationDeadline}
        </p>
        <p className="flex items-center gap-2">
          <FaMoneyBillWave className=" text-black text-2xl" />
          <span className="font-bold">Salary:</span>{" "}
          {job?.salaryRange?.min} - {job?.salaryRange?.max}{" "}
          {job?.salaryRange?.currency.toUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default JobDetailsSection;
