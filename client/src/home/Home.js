import { useEffect, useState } from "react";
import "./home.css";
import Header from "../Header/Header";
import Posts from "../posts/Posts";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data)
    }
    fetchPosts()
  }, []);
  return (
    <>
      <Header />
      <div className="home">
        <Sidebar />
        <Posts posts ={posts} />
      </div>
    </>
  );
};

export default Home;
