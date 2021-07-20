import React, { useState } from "react";
import {
  AppBar,
  makeStyles,
  Tabs,
  Toolbar,
  Tab,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import DrawerComponent from "./DrawerComponent/DrawerComponent";
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png'

const useStyles = makeStyles((theme) => ({
  Logo :{
    color:'red',
    maxWidth :180,
    maxHeight:200,
    position:"absolute",
    zIndex :"tooltip",
[theme.breakpoints.down("md")]: 
  {
      fontSize: "10.1rem",
    },
  },
  account: {
    marginLeft: "auto",
    "&:hover": {
      background: "purple",
    },
  },
  tabsContainer: {
    marginLeft: "auto",
  },
  iconLogo: {
    color: "red",
    fontSize: "3rem",
  },
  icons: {
    fontSize: "1.4rem",
    color: '#FF1616'
  },
  
}));

const Navbar = ({token, setToken}) => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  //Boolean(anchorEl) This is use to convert a null value in to a boolean
  //anchorEl Is us to set the position of the menu
  const classes = useStyles();
  const theme = useTheme(); 
  //Get a copy of our default theme in our component so that we can access the breakpoints and pass the useMediaQuery
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  //Functions
  const handleClickTab = (e, newValue) => {
    //The second value contains the current index
    setValue(newValue);
  };

  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    setToken("")
  }

  return (
    <>
      <AppBar elevation={0} color="#efebe9" className= {classes.AppBar}>
        <Toolbar>
          
          {isMatch ? (
              <>
                <DrawerComponent />
              </>
            ) : 
            (
            <>
            <img   className={classes.Logo}
                      src={Logo}
                       alt="logo"   
                 />
     
              <Tabs
                onChange={handleClickTab}
                className={classes.tabsContainer}
                indicatorColor="secondary"
                value={value}
              
              >
             
              <Tab
                disableRipple
                label="Home"
                to='/'
                component={Link}
              />

                <Tab
                  disableRipple
                  label="Quiz"
                  to='/quiz'
                  component={Link}
                  
                />
                <Tab
                  disableRipple
                  label="Chat"
                  to='/messages'
                  component={Link}
                />

                <Tab
                  disableRipple
                  label="Contact"
                  to='/about'
                  component={Link}
                />

              </Tabs>
              <Button
                aria-controls="menu"
                onMouseOver={handleOpenMenu}
                className={classes.account}
                disableElevation
                disableRipple
                variant="contained"
                color="secondary"
              >
                Profile
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      {/* Menu */}
      <Menu
        style={{ marginTop: "50px" }}
        id="menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        {token 
          ?
          <>
          <MenuItem component={Link} to="/my-account">My Account</MenuItem>
          <MenuItem component={Link} to="/messages">
            Messages
          </MenuItem>
          <MenuItem onClick={logOut}>
            logout
          </MenuItem>
          </>
          :
          <>
          <MenuItem component={Link} to="/login">
            login
          </MenuItem>
          <MenuItem component={Link} to="/register">
            Register
          </MenuItem>
          </>
        }

      </Menu>
    </>
  );
};

export default Navbar;
