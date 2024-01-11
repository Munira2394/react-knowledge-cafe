import Proptypes from "prop-types";

const BookMark = ({ bookMark }) => {
  const { title } = bookMark;
  console.log(title);
  return (
    <div className="border-2 bg-slate-200 m-2 p-4 rounded">
      <h1 className="text-2xl ">{title}</h1>
    </div>
  );
};

BookMark.propTypes = {
  bookMark: Proptypes.object,
};

export default BookMark;
