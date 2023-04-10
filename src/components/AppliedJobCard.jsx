import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faCircleDollarToSlot,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AppliedJobCard = ({singApply}) => {
  const {
    id,
    company_logo,
    company_name,
    job_title,
    fulltime_or_parttime,
    location,
    salary,
  } = singApply;
  return (
    <div className="flex items-center gap-6 p-8 border rounded">
      <div className="bg-gray-200 p-6 h-60 w-60 flex items-center justify-center rounded">
        <img src={company_logo} alt={company_name} />
      </div>
      <div className="flex-grow">
        <h3 className="font-bold text-xl">{job_title}</h3>
        <p className="text-gray-400">{company_name}</p>
        <div className="flex gap-6 mt-3 justify-center md:justify-start">
          {fulltime_or_parttime.map((time) => (
            <button
              key={time}
              type="button"
              className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
              {time}
            </button>
          ))}
        </div>
        <div className="md:flex gap-6 text-gray-400 justify-center md:justify-start mb-4">
          <p>
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>{" "}
            {location}
          </p>
          <p>
            <span>
              <span>
                <FontAwesomeIcon icon={faCircleDollarToSlot} />
              </span>
            </span>{" "}
            Salary : {salary}
          </p>
        </div>
      </div>
      <div>
      <Link to={`/job/${id}`}>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          View Details
        </button>
      </Link>
      </div>
    </div>
  );
};

export default AppliedJobCard;