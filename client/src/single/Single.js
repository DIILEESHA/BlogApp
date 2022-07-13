import "./single.css"
import Singlepost from "../singlepost/Singlepost";
import Sidebar from "../Sidebar/Sidebar";

export default function Single() {
  return (
    <div className="single">
      <Sidebar/>
      <Singlepost />
      
    </div>
  );
}
