import Register from "./components/users/Registration";
import ForgotPassword from "./components/users/ForgotPassword";
//import NewPassword from "./components/users/NewPassword";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./components/users/Login";
import Fees from "./components/pages/Fees";
import Messages from './components/pages/Messages'
import { ThemeProvider, CssBaseline ,createTheme} from "@material-ui/core";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import Navbar from "./components/Navbar/Navbar";
//import theme from "./utils/theme";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import Workshop from "./components/Workshops/WorkshopBody"
import AddQuiz from "./components/quiz/AddQuiz"
import useToken from './components/useToken';
//import amber from '@material-ui/core/colors/amber';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F0E7E1',
      light:'#ffe082'
    },
    secondary :{
      main :'#FF1616'
    }
   
  },
})

const App = () => {
  const { token, setToken } = useToken();
  return (
    <>
      <Router>
    
        <ThemeProvider theme={theme} >
        <CssBaseline />
          <header>
          <Navbar token={token} setToken={setToken} 
 
          />
          </header>  
          <Switch>
            <Route  path="/"
                     exact
                      component={HomeBanner}    />

            {token  &&  <>
            <Route path="/workshops"
            component={Workshop} />
            <Route  path="/messages" 
               render={(props) => <Messages {...props} setToken ={setToken} />} />  </>
            
            }  
                  
              <Route  path="/quiz" 
                      component={AddQuiz} />
              
              <Route path="/login" 
                render={(props) => <Login {...props} setToken={setToken} />}  />

              <Route path="/fees" 
                render={(props) => <Fees {...props}   />} />

              <Route path="/register"
                render={(props) => <Register {...props} setToken={setToken} /> }/>

              <Route  path="/forgotPassword"
                render={(props) => <ForgotPassword {...props} setToken={setToken} />}/>
                  
          </Switch>
         
        </ThemeProvider>
      <footer>
        <FooterComponent />
      </footer>
      </Router>
    </>
  );
};

export default App;
