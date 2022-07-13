import "./home.css";
import Header from "../Header/Header";
import Posts from "../posts/Posts";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Sidebar />
        <Posts />
      </div>
    </>
  );
};

export default Home;
