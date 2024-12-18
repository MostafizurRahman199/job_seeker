// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import React from "react";
// import { getAppliedJob, deleteAppliedJob } from "../../API/api";
// import { useFirebaseAuth } from "../../Auth/AuthProvider";
// import Loading from "../../components/Loading/Loading";
// import ErrorPage from "../../components/Error.jsx/ErrorPage";
// import Swal from "sweetalert2";

// const MyAppliedJob = () => {
//   const { user } = useFirebaseAuth();
//   const email = user.email;
//   const queryClient = useQueryClient();

//   // Fetch applied jobs
//   const { data: appliedJobs, isLoading, isError, error } = useQuery({
//     queryKey: ["myAppliedJob", email],
//     queryFn: () => getAppliedJob(email),
//   });


// // console.log(appliedJobs);

//   // Remove application mutation
//   const mutation = useMutation({
//     mutationFn: ({_id,  jobId}) =>{deleteAppliedJob(_id,  jobId)
//     },
    
//     onSuccess: () => {
//       queryClient.invalidateQueries(["myAppliedJob", email]); // Refetch applied jobs
//       Swal.fire({
//         title: "Deleted!",
//         text: "Your file has been deleted.",
//         icon: "success"
//       });
     
//     },
//     onError: (error) => {
//       alert(`Error removing application: ${error.message}`);
//     },
//   });

//   // Handle remove action
//   const handleRemove = (_id,  jobId) => {

  

//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!"
//     }).then((result) => {
//       if (result.isConfirmed) {

//         mutation.mutate({_id, jobId});
      
//       }
//     });


//   };

//   if (isLoading) return <Loading />;
//   if (isError) return <ErrorPage errorMessage={error.message} />;

//   return (
//     <div className="w-11/12 max-w-screen-xl min-h-screen mx-auto py-10">
//       <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
//         My Applied Jobs ({appliedJobs?.length || 0})
//       </h2>
//       {appliedJobs?.length === 0 ? (
//         <p className="text-gray-600">You have not applied for any jobs yet.</p>
//       ) : (
//         <>
//           {/* Table for larger devices */}
//           <div className="hidden md:block overflow-x-auto bg-white rounded-lg shadow-lg">
//             <table className="w-full text-left border-collapse">
//               <thead className="bg-[#006494] text-white">
//                 <tr>
//                   <th className="p-4">Company Logo</th>
//                   <th className="p-4">Job Title</th>
//                   <th className="p-4">Company Name</th>
//                   <th className="p-4">Location</th>
//                   <th className="p-4">Expected Salary</th>
//                   <th className="p-4">Applied At</th>
//                   <th className="p-4">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {appliedJobs?.map((job) => (
//                   <tr key={job?._id} className="border-t hover:bg-gray-100">
//                     <td className="p-4">
//                       <img
//                         src={job?.company_logo}
//                         alt={job?.companyName}
//                         className="w-12 h-12 rounded-full"
//                       />
//                     </td>
//                     <td className="p-4 font-medium">{job?.jobTitle || "N/A"}</td>
//                     <td className="p-4">{job?.companyName || "N/A"}</td>
//                     <td className="p-4">{job?.location || "N/A"}</td>
//                     <td className="p-4">{job?.expectedSalary || "N/A"} BDT</td>
//                     <td className="p-4">
//                       {new Date(job?.appliedAt).toLocaleDateString() || "N/A"}
//                     </td>
//                     <td className="p-4">
//                       <button
//                         onClick={() => handleRemove(job?._id, job?.jobId)}
//                         className="btn  btn-circle"
//                       >
//                         ❌
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Cards for smaller devices */}
//           <div className="block md:hidden space-y-4">
//             {appliedJobs?.map((job) => (
//               <div
//                 key={job?._id}
//                 className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start"
//               >
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={job?.company_logo}
//                     alt={job?.companyName}
//                     className="w-12 h-12 rounded-full"
//                   />
//                   <div>
//                     <h3 className="text-lg font-bold text-gray-800">
//                       {job?.jobTitle || "N/A"}
//                     </h3>
//                     <p className="text-gray-600">{job?.companyName || "N/A"}</p>
//                   </div>
//                 </div>
//               <div className="flex flex-wrap justify-between w-full">
//               <div > 
//                <p className="mt-4 text-sm text-gray-600">
//                   <span className="font-bold">Location:</span> {job?.location || "N/A"}
//                 </p>
//                 <p className="text-sm text-gray-600">
//                   <span className="font-bold">Expected Salary:</span>{" "}
//                   {job?.expectedSalary || "N/A"} BDT
//                 </p>
//                 <p className="text-sm text-gray-600">
//                   <span className="font-bold">Applied At:</span>{" "}
//                   {new Date(job?.appliedAt).toLocaleDateString() || "N/A"}
//                 </p>
//                </div>
//                 <div>
                 
