import React from "react";
import "./App.css";
//import Navbar from './components/Navbar.js'
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Login from "./components/users/Login";
import { Button } from "@material-ui/core";
// import Registration from "./components/Registration";

function App() {
  return (
    <Router>
      <Button component={NavLink} to="/login">
        Login
      </Button>
      {/* can redirect user - with event */}
      {/* <Button component={NavLink} to="/login/Logout">
        Logout
      </Button> */}
      <Button component={NavLink} to="/register">
        Register
      </Button>

      <Switch>
        <Route path="/">
          <Login 
          
          />
        </Route>
        {/* <Route path="/register">
          <Registration />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
