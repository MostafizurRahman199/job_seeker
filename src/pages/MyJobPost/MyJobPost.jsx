import React, { useState } from "react";
// import { useFirebaseAuth } from "../../Auth/AuthProvider";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import ApiComponent from "../../API/ApiComponent";
import { Link, useNavigate } from "react-router-dom";
import { useFirebaseAuth } from "../../hooks/useAuth";

const MyJobPost = () => {
  const {
   myJobPost,
   deleteMyJobPost,
  } = ApiComponent();

  const { user } = useFirebaseAuth();
  const email = user.email;
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // Fetch job posts
  const { data: jobs = [], isLoading, isError, error } = useQuery({
    queryKey: ["myJobPost", email],
    queryFn: () => myJobPost(email),
  });

  // Mutation to delete a job post
  const deleteMutation = useMutation({
    mutationFn: deleteMyJobPost,
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Job deleted successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      queryClient.invalidateQueries(["myJobPost", email]);
    },
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: "Failed to delete job!",
        text: error.message,
        showConfirmButton: true,
      });
    },
  });

  // Handle delete job post
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(id);
      }
    });
  };

  // Handle edit and navigate to the edit page
  const handleEdit = (id) => {
    navigate(`/edit-job-post/${id}` );
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 w-full sm:w-10/12 lg:w-10/12 mx-auto my-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">My Job Posts ({jobs.length})</h1>

      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#006494] text-white">
            <tr>
              <th className="p-4">Serial</th>
              <th className="p-4">Title</th>
              <th className="p-4">Location</th>
              <th className="p-4">Type</th>
              <th className="p-4">Category</th>
              <th className="p-4">Application Count</th>
              <th className="p-4">View Application</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job.id} className="hover:bg-gray-100">
                <td className="p-4">{index + 1}</td>
                <td className="p-4">{job.title}</td>
                <td className="p-4">{job.location}</td>
                <td className="p-4">{job.jobType}</td>
                <td className="p-4">{job.category}</td>
                <td className="p-4">{job?.applicationCount || "N/A"}</td>
                <td className="p-4"><Link to={`/viewJobApplication/${job._id}`} className="btn">View</Link></td>
                <td className="p-4 flex gap-2">
                  <button onClick={() => handleEdit(job._id)} className="btn  btn-circle ">
                    <FaEdit className="text-yellow-900 text-xl" />
                  </button>
                  <button onClick={() => handleDelete(job._id)} className="btn btn-circle ">
                   ❌
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJobPost;
