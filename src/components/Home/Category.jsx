import React from "react";
import { FaLaptopCode, FaStethoscope, FaBook, FaMoneyBillWave, FaBuilding, FaTools, FaChalkboardTeacher, FaTruck, FaChartLine, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Category = () => {
  const categoryData = [
    { icon: <FaLaptopCode />, title: "IT/Engineers", available: 1526, path: "/category/it-engineers" },
    { icon: <FaStethoscope />, title: "Healthcare", available: 840, path: "/category/healthcare" },
    { icon: <FaBook />, title: "Education", available: 625, path: "/category/education" },
    { icon: <FaMoneyBillWave />, title: "Finance", available: 430, path: "/category/finance" },
    { icon: <FaBuilding />, title: "Real Estate", available: 380, path: "/category/real-estate" },
    { icon: <FaTools />, title: "Construction", available: 410, path: "/category/construction" },
    { icon: <FaChalkboardTeacher />, title: "Teaching", available: 720, path: "/category/teaching" },
    { icon: <FaTruck />, title: "Logistics", available: 610, path: "/category/logistics" },
    { icon: <FaChartLine />, title: "Sales & Marketing", available: 950, path: "/category/sales-marketing" },
  ];

  return (
    <div className="w-11/12 max-w-screen-xl mx-auto py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1b98e0]">
          Browse by Category
        </h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Find the job that's perfect for you. About 800+ new jobs every day.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryData.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className=" p-6 rounded-xl border-[1px] text-[#247ba0]   shadow-lg flex justify-center items-center gap-4 hover:bg-[#ecedf2] cursor-pointer transition duration-300 hover:scale-105"
          >
            {/* Icon */}
            <div className="w-16 h-16 bg-[#006494] flex items-center justify-center rounded-full text-white text-3xl">
              {item.icon}
            </div>

            {/* Content */}
            <div className="">
              <h3 className="text-lg md:text-xl font-bold ">
                {item.title}
              </h3>
              <p className="text-sm md:text-base ">
                {item.available} jobs available
              </p>
            </div>
          </Link>
        ))}
      </div>


      <div className="flex flex-col md:flex-row items-center gap-6 my-8">
        {/* Left Image */}
        <div className="flex-1">
          <img
            src="https://media.istockphoto.com/id/2148382814/vector/man-and-woman-planting-a-tree.jpg?s=612x612&w=0&k=20&c=8dcG-JFNVwacL5GTtmwqP0tOZ0PlbgGZNibFu4HuS3g="
            alt="Planting a tree"
            className="w-full "
          />
        </div>

        {/* Center Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-[#247ba0] text-xl font-semibold uppercase">
            WE ARE
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#1b98e0] mt-2">
            HIRING
          </h2>
        </div>

        {/* Right Content */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <p className="text-xl md:text-2xl font-medium text-[#006494]">
            Let’s <span className="text-[#1b98e0] font-bold">Work</span> Together
          </p>
          <p className="text-xl md:text-2xl font-medium text-[#006494]">
            & <span className="text-[#1b98e0] font-bold">Explore</span>{" "}
            Opportunities
          </p>
          <button className="mt-4 bg-[#1b98e0] text-white px-6 py-2 rounded-full shadow-lg hover:bg-[#247ba0] transition duration-300 flex items-center justify-center gap-2">
            Apply Now <FaArrowRight />
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="https://media.istockphoto.com/id/1346611118/vector/scene-with-business-people-working-in-the-office.jpg?s=612x612&w=0&k=20&c=NH5XYaUYJan2QuqR6zHC0AFT8D29Cd6ynMqxExPm4kA="
            alt="Office Work"
            className="w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
