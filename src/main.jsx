import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import App from "./App";
import "./index.css";
import ErrorPage from "./components/ErrorPage";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    errorElement: <ErrorPage />,
    children: [{path: "/", element: <Home></Home>}],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
