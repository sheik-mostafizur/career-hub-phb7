import React, {useEffect, useState} from "react";
import Navbar from "../Navbar";
import Header from "./Header";
import Category from "./Category";
import Featured from "./Featured";

const Home = () => {

  return (
    <div>
      <Navbar />
      <div className="mt-8">
        <Header />
      </div>
      <Category></Category>
      <Featured></Featured>
    </div>
  );
};

export default Home;
