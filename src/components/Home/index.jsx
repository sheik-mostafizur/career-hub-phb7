import React from "react";
import Navbar from "../Navbar";
import Header from "./Header";
import CategoryCard from "../CategoryCard";
import FeaturedCard from "../FeaturedCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-8">
        <Header />
      </div>

      <div className="max-w-screen-xl mx-auto my-24 px-4">
        <div className="text-center mb-10 space-y-5">
          <h2 className="font-bold text-5xl">Job Category List</h2>
          <p className="text-gray-400">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <CategoryCard></CategoryCard>
          <CategoryCard></CategoryCard>
          <CategoryCard></CategoryCard>
          <CategoryCard></CategoryCard>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto my-24 px-4">
        <div className="text-center mb-10 space-y-5">
          <h2 className="font-bold text-5xl">Featured Jobs</h2>
          <p className="text-gray-400">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <FeaturedCard></FeaturedCard>
          <FeaturedCard></FeaturedCard>
          <FeaturedCard></FeaturedCard>
          <FeaturedCard></FeaturedCard>
        </div>
      </div>
    </div>
  );
};

export default Home;