//                 <button
//                   onClick={() => handleRemove(job?._id, job?.jobId)}
//                   className="mt-4 bg-red-800 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300"
//                 >
//                   Remove
//                 </button>
//                 </div>
//               </div>
//               </div>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default MyAppliedJob;





import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import ApiComponent from "../../API/ApiComponent";
// import { useFirebaseAuth } from "../../Auth/AuthProvider";
import Loading from "../../components/Loading/Loading";
import ErrorPage from "../../components/Error.jsx/ErrorPage";
import Swal from "sweetalert2";
import { useFirebaseAuth } from "../../hooks/useAuth";

const MyAppliedJob = () => {
  const { user } = useFirebaseAuth();
  const email = user.email;
  const queryClient = useQueryClient();
 
  const {
   
    getAppliedJob,
    deleteAppliedJob,
    
  } = ApiComponent();


  // Fetch applied jobs
  const { data: appliedJobs, isLoading, isError, error } = useQuery({
    queryKey: ["myAppliedJob", email],
    queryFn: () => getAppliedJob(email),
  });

  // Remove application mutation
  const mutation = useMutation({
    mutationFn: ({_id, jobId}) => deleteAppliedJob(_id, jobId),
    onSuccess: () => {
      queryClient.invalidateQueries(["myAppliedJob", email]); // Invalidate query to refetch data
      Swal.fire({
        title: "Deleted!",
        text: "Your application has been deleted.",
        icon: "success"
      });
    },
    onError: (error) => {
      alert(`Error removing application: ${error.message}`);
    },
    // Optimistic Update to instantly remove the deleted job from UI
    onMutate: ({_id, jobId}) => {
      // Optimistically update the UI to remove the deleted job before mutation finishes
      queryClient.setQueryData(["myAppliedJob", email], (oldData) => {
        return oldData.filter((job) => job._id !== _id);  // Remove the job from the local data
      });
    },
  });

  // Handle remove action
  const handleRemove = (_id, jobId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        mutation.mutate({ _id, jobId });
      }
    });
  };

  if (isLoading) return <Loading />;
  if (isError) return <ErrorPage errorMessage={error.message} />;

  return (
    <div className="w-11/12 max-w-screen-xl min-h-screen mx-auto py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
        My Applied Jobs ({appliedJobs?.length || 0})
      </h2>
      {appliedJobs?.length === 0 ? (
        <p className="text-gray-600">You have not applied for any jobs yet.</p>
      ) : (
        <>
          {/* Table for larger devices */}
          <div className="hidden md:block overflow-x-auto bg-white rounded-lg shadow-lg">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#006494] text-white">
                <tr>
                  <th className="p-4">Company Logo</th>
                  <th className="p-4">Job Title</th>
                  <th className="p-4">Company Name</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Expected Salary</th>
                  <th className="p-4">Applied At</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {appliedJobs?.map((job) => (
                  <tr key={job?._id} className="border-t hover:bg-gray-100">
                    <td className="p-4">
                      <img
                        src={job?.company_logo}
                        alt={job?.companyName}
                        className="w-12 h-12 rounded-full"
                      />
                    </td>
                    <td className="p-4 font-medium">{job?.jobTitle || "N/A"}</td>
                    <td className="p-4">{job?.companyName || "N/A"}</td>
                    <td className="p-4">{job?.location || "N/A"}</td>
                    <td className="p-4">{job?.expectedSalary || "N/A"} BDT</td>
                    <td className="p-4">
                      {new Date(job?.appliedAt).toLocaleDateString() || "N/A"}
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => handleRemove(job?._id, job?.jobId)}
                        className="btn  btn-circle"
                      >
                        ❌
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Cards for smaller devices */}
          <div className="block md:hidden space-y-4">
            {appliedJobs?.map((job) => (
              <div
                key={job?._id}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={job?.company_logo}
                    alt={job?.companyName}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {job?.jobTitle || "N/A"}
                    </h3>
                    <p className="text-gray-600">{job?.companyName || "N/A"}</p>
                  </div>
                </div>
              <div className="flex flex-wrap justify-between w-full">
              <div > 
               <p className="mt-4 text-sm text-gray-600">
                  <span className="font-bold">Location:</span> {job?.location || "N/A"}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-bold">Expected Salary:</span>{" "}
                  {job?.expectedSalary || "N/A"} BDT
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-bold">Applied At:</span>{" "}
                  {new Date(job?.appliedAt).toLocaleDateString() || "N/A"}
                </p>
               </div>
                <div>
                 
                <button
                  onClick={() => handleRemove(job?._id, job?.jobId)}
                  className="mt-4 bg-red-800 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300"
                >
                  Remove
                </button>
                </div>
              </div>
              </div>
            ))} 
          </div>
        </>
      )}
    </div>
  );
};

export default MyAppliedJob;

