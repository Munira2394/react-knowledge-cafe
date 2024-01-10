import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import ReadingTimes from "./components/ReadingTimes/ReadingTimes";
import Header from "./components/header/header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="md:flex">
        <Blogs></Blogs>
        <ReadingTimes></ReadingTimes>
      </div>
    </>
  );
}

export default App;
