import React from 'react'
import Register from './Registration'
// import "../../../src/App.css";
//import Navbar from './components/Navbar.js'
import {
        Route,
        NavLink,
        BrowserRouter as Router,
        Switch,
} from "react-router-dom";
import Login from "./Login";
import { Button } from "@material-ui/core";




function HeaderUsers() {
    return (
        <Router>
        <Button component={NavLink} to="/login">
          Login
        </Button>
  
  
        <Button component={NavLink} to="/register">
          Register
        </Button>
  
  
        <Switch>
          <Route exact path="/login" render={props => <Login {...props} />} />
          <Route exact path="/register" render={props => <Register {...props} />} />
        </Switch>
      </Router>
  
    )
}

export default HeaderUsers
