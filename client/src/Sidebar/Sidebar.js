import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="mainside">
      <span className="sideabout">About me</span>
      <img
      className="sideimg"
        src="https://th.bing.com/th/id/R.4993159e4f235df439ac5989e1875943?rik=t4wWSdyjzosSLg&pid=ImgRaw&r=0"
        alt=""
      />
      <p className="sidepar">
        Incididunt et proident anim consequat sunt dolor. Enim aliqua enim ex
        qui Lorem voluptate do aute velit qui consectetur adipisicing.
        
      </p>
      <span className="sideabout">categories</span>
      <ul className="siedui">
        <li className="sideli">Life</li>
        <li className="sideli">Style</li>
        <li className="sideli">Tech</li>
        <li className="sideli">Style</li>
        <li className="sideli">Sport</li>
        <li className="sideli">Music</li>
        
      </ul>
      <span className="sideabout">follow us</span>
      <i className="mainlefticons fa-brands fa-facebook"></i>
        <i className=" mainlefticons fa-brands fa-twitter-square"></i>
        <i className=" mainlefticons fa-brands fa-linkedin"></i>
        <i className=" mainlefticons fa-brands fa-github-square"></i>
        <i className=" mainlefticons fa-brands fa-pinterest-square"></i>
    </div>
  );
};

export default Sidebar;
