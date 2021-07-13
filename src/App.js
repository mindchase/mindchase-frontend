import Register from "./components/users/Registration";
import ForgotPassword from "./components/users/ForgotPassword";
import NewPassword from "./components/users/NewPassword";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./components/users/Login";
import Fees from "./components/pages/Fees";
import Messages from './components/pages/Messages'
import {ThemeProvider, CssBaseline } from "@material-ui/core";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import Navbar from "./components/Navbar/Navbar";
import theme from "./utils/theme";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import Workshop from "./components/Workshops/WorkshopBody"




const App = (match) => {
  
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Switch>
            <Route
              exact
              component={HomeBanner} 
              path="/workshops"
           
            />

            <Route 
            path="/workshops/:workshopId" 
            component={Workshop} 
            
            />
            <Route  
            path="/fees" 
            render={(props) => <Fees {...props} />} />
            
            <Route  path="/messages" render={(props) => <Messages {...props} />} />
            <Route path="/login" render={(props) => <Login {...props} />} />
            <Route
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
          <FooterComponent />
        </ThemeProvider>
      </Router>
    </>
  );
};

export default App;
