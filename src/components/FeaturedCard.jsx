import React from "react";
import Tesla from "../assets/All_images/tesla.png";

const FeaturedCard = () => {
  return (
    <div className="border rounded p-10 text-center md:text-left">
      <img
        className="mb-6 mx-auto md:mx-0"
        src={Tesla}
        alt="alternative text"
      />
      <h3 className="font-bold text-xl">Software Engineer</h3>
      <p className="text-gray-400">Tesla</p>
      <div className="flex gap-6 mt-3 justify-center md:justify-start">
        <button
          type="button"
          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
          Remote
        </button>

        <button
          type="button"
          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
          Full Time
        </button>
      </div>
      <div className="flex gap-6 text-gray-400 justify-center md:justify-start mb-4">
        <p>Dhaka, Bangladesh</p>
        <p>Salary : 100K - 150K</p>
      </div>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        View Details
      </button>
    </div>
  );
};

export default FeaturedCard;
