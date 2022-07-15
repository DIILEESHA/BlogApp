import "./post.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="allpost">
      <img
        className="postimg"
        src="https://images.pexels.com/photos/12488388/pexels-photo-12488388.jpeg?cs=srgb&dl=pexels-c%C3%A9line-12488388.jpg&fm=jpg"
        alt=""
      />
      <span className="postspan">Music Life</span>
      <Link to={`/post/${post._id}`}>
        <span className="postpan1">{post.title}</span>
      </Link>
      <span className="posttimelapse">
        {new Date(post.createdAt).toDateString()}
      </span>
      <p className="postpar">{post.desc}</p>
    </div>
  );
};

export default Post;
