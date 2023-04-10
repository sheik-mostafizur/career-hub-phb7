import React from "react";
import {Outlet} from "react-router-dom";

const AppliedJobBanner = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl text-center pt-10 pb-20 bg-blue-50">
        Job Details
      </h1>
      <Outlet />
    </div>
  );
};

export default AppliedJobBanner;
