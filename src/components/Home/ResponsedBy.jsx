import React from "react";
import Marquee from "react-fast-marquee";

import { FaGoogle, FaMicrosoft, FaApple, FaAmazon, FaFacebook, FaTwitter, FaSpotify,  FaSlack, FaDropbox, FaUber, FaPaypal, FaGithub, FaLinkedin, FaTiktok, FaInstagram, FaSnapchat, FaReddit, } from "react-icons/fa";

const responsedByData = [
  { id: 1, icon: <FaGoogle />, name: "Google", color: "text-blue-500" },
  { id: 2, icon: <FaMicrosoft />, name: "Microsoft", color: "text-blue-700" },
  { id: 3, icon: <FaApple />, name: "Apple", color: "text-black" },
  { id: 4, icon: <FaAmazon />, name: "Amazon", color: "text-orange-500" },
  { id: 5, icon: <FaFacebook />, name: "Facebook", color: "text-blue-600" },
  { id: 6, icon: <FaTwitter />, name: "Twitter", color: "text-blue-400" },
  { id: 7, icon: <FaSpotify />, name: "Spotify", color: "text-green-500" },
//   { id: 8, icon: <FaAdobe />, name: "Adobe", color: "text-red-500" },
  { id: 9, icon: <FaSlack />, name: "Slack", color: "text-purple-600" },
  { id: 10, icon: <FaDropbox />, name: "Dropbox", color: "text-blue-400" },
  { id: 11, icon: <FaUber />, name: "Uber", color: "text-black" },
  { id: 12, icon: <FaPaypal />, name: "Paypal", color: "text-blue-500" },
  { id: 13, icon: <FaGithub />, name: "Github", color: "text-gray-800" },
  { id: 14, icon: <FaLinkedin />, name: "LinkedIn", color: "text-blue-600" },
  { id: 15, icon: <FaTiktok />, name: "TikTok", color: "text-black" },
  { id: 16, icon: <FaInstagram />, name: "Instagram", color: "text-pink-500" },
  { id: 17, icon: <FaSnapchat />, name: "Snapchat", color: "text-yellow-500" },
  { id: 18, icon: <FaReddit />, name: "Reddit", color: "text-orange-600" },
//   { id: 19, icon: <FaNetflix />, name: "Netflix", color: "text-red-600" },
  { id: 20, icon: <FaSpotify />, name: "Spotify", color: "text-green-500" },
];

const ResponsedBy = () => {
  return (
    <div className="w-full bg-gray-50 py-10">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Responded By
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Trusted by the world's leading companies
        </p>
      </div>
      <Marquee gradient={false} speed={50} pauseOnHover={true} className="py-4 ">
        <div className="flex items-center ">
          {responsedByData.map((company) => (
            <div
              key={company.id}
              className="ml-20 flex flex-col items-center justify-center hover:scale-110 transition-all duration-300"
            >
              <div
                className={`text-5xl ${company.color}`}
                title={company.name}
              >
                {company.icon}
              </div>
              <p className="text-sm text-gray-700 mt-2">{company.name}</p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default ResponsedBy;
