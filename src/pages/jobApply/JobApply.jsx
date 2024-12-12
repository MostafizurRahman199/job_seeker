import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaLaptopCode,
  FaFileAlt,
  FaDollarSign,
  FaStar,
  FaUser,
  FaEnvelope,
  FaBriefcase,
} from "react-icons/fa";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchJobDetails, postJobApplication } from "../../API/api";
import { useFirebaseAuth } from "../../Auth/AuthProvider";
import Loading from "../../components/Loading/Loading";
import ErrorPage from "../../components/Error.jsx/ErrorPage";
import Swal from "sweetalert2";

const JobApply = () => {
  const { user } = useFirebaseAuth();

  const name = user.displayName || "Your Name";
  const email = user.email;

  const { id } = useParams();

  const { data: job, isLoading, isError, error } = useQuery({
    queryKey: ["jobDetails", id],
    queryFn: () => fetchJobDetails(id),
  });

  //________________________________Form state

  const [formData, setFormData] = useState({
    applicantName: name,
    applicantEmail: email,
    appliedAt : new Date(),
    jobId: id,
    linkedIn: "",
    github: "",
    portfolio: "",
    resume: "",
    coverLetter: "",
    expectedSalary: "",
    skills: ["", "", "", "", ""], // Array for five skills
  });

//   ______________________Handle input change

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //____________________________________Handle skill change

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[index] = value;
    setFormData({ ...formData, skills: updatedSkills });
  };



//________________________________Mutation for submitting job application

  const mutation = useMutation({
    mutationFn: (formData) => postJobApplication(formData),
    onSuccess: () => {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Applied Successfully",
            showConfirmButton: false,
            timer: 1500
          });
    
    
    },
    onError: (error) => {

        Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Something Error Try Again",
            showConfirmButton: false,
            timer: 1500
          });
    
    
    },
  });


  //________________________________Handle form submission

  const handleSubmit = (e) => {
    e.preventDefault();
  
    //______________Submit the form
    mutation.mutate({
      ...formData,
      appliedAt: new Date(),
    });


    setFormData({
      ...formData,
      linkedIn: "",
      github: "",
      portfolio: "",
      resume: "",
      coverLetter: "",
      expectedSalary: "",
      skills: ["", "", "", "", ""], // Reset skills array
    });
  };
  

  if (isLoading) return <Loading></Loading>;
  if (isError) return <ErrorPage></ErrorPage>;

  return (
    <div className="w-full sm:w-11/12 max-w-screen-lg mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 mx-2">
        Apply for {job.title}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-6 md:p-12 rounded-lg shadow-md space-y-6"
      >
        {/* Job Title */}
        <div>
          <label className="block text-gray-700 font-bold flex items-center gap-2">
            <FaBriefcase className="text-blue-500" /> Job Title
          </label>
          <p className="mt-2 p-4 bg-white border rounded-lg">{job.title}</p>
        </div>

        {/* Name */}
        <div>
          <label className="block text-gray-700 font-bold flex items-center gap-2">
            <FaUser className="text-green-600" /> Name
          </label>
          <p className="mt-2 p-4 bg-white border rounded-lg">{formData.applicantName}</p>
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-bold flex items-center gap-2">
            <FaEnvelope className="text-red-500" /> Email
      
          </label>
          <p className="mt-2 p-4 bg-white border rounded-lg">{formData.applicantEmail}</p>
        </div>

        {/* LinkedIn URL */}
        <div>
          <label
            htmlFor="linkedIn"
            className="block text-gray-700 font-bold flex items-center gap-2"
          >
            <FaLinkedin className="text-blue-600" /> LinkedIn URL
          </label>
          <input
            type="url"
            id="linkedIn"
            name="linkedIn"
            value={formData.linkedIn}
            onChange={handleChange}
            className="w-full mt-2 p-4 border rounded-lg"
            placeholder="Enter your LinkedIn profile URL"
          />
        </div>

        {/* GitHub URL */}
        <div>
          <label
            htmlFor="github"
            className="block text-gray-700 font-bold flex items-center gap-2"
          >
            <FaGithub className="text-gray-800" /> GitHub URL
          </label>
          <input
            type="url"
            id="github"
            name="github"
            value={formData.github}
            onChange={handleChange}
            className="w-full mt-2 p-4 border rounded-lg"
            placeholder="Enter your GitHub profile URL"
          />
        </div>

        {/* Portfolio URL */}
        <div>
          <label
            htmlFor="portfolio"
            className="block text-gray-700 font-bold flex items-center gap-2"
          >
            <FaLaptopCode className="text-purple-600" /> Portfolio URL
          </label>
          <input
            type="url"
            id="portfolio"
            name="portfolio"
            value={formData.portfolio}
            onChange={handleChange}
            className="w-full mt-2 p-4 border rounded-lg"
            placeholder="Enter your portfolio URL"
          />
        </div>

        {/* Resume URL */}
        <div>
          <label
            htmlFor="resume"
            className="block text-gray-700 font-bold flex items-center gap-2"
          >
            <FaFileAlt className="text-green-600" /> Resume URL
          </label>
          <input
            type="url"
            id="resume"
            name="resume"
            value={formData.resume}
            onChange={handleChange}
            className="w-full mt-2 p-4 border rounded-lg"
            placeholder="Enter your resume URL"
          />
        </div>

        {/* Cover Letter */}
        <div>
          <label
            htmlFor="coverLetter"
            className="block text-gray-700 font-bold flex items-center gap-2"
          >
            <FaFileAlt className="text-gray-600" /> Cover Letter
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            className="w-full mt-2 p-4 border rounded-lg"
            placeholder="Write a brief cover letter"
          />
        </div>

        {/* Expected Salary */}
        <div>
          <label
            htmlFor="expectedSalary"
            className="block text-gray-700 font-bold flex items-center gap-2"
          >
            <FaDollarSign className="text-yellow-600" /> Expected Salary
          </label>
          <input
            type="number"
            id="expectedSalary"
            name="expectedSalary"
            value={formData.expectedSalary}
            onChange={handleChange}
            className="w-full mt-2 p-4 border rounded-lg"
            placeholder="Enter your expected salary"
          />
        </div>

        {/* Five Skills */}
        <div>
          <label
            htmlFor="skills"
            className="block text-gray-700 font-bold flex items-center gap-2"
          >
            <FaStar className="text-teal-600" /> Five Skills You Have
          </label>
          <div className="space-y-2 mt-2">
            {formData.skills.map((skill, index) => (
              <input
                key={index}
                type="text"
                value={skill}
                onChange={(e) => handleSkillChange(index, e.target.value)}
                className="w-full p-4 border rounded-lg"
                placeholder={`Skill ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 flex items-center gap-2"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApply;
