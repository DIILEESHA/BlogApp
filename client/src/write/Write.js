import "./write.css";

const Write = () => {
  return (
    <div className="mainwrite">
       <img
        className="singleimger"
        src="https://images.pexels.com/photos/716398/pexels-photo-716398.jpeg"
        alt=""
      />
      <form className="writeform">
        <div className="right">
          <div className="tt">
          <label htmlFor="file">
          <i className="lala fa-solid fa-plus"></i>
          </label>
          <input type="file" id="file" style={{ display: "none" }} />
          <input type="text" placeholder="Title" className="trt" />
          </div>
          <textarea
            className="formtext"
            placeholder="Tell About Something..."
          />
        </div>
        <button className="formbtn">Save</button>
      </form>
    </div>
  );
};

export default Write;
