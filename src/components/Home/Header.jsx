import React from "react";
import Man from "../../assets/All_images/home_header_man.png";

const Header = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="grid md:grid-cols-2 md:items-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-7xl font-bold">
            One Step <br />
            Closer To Your
            <span className="text-blue-500">Dream Job</span>
          </h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Get Started
          </button>
        </div>
        <div>
          <img src={Man} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Header;
