import React from "react";
import blog_data from "./blog_data";
import Article from "./Article";

const Blog = () => {
  return (
    <>
      <h1 className="font-bold text-4xl text-center pt-10 pb-20 bg-blue-50">
        Blog Page
      </h1>
      <div className="max-w-screen-xl mx-auto p-4">
        <div>
          {blog_data.map((data) => (
            <Article key={data.id} data={data}></Article>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
