import React from "react";
import { motion } from "framer-motion";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

const JobHeader = ({ job, onSave, isSaved }) => {
  return (
    <div className="bg-[#006494]/80 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-6 mb-8 relative">
      {/* Company Logo with Animation */}
      <motion.img
        src={job.company_logo}
        alt={job.company}
        className="w-16 h-16  object-cover"
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
          onClick={onSave}
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
