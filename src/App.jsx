import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Header from "./components/header/header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleBookMark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleBookMark={handleBookMark}></Blogs>
        <BookMarks bookmarks={bookmarks}></BookMarks>
      </div>
    </>
  );
}

export default App;
