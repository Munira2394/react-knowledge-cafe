import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const { cover_photo, title } = blog;
  return (
    <div className=" mb-3 border-b-2">
      <img
        src={cover_photo}
        alt={`image of ${title}`}
        className="w-[70%] mb-3"
      ></img>
      <h2 className="text-3xl">{title}</h2>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
