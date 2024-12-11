import React from "react";
import Banner from "./Banner";
import Reviews from "./Reviews";

import Contact from "./Contact";

import WebsiteReview from "./WebsiteReview";
import AnimationBanner from "./AnimationBanner";
import Category from "./Category";
import Testimonial from "./Testimonial";
import FeaturedJobs from "./FeaturedJobs";
import ResponsedBy from "./ResponsedBy";
import StaticBanner from "./StaticBanner";

const Home = () => {
  return (
    <div>
      {/* <Banner /> */}
      <AnimationBanner></AnimationBanner>
      <Category></Category>
      <FeaturedJobs></FeaturedJobs>
     <div className="relative min-h-[700px] bg-[#f0f5f7]">
     <Testimonial></Testimonial>
     </div>
     <ResponsedBy></ResponsedBy>
     <StaticBanner></StaticBanner>

      {/* <Contact></Contact> */}
      {/* <Reviews /> */}
      {/* <WebsiteReview></WebsiteReview> */}
    </div>
  );
};

export default Home;
