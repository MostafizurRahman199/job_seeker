import React from "react";
import Banner from "./Banner";
import Reviews from "./Reviews";

import Contact from "./Contact";

import WebsiteReview from "./WebsiteReview";
import AnimationBanner from "./AnimationBanner";
import Category from "./Category";

const Home = () => {
  return (
    <div>
      {/* <Banner /> */}
      <AnimationBanner></AnimationBanner>
      <Category></Category>

      {/* <Contact></Contact> */}
      {/* <Reviews /> */}
      {/* <WebsiteReview></WebsiteReview> */}
    </div>
  );
};

export default Home;
