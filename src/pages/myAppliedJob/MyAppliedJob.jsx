import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAppliedJob } from "../../API/api";
import { useFirebaseAuth } from "../../Auth/AuthProvider";
import Loading from "../../components/Loading/Loading";
import ErrorPage from "../../components/Error.jsx/ErrorPage";

const MyAppliedJob = () => {
  const { user } = useFirebaseAuth();
  const email = user.email;

  const { data: appliedJobs, isLoading, isError, error } = useQuery({
    queryKey: ["myAppliedJob", email],
    queryFn: () => getAppliedJob(email),
  });

  if (isLoading) {
    return (
      <Loading></Loading>
    );
  }

  if (isError) {
    return <ErrorPage></ErrorPage>
  }

  return (
    <div className="w-11/12 max-w-screen-xl mx-auto py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
        My Applied Jobs ({appliedJobs.length})
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
                <p className="mt-4 text-sm text-gray-600">
                  <span className="font-bold">Location:</span> {job?.location || "N/A"}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-bold">Expected Salary:</span> {job?.expectedSalary || "N/A"}{" "}
                  BDT
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-bold">Applied At:</span>{" "}
                  {new Date(job?.appliedAt).toLocaleDateString() || "N/A"}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyAppliedJob;
