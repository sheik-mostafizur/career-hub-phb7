import React from "react";

const Article = ({data}) => {
  return (
    <div className="p-3 bg-blue-100 my-6 rounded-md">
      <h2 className="font-bold text-2xl">{data.question}</h2>
      <p>{data.answer}</p>
    </div>
  );
};

export default Article;
