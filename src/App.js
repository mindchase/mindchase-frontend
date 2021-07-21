import Register from "./components/users/Registration";
import ForgotPassword from "./components/users/ForgotPassword";
import NewPassword from "./components/users/NewPassword";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./components/users/Login";
import Fees from "./components/pages/Fees";
import Messages from './components/pages/Messages'
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import Navbar from "./components/Navbar/Navbar";
import theme from "./utils/theme";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import Workshop from "./components/Workshops/WorkshopBody"
import Quiz from "./components/quiz/Quiz"
import AddQuiz from "./components/quiz/AddQuiz"
import useToken from './components/useToken';
import YoutubePlayer from './components/video/YoutubePlayer'

const App = () => {
  const { token, setToken } = useToken();
  return (
    <>
      <Router>

        <ThemeProvider theme={theme}>
          <CssBaseline />
          <header>
            <Navbar token={token} setToken={setToken} />
          </header>
          <Switch>
            <Route path="/"
              exact
              component={HomeBanner} />

            {token && <>
              <Route path="/workshops"
                component={Workshop} />
              <Route path="/messages"
                render={(props) => <Messages {...props} setToken={setToken} />} />  </>

            }

            <Route path="/quiz"
              component={Quiz} />

            <Route path="/addquiz"
              component={AddQuiz} />


            <Route path="/login"
              render={(props) => <Login {...props} setToken={setToken} />} />

            <Route path="/fees"
              render={(props) => <Fees {...props} />} />

            <Route path="/register"
              render={(props) => <Register {...props} setToken={setToken} />} />

            <Route path="/forgotPassword"
              render={(props) => <ForgotPassword {...props} setToken={setToken} />} />





          </Switch>
          <div>
            <div>
            </div>
            {
              token && <YoutubePlayer />
            }

          </div>
        </ThemeProvider>
        <footer>
          <FooterComponent />
        </footer>
      </Router>
    </>
  );
};

export default App;
