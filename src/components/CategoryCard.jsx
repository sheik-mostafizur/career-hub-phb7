import React from "react";

const CategoryCard = ({category}) => {
  const {category_img, title, job_available} = category;
  return (
    <div className="bg-blue-50 p-10 rounded text-center md:text-left">
      <img className="mb-6 mx-auto md:mx-0" src={category_img} alt={title} />
      <h3 className="font-bold text-xl">{title}</h3>
      <p className="text-gray-400">{job_available}</p>
    </div>
  );
};

export default CategoryCard;
