import React from "react";
import Navbar from "../Navbar";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-8">
        <Header />
      </div>
    </div>
  );
};

export default Home;
