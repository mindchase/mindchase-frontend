import React from "react";
import Register from "./components/users/Registration";
import ForgotPassword from "./components/users/ForgotPassword";
import NewPassword from "./components/users/NewPassword";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Login from "./components/users/Login";
import { Button, ThemeProvider, CssBaseline } from "@material-ui/core";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import Navbar from "./components/Navbar/Navbar";
import theme from "./utils/theme";
import FooterComponent from "./components/FooterComponent/FooterComponent";
// import axios from 'axios'
// axios.defaults.baseUrl = 'http://localhost:3002'

const App = () => {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Button component={NavLink} to="/login">
            Login
          </Button>

          <Button component={NavLink} to="/register">
            Register
          </Button>

          <Switch>
            <Route
              exact
              path="/login"
              render={(props) => <Login {...props} />}
            />
            <Route
              exact
              path="/register"
              render={(props) => <Register {...props} />}
            />
            <Route
              exact
              path="/forgotpassword"
              render={(props) => <ForgotPassword {...props} />}
            />
            <Route
              exact
              path="/newpassword"
              render={(props) => <NewPassword {...props} />}
            />
          </Switch>
          <HomeBanner />

          <FooterComponent />
        </ThemeProvider>
      </Router>
    </>
  );
};

export default App;
