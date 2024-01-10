import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const {
    cover_photo,
    title,
    author,
    author_img,
    posted_date,
    reading_time_minutes,
    hashtags,
  } = blog;
  return (
    <div className="mb-3 border-b-2">
      <img
        src={cover_photo}
        alt={`image of ${title}`}
        className="w-[70%] mb-3"
      ></img>
      <div className="flex justify-between">
        <div className="flex">
          <img
            src={author_img}
            alt={`${title} author_img`}
            className="w-14 rounded-full"
          />
          <div className="flex flex-col justify-center align-middle">
            <h3>{author}</h3>
            <h4>{posted_date}</h4>
          </div>
        </div>
        {/* <h3 className="flex-1">{reading_time_minutes} min read</h3> */}
        <span>{reading_time_minutes} min read</span>
      </div>
      <h2 className="text-3xl mt-1 pb-2">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <a key={idx}> #{hash} </a>
        ))}
      </p>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
