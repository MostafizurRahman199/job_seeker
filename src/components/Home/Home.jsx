import React from "react";
import Banner from "./Banner";
import Reviews from "./Reviews";

import Contact from "./Contact";

import WebsiteReview from "./WebsiteReview";

const Home = () => {
  return (
    <div>
      <Banner />

      <Contact></Contact>
      <Reviews />
      <WebsiteReview></WebsiteReview>
    </div>
  );
};

export default Home;
