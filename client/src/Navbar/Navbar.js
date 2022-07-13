import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const user = false;
  return (
    <div className="mainnav">
      <div className="mainleftnav">
        <div className="mainlefticons">
          <i className="mainlefticons fa-brands fa-facebook"></i>
          <i className=" mainlefticons fa-brands fa-twitter-square"></i>
          <i className=" mainlefticons fa-brands fa-linkedin"></i>
          <i className=" mainlefticons fa-brands fa-github-square"></i>
          <i className=" mainlefticons fa-brands fa-pinterest-square"></i>
        </div>
      </div>
      <div className="maincenternav">
        <ul className="centerul">
          <li className="navli">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </li>
          <li className="navli">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              ABOUT
            </Link>
          </li>
          <li className="navli">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              CONTACT
            </Link>
          </li>
          <li className="navli">
            <Link
              to="/write"
              style={{ textDecoration: "none", color: "white" }}
            >
              Write
            </Link>
          </li>
          <li className="navli">{user && "logout"}</li>
        </ul>
      </div>
      <div className="mainrightnav">
        {user ? (
          <img
            className="navimg"
            src="https://th.bing.com/th/id/R.efcda9824ca4ad9feae865c2b0eef096?rik=QQPRz5MHwCfrmA&pid=ImgRaw&r=0"
            alt=""
          />
        ) : (
          <>
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "white",
                margin: "10px",
                fontSize: "18px",
                fontWeight: "bold",
                marginLeft: "-30px",
              }}
            >
              LOGIN
            </Link>
            <Link
              to="/register"
              style={{
                textDecoration: "none",
                color: "white",
                margin: "10px",
                fontSize: "18px",
                fontWeight: "bold",
                marginLeft: "20px",
              }}
            >
              REGISTER
            </Link>
          </>
        )}

        <i className="search fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Navbar;
