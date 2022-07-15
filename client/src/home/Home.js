import { useEffect, useState } from "react";
import "./home.css";
import Header from "../Header/Header";
import Posts from "../posts/Posts";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();



  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts"+search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Sidebar />
        <Posts posts={posts} />
      </div>
    </>
  );
};

export default Home;
