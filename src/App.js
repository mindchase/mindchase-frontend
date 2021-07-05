import React from "react";
//import Navbar from './components/Navbar.js'
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { Button } from "@material-ui/core";
import Registration from "./components/Registration";
import Login from "./components/users/Login";
import Workshops from "./components/Workshops/Workshops";
import WorkshopsBody from "./components/Workshops/WorkshopsBody";

function App() {
  return (
    <Router>
      
      <Button component={NavLink} to="/login">
        Login
      </Button>
      {/* can redirect user - with event */}
      <Button component={NavLink} to="/login/logout">
        Logout
      </Button>
      <Button component={NavLink} to="/register">
        Register
      </Button>
      <Button component={NavLink} to="/workshops">
        Workshops
      </Button>
      
      <Switch>
        <Route path="/login"> 
          <Login />
        </Route>

        <Route path="/workshops" exact component={Workshops}>
          <Workshops />
        </Route>
        <Route path="/workshops/:id">
          <WorkshopsBody />
        </Route>

        <Route path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Registration />
        </Route>
      </Switch>

      </Router>
  );
}

export default App;
