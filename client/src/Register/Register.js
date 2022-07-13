import "./register.css";
import {Link} from "react-router-dom"

const Register = () => {
  return (
    <div className="reg1">
      <div className="smreg">
        <span className="regspan">user signup</span>
        <input type="text" className="userreg" placeholder="Username" />
        <input type="text" className="userlog" placeholder="Email" />
        <input type="text" className="pwdreg" placeholder="Password" />
        <button className="logreg">REGISTER</button>
        <span className="reg">
          Have a Account? <Link to="/login" className="signbtn">Sign In</Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
