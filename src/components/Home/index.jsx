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

        <button
          type="button"
          className="mt-12 mx-auto block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default Home;
