import React, {useEffect, useState} from "react";
import CategoryCard from "../CategoryCard";

const Category = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const URL = "category_job.json";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setCategoryData(data));
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto my-24 px-4">
      <div className="text-center mb-10 space-y-5">
        <h2 className="font-bold text-4xl md:text-5xl">Job Category List</h2>
        <p className="text-gray-400">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {categoryData.map((category) => (
          <CategoryCard key={category.id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
