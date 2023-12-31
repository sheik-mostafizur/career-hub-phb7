import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import App from "./App";
import "./index.css";
import ErrorPage from "./components/ErrorPage";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Job from "./components/Job";
import AppliedJob from "./components/AppliedJob";
import JobBanner from "./components/JobBanner";
import Statistics from "./components/Statistics";
import Blog from "./components/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    errorElement: <ErrorPage />,
    children: [
      {path: "/", element: <Home></Home>},
      {path: "/statistics", element: <Statistics></Statistics>},
      {path: "/blog", element: <Blog></Blog>},
      {path: "/applied-job", element: <AppliedJob></AppliedJob>},
      {
        path: "/job",
        element: <JobBanner />,
        children: [
          {
            path: "/job/:id",
            element: <Job></Job>,
            loader: async ({params}) => {
              const featuredJob = await fetch("featured_job.json");
              let jobData = await featuredJob.json();
              jobData = jobData.find((data) => data.id === params.id);
              return {jobData};
            },
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
