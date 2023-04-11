import React, {useEffect, useState} from "react";
import AppliedJobCard from "../AppliedJobCard";
import AppliedJobBanner from "../AppliedJobBanner";
import {getShoppingCart} from "../../utilities/fakedb";

const AppliedJob = () => {
  const [appliedData, setAppliedData] = useState([]);
  const [jobData, setJobData] = useState([]);
  const [filteredJob, setFilteredJob] = useState([]);

  useEffect(() => {
    const URL = "featured_job.json";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setAppliedData(data));
  }, []);

  useEffect(() => {
    const savedData = getShoppingCart();
    const newData = [];
    for (const id in savedData) {
      const jobData = appliedData.find((job) => job.id === id);
      if (jobData) {
        newData.push(jobData);
      }
    }
    setJobData(newData);
    setFilteredJob(newData);
  }, [appliedData]);

  const handleFilter = (e) => {
    const optValue = e.target.value;

    if (optValue === "Remote") {
      const newJob = jobData.filter((item) => {
        if (item.remote_or_onsite === "Remote") return item;
      });
      setFilteredJob(newJob);
    } else if (optValue === "Onsite") {
      const newJob = jobData.filter(
        (item) => item.remote_or_onsite === "Onsite"
      );
      setFilteredJob(newJob);
    } else {
      setFilteredJob(jobData);
    }
  };

  return (
    <>
      <AppliedJobBanner />
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="my-24 space-y-6">
          <div className="w-40 ml-auto">
            <select
              onChange={handleFilter}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="all">All</option>
              <option value="Remote">Remote</option>
              <option value="Onsite">Onsite</option>
            </select>
          </div>

          {filteredJob &&
            filteredJob.map((singApply) => (
              <AppliedJobCard key={singApply.id} singApply={singApply} />
            ))}
        </div>
      </div>
    </>
  );
};

export default AppliedJob;
