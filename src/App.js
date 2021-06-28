import React from 'react'
import './App.css';
//import Navbar from './components/Navbar.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import{Route,NavLink} from 'react-router-dom'
import Login from './components/users/Login.js'
import {Button} from '@material-ui/core'
//import Registration from './components/Registration.js';

function App() {
  return (
    <div >
      <div className="Login"></div>
      <Button component={NavLink} to="/Login">Login</Button>
      <Button component={NavLink} to="/Login/Logout">Logout</Button>
      <Button component={NavLink} to="/Register">Register</Button>


      <Route path= "/" exact>
     
     
      </Route>
      <Route path="/Login">
      </Route>

     <Login /> 
    </div>
  );
}

export default App;
