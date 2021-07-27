import Register from "./components/users/Registration";
import ForgotPassword from "./components/users/ForgotPassword";
//import NewPassword from "./components/users/NewPassword";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./components/users/Login";
import Fees from "./components/pages/Fees";
import { ThemeProvider, CssBaseline, createTheme } from "@material-ui/core";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import Navbar from "./components/Navbar/Navbar";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import Workshop from "./components/Workshops/WorkshopBody";
import useToken from "./components/useToken";
import Welcome from "./components/pages/Welcome";
import VideoPlayer from "./components/video/VideoPlayer";
import Chat from "./components/chat/Chat";
import Quiz from "./components/quiz/Quiz";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F0E7E1",
      light: "#ffe082",
    },
    secondary: {
      main: "#FF1616",
    },
  },
});

const App = () => {
  const { token, setToken } = useToken();
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar token={token} setToken={setToken} />

        <Switch>
          <Route path="/" exact component={HomeBanner} />

          <Route path="/welcome" component={Welcome} />

          <Route
            path="/login"
            render={(props) => <Login {...props} setToken={setToken} />}
          />

          <Route path="/fees" render={(props) => <Fees {...props} />} />

          <Route
            path="/register"
            render={(props) => <Register {...props} setToken={setToken} />}
          />

          <Route
            path="/forgotpassword"
            render={(props) => (
              <ForgotPassword {...props} setToken={setToken} />
            )}
          />

          <Route path="/about" redirect="/FooterComponents" />

          {token ? (
            <>
              <Route
                path="/workshops"
                render={(props) => <Workshop {...props} setToken={setToken} />}
                component={Workshop}
              />
              <Route
                path="/Quiz"
                render={(props) => <Quiz {...props} setToken={setToken} />}
              />

              <Route
                path="/video-player"
                render={(props) => (
                  <VideoPlayer {...props} setToken={setToken} />
                )}
              />

              <Route
                path="/messages"
                render={(props) => <Chat {...props} setToken={setToken} />}
              />
            </>
          ) : (
            <Redirect to="/welcome" />
          )}
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
