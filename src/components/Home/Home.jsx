import React from "react";
import Banner from "./Banner";
import Reviews from "./Reviews";

import Contact from "./Contact";

import WebsiteReview from "./WebsiteReview";
import AnimationBanner from "./AnimationBanner";
import Category from "./Category";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      {/* <Banner /> */}
      <AnimationBanner></AnimationBanner>
      <Category></Category>
     <div className="relative min-h-[700px] bg-[#f0f5f7]">
     <Testimonial></Testimonial>
     </div>

      {/* <Contact></Contact> */}
      {/* <Reviews /> */}
      {/* <WebsiteReview></WebsiteReview> */}
    </div>
  );
};

export default Home;
