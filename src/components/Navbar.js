
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import logo from '../logos/mindchase-transparent-logo-without-symbol.png'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[200],
    },
    secondary: {
      main: '#ffcc80',
    },
    Typography:{
      fontFamily :'Libre Baskerville',
      fontWeightRegular : 400 ,
      fontWeightRegularItalic : 400 ,
      fontWeightBold : 700 ,


    }
  },
});





const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

  return (
    <ThemeProvider theme={theme}>

        <AppBar position="static" >
            <Toolbar>
                  <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            className={classes.menuButton}
                    >
                    <MenuIcon />

                  </IconButton>
                  <img src ={logo} alt="mindchase-transparent-logo-without-symbol" className="logo" />

                <Typography variant="h6" className={classes.title}>
                  Mind-chase Digital campus
                </Typography>
                <Button color="inherit" onClick={handleOpen}>
                  Signup
                </Button>
              </Toolbar>
        </AppBar>

    </ThemeProvider>


  );
};

export default Navbar