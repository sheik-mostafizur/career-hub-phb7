import React, {useEffect, useState} from "react";
import FeaturedCard from "../FeaturedCard";

const Featured = () => {
  const [featuredData, setFeaturedData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [isShowAll, setIsShowAll] = useState([]);

  useEffect(() => {
    const URL = "featured_job.json";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setFeaturedData(data);
        setIsShowAll(data.slice(0, 4));
      });
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto my-24 px-4">
      <div className="text-center mb-10 space-y-5">
        <h2 className="font-bold text-4xl md:text-5xl">Featured Jobs</h2>
        <p className="text-gray-400">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {isShowAll.map((featured) => (
          <FeaturedCard key={featured.id} featured={featured}></FeaturedCard>
        ))}
      </div>

      {showAll || (
        <button
          onClick={() => {
            setIsShowAll(featuredData);
            setShowAll(true);
          }}
          type="button"
          className="mt-12 mx-auto block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          See All Jobs
        </button>
      )}
    </div>
  );
};

export default Featured;
