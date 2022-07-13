import Sidebar from "../Sidebar/Sidebar";
import "./details.css";
const Details = () => {
  return (
    <div className="details">
      <div className="middetails">
        <div className="detailspack">
          <span className="updatespan">Update Your Account</span>
          <span className="profile">Profile Pictutre</span>
          <img src="" alt="" className="prodetailsimg" />

          <form className="user">
            <img
              src="https://images.pexels.com/photos/8059137/pexels-photo-8059137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="userimg"
            />
            <label htmlFor="userfile">
              <i className="sadak fa-solid fa-user-check"></i>
            </label>
            <input type="file" id="userfile" style={{ display: "none" }} />
            <div className="all">
              <label className="userlabel1">Username</label>
              <input className="userinputs" type="text" />
              <label className="userlabel">Email</label>
              <input
                style={{ backgroundColor: "white" }}
                className="userinputs"
                type="email"
              />
              <label className="userlabel">Password</label>
              <input
                style={{ backgroundColor: "white" }}
                className="userinputs"
                type="password"
              />
            </div>
            <button className="userbtn">Update</button>
          </form>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Details;
