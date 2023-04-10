import React, {useEffect, useState} from "react";
import AppliedJobCard from "../AppliedJobCard";
import AppliedJobBanner from "../AppliedJobBanner";
import {getShoppingCart} from "../../utilities/fakedb";

const AppliedJob = () => {
  const [appliedData, setAppliedData] = useState([]);
  const [jobData, setJobData] = useState([]);

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
  }, [appliedData]);

  return (
    <>
      <AppliedJobBanner />
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="my-24 space-y-6">
          {jobData &&
            jobData.map((singApply) => (
              <AppliedJobCard key={singApply.id} singApply={singApply} />
            ))}
        </div>
      </div>
    </>
  );
};

export default AppliedJob;
