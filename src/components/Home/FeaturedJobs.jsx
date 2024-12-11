

import React, { useEffect } from "react";
import {
  FaBriefcase,
  FaApple,
  FaMicrosoft,
  FaGoogle,
  FaAmazon,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Aos from "aos";

const FeaturedJobsData = [
  {
    id: 1,
    logo: <FaGoogle className="text-blue-500 text-3xl" />, // Google icon
    title: "Junior Graphic Designer (Web)",
    company: "Design, Development",
    location: "New York",
    salary: "$150 - $180 / week",
    type: "Full Time",
    urgency: "Urgent",
  },
  {
    id: 2,
    logo: <FaApple className="text-black text-3xl" />, // Apple icon
    title: "Finance Manager & Health",
    company: "Design",
    location: "New York",
    salary: "$450 - $500 / month",
    type: "Full Time",
    urgency: "Urgent",
  },
  {
    id: 3,
    logo: <FaMicrosoft className="text-blue-700 text-3xl" />, // Microsoft icon
    title: "General Ledger Accountant",
    company: "Design, Marketing",
    location: "New York",
    salary: "$50 - $68 / day",
    type: "Full Time",
    urgency: "",
  },
  {
    id: 4,
    logo: <FaAmazon className="text-orange-600 text-3xl" />, // Amazon icon
    title: "Assistant / Store Keeper",
    company: "Automotive Jobs, Marketing",
    location: "New York",
    salary: "$250 - $280 / week",
    type: "Part Time",
    urgency: "",
  },
];


const FeaturedJobs = () => {
  
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="w-11/12 max-w-screen-xl mx-auto py-10">
      {/* Header */}
      <div className="text-center mb-8" 
       data-aos="fade-down-right"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Featured Jobs
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Know your worth and find the job that qualifies your life
        </p>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FeaturedJobsData.map((job) => (
        
        <div data-aos="flip-left"
         data-aos-duration="2000"
         >
            <Link
              to={"/"}
              key={job.id}
              className="bg-white border border-gray-200 rounded-2xl group hover:scale-105 shadow-md p-5 flex items-center gap-4 hover:shadow-lg transition duration-300"
            >
              {/* Logo */}
              <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
                {job.logo}
              </div>

              {/* Job Details */}
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-gray-800">
                    {job.title}
                  </h3>
                  <div className="group-hover:bg-blue-100 p-2 rounded-full">
                    <FaBriefcase className="text-gray-400 group-hover:text-black  cursor-pointer " />
                  </div>
                </div>
                <p className="text-sm text-gray-600">{job.company}</p>
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                  <FaBriefcase />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                  <FaBriefcase />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 text-xs rounded-full">
                    {job.type}
                  </span>
                  {job.urgency && (
                    <span className="bg-yellow-100 text-yellow-600 px-3 py-1 text-xs rounded-full">
                      {job.urgency}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="text-center mt-8">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition duration-300">
          See More Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
