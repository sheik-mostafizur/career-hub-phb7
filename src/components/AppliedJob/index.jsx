import React, {useEffect, useState} from "react";
import AppliedJobCard from "../AppliedJobCard";

const AppliedJob = () => {
  const [appliedData, setAppliedData] = useState([]);

  useEffect(() => {
    const URL = "featured_job.json";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setAppliedData(data));
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      
      <div className="my-24 space-y-6">
        {appliedData.map((singApply) => (
        <AppliedJobCard key={singApply.id} singApply={singApply} />
      ))}
      </div>
    </div>
  );
};

export default AppliedJob;
