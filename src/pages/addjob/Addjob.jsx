import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { postAddJob } from "../../API/api";
import Swal from "sweetalert2";

const AddJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    jobType: "",
    category: "",
    applicationDeadline: "",
    salaryRange: {
      min: "",
      max: "",
      currency: "",
    },
    description: "",
    company: "",
    requirements: "",
    responsibilities: "",
    hr_email: "",
    hr_name: "",
    company_logo: "",
  });

  const mutation = useMutation({
    mutationFn: (newJob) => postAddJob(newJob),
    onSuccess: () => {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Added New Job Successfully",
        showConfirmButton: false,
        timer: 1500,
      });

      setFormData(
        {
            title: "",
            location: "",
            jobType: "",
            category: "",
            applicationDeadline: "",
            salaryRange: {
              min: "",
              max: "",
              currency: "",
            },
            description: "",
            company: "",
            requirements: "",
            responsibilities: "",
            hr_email: "",
            hr_name: "",
            company_logo: "",
          }
      )
    },
    onError: (error) => {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Something went wrong. Try again!",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "min" || name === "max" || name === "currency") {
      setFormData({
        ...formData,
        salaryRange: { ...formData.salaryRange, [name]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      ...formData,
      requirements: formData.requirements.split(","), 
      responsibilities: formData.responsibilities.split(","), 
    });
  };

  return (
    <div className="p-6 w-full sm:w-10/12 lg:w-8/12 mx-auto my-10">
      <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-[#1b98e0] to-[#006494] text-transparent bg-clip-text mb-8">Post a New Job</h1>
      <form
        onSubmit={handleSubmit}
        className=" shadow-lg rounded-lg p-8 space-y-6"
      >
        <div>
          <label className="block text-lg font-semibold">Job Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold">Job Type</label>
          <select
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          >
            <option value="">Select Job Type</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
            <option value="Freelance">Freelance</option>
          </select>
        </div>

        <div>
          <label className="block text-lg font-semibold">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          >
            <option value="">Select Category</option>
            <option value="Engineering">Engineering</option>
            <option value="Marketing">Marketing</option>
            <option value="Design">Design</option>
            <option value="Finance">Finance</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Customer Support">Customer Support</option>
          </select>
        </div>

        <div>
          <label className="block text-lg font-semibold">Application Deadline</label>
          <input
            type="date"
            name="applicationDeadline"
            value={formData.applicationDeadline}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

       

        <div>
          <label className="block text-lg font-semibold">Salary Range</label>
          <div className="flex space-x-2">
            <input
              type="number"
              name="min"
              value={formData.salaryRange.min}
              onChange={handleChange}
              placeholder="Min"
              className="w-1/3 p-2 border rounded"
              required
            />
            <input
              type="number"
              name="max"
              value={formData.salaryRange.max}
              onChange={handleChange}
              placeholder="Max"
              className="w-1/3 p-2 border rounded"
              required
            />
            <input
              type="text"
              name="currency"
              value={formData.salaryRange.currency}
              onChange={handleChange}
              placeholder="Currency"
              className="w-1/3 p-2 border rounded"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-lg font-semibold">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-lg font-semibold">Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold">Requirements (comma-separated)</label>
          <input
            type="text"
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold">Responsibilities (comma-separated)</label>
          <input
            type="text"
            name="responsibilities"
            value={formData.responsibilities}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold">HR Email</label>
          <input
            type="email"
            name="hr_email"
            value={formData.hr_email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold">HR Name</label>
          <input
            type="text"
            name="hr_name"
            value={formData.hr_name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold">Company Logo URL</label>
          <input
            type="url"
            name="company_logo"
            value={formData.company_logo}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
        </div>

      

        <button
          type="submit"
          className="bg-gradient-to-r from-[#1b98e0] to-[#006494] text-white font-bold px-6 py-3 rounded-lg hover:shadow-lg transition-all"
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;








