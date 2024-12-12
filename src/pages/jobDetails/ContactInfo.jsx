import React from "react";

const ContactInfo = ({ hrName, hrEmail }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Contact Information
      </h2>
      <p>
        <span className="font-bold">HR Name:</span> {hrName}
      </p>
      <p>
        <span className="font-bold">Email:</span> {hrEmail}
      </p>
    </div>
  );
};

export default ContactInfo;
