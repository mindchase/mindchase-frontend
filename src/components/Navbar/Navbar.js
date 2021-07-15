import React, { useState } from "react";
import {
  AppBar,
  makeStyles,
  Tabs,
  Toolbar,
  Tab,
  Typography,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { positions } from '@material-ui/system';
import DrawerComponent from "./DrawerComponent/DrawerComponent";
import { GiBookAura } from "react-icons/gi";
import { FiBookOpen } from "react-icons/fi";
import { RiMoneyPoundCircleLine } from "react-icons/ri";
import MessageIcon from '@material-ui/icons/Message';
import { ImHappy } from "react-icons/im";
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png'

const useStyles = makeStyles((theme) => ({
  Logo:{
    width: '200px', 
    height: '100px',
    color:'red',
    position:'relative',
  },

  logo: {
    fontSize: "20rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.1rem",
    },
  },
  acount: {
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
  },
}));

const Navbar = ({token, setToken}) => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  //Boolean(anchorEl) This is use to convert a null value in to a boolean
  //anchorEl Is us to set the position of the menu

  const classes = useStyles();

  const theme = useTheme(); //Get a copy of our default theme in our component so that we can access the breakpoints and pass the useMediaQuery

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
      <AppBar elevation={0} color="primary">
        <Toolbar>
          <Tabs>

            <img
             src={Logo}
             className={classes.Logo}
             alt="logo"
           />
         
          </Tabs>
          {isMatch ? (
            <>
              <DrawerComponent />
            </>
          ) : (
            <>
              <Tabs
                onChange={handleClickTab}
                className={classes.tabsContainer}
                indicatorColor="secondary"
                value={value}
              >
                <Tab
                  disableRipple
                  icon={<FiBookOpen className={classes.icons} />}
                  label="Home"
                  to='/'
                  component={Link}
                />
                <Tab
                  disableRipple
                  icon={<RiMoneyPoundCircleLine className={classes.icons} />}
                  label="Quiz"
                  to='/fees'
                  component={Link}
                  
                />
                <Tab
                  disableRipple
                  icon={<MessageIcon className={classes.icons} />}
                  label="Messages"
                  to='/messages'
                  component={Link}
                />

                <Tab
                  disableRipple
                  icon={<ImHappy className={classes.icons} />}
                  label="About"
                  to='/about'
                  component={Link}
                />
              </Tabs>
              <Button
                aria-controls="menu"
                onMouseOver={handleOpenMenu}
                className={classes.acount}
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
          <MenuItem component={Link} to="/my-acount">My Account</MenuItem>
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
