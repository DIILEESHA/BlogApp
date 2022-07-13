import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="log">
      <div className="smlog">
        <span className="logspan">user login</span>
        <input type="text" className="userlog" placeholder="Username" />
        <input type="text" className="pwdlog" placeholder="Password" />
        <button className="logbtn">LOGIN</button>
        <span className="reg">
          Don't Have Account? <Link to="/register" className="signbtn">Sign Up</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
