import React from "react";
import blog_data from "./blog_data";
import Article from "./Article";

const Blog = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div>
        {blog_data.map((data) => (
          <Article key={data.id} data={data}></Article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
