import React from 'react'
import './App.css';
import Navbar from './components/Navbar.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import{Route} from 'react-router-dom'
import Login from './components/Login.js'



function App() {
  return (
    <div >
      
      <Route path= "/">
      <Login />
      </Route>
      
    </div>
  );
}

export default App;
