import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    seterror(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      seterror(true);
    }
  };

  return (
    <div className="reg1">
      <form className="smreg" onSubmit={handleSubmit}>
        <span className="regspan">user signup</span>
        <input
          type="text"
          className="userreg"
          placeholder="Username"
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          type="text"
          className="userlog"
          placeholder="Email"
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="text"
          className="pwdreg"
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <button className="logreg" type="submit">
          REGISTER
        </button>
        <span className="reg">
          Have a Account?{" "}
          <Link to="/login" className="signbtn">
            Sign In
          </Link>
        </span>
        {error && <span style={{color:"red",fontWeight:"400",marginTop:"10px"}}>Something Went Wrong</span>}
      </form>
    </div>
    // </div>
  );
};

export default Register;
