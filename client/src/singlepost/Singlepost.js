import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./singlepost.css";

const Singlepost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, Setpost] = useState({});

  useEffect(() => {
    const getpost = async () => {
      const res = await axios.get("/posts/" + path);
      Setpost(res.data);
    };
    getpost();
  }, [path]);

  return (
    <div className="singlepost">
      {post.photo && ( <img className="singleimg" src="{post.photo}" alt="" />)}
      <span className="singletitle">{post.title}</span>

      <span className="singlebtn">
        <i className="singlebtn1 fa-solid fa-pen-to-square"></i>
        <i className="singlebtn2 fa-solid fa-trash-can"></i>
      </span>

      <span className="singleall">
        {post.username}
        <span className="singler">
          {new Date(post.createdAt).toDateString()}
        </span>
      </span>
      <p className="singleparism">{post.title}</p>
    </div>
  );
};

export default Singlepost;
