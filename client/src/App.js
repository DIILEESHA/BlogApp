import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home/Home";
import Navbar from "./Navbar/Navbar";
import Single from "./single/Single";
import Write from "./write/Write";
import Details from "./UserDetails/Details";
import Login from "./Login/Login";
import Register from "./Register/Register";

function App() {
  const user = false;
  return (
    <div className="App">
      
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            {user ? <Home/> : <Login />}
          </Route>
          <Route exact path="/register">
           {user ? <Home/> : <Register />}
          </Route>
          <Route exact path="/write">
          {user ? <Write/> : <Register />}
          </Route>
          <Route exact path="/settings">
          {user ? <Details/> : <Login />}
          </Route>
          <Route exact path="/post/:postid">
            <Single />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
