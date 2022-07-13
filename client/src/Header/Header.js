import "./header.css";

const Header = () => {
  return (
    <div className="mainheader">
      <div className="headersm">Hello Every</div>
      <div className="ball"></div>
      <div className="ball"></div>

      <div className="headerlg">Blogger</div>
      <img
        className="headerimg"
        src="https://images.pexels.com/photos/4069291/pexels-photo-4069291.jpeg?cs=srgb&dl=pexels-cottonbro-4069291.jpg&fm=jpg"
        alt=""
      />
    </div>
  );
};

export default Header;
