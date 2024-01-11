import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleBookMark }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-2/3">
      <h1 className="text-2xl pb-2 mb-1">blogs: {blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} handleBookMark={handleBookMark}></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handleBookMark: PropTypes.func,
};

export default Blogs;
