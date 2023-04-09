import React from "react";
import Account from "../assets/Icons/accounts.png";

const CategoryCard = () => {
  return (
    <div className="bg-blue-50 p-10 rounded text-center md:text-left">
      <img
        className="mb-6 mx-auto md:mx-0"
        src={Account}
        alt="alternative text"
      />
      <h3 className="font-bold text-xl">Account & Finance</h3>
      <p className="text-gray-400">300 Jobs Available</p>
    </div>
  );
};

export default CategoryCard;
