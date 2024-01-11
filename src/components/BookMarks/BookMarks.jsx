import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";

const BookMarks = ({ bookmarks }) => {
  return (
    <div className="bg-slate-300 m-2 p-4 rounded">
      <h1 className="text-3xl mb-2 p-4 ">
        Bookmarked Blogs : {bookmarks.length}
      </h1>
      {bookmarks.map((bookMark) => (
        <BookMark key={bookMark.id} bookMark={bookMark}></BookMark>
      ))}
    </div>
  );
};

BookMarks.propTypes = {
  bookmarks: PropTypes.array,
};

export default BookMarks;
