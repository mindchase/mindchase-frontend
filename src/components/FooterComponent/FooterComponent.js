import React from 'react';
import logo from '../../img/logo.png';
import Link from '@material-ui/core/Link'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {
  Grid,
  ListItem,
  List,
  ListItemAvatar,
  makeStyles,
  Hidden,
} from '@material-ui/core';

import {
  FcPhone,
  FcOnlineSupport,
  FcVoicemail,
} from 'react-icons/fc';
import './Footer.css';


const useStyles = makeStyles(theme => ({
  footer_icons: {
    fontSize: '2rem',
    color: 'blue'
  },
  text: {
    fontSize: '1.1rem',
  },
  logo: {
    fontSize: '8rem',
    color: 'yellow',
  },
}));

const FooterComponent = () => {
  const classes = useStyles();
  return (
    <div className='footer'>
      <Hidden smDown>
        <Grid
          container
          direction='row'
          justify='space-around'
          alignItems='center'>
          <Grid item sm={12} xs={12} md={4}>
            <div className='childe1__container'>
              <div>
              <img src={logo} alt="Logo" styles="width:2em; hight:3em;" />;
              </div>
            </div>
          </Grid>

          <Grid sm={12} xs={12} md={4}>
            <div className='childe2__container'>
              <div className='childe2__title'>
                <List dense>
                  <ListItem>
                    <ListItemAvatar>
                      <LinkedInIcon className={classes.footer_icons} />
                    </ListItemAvatar>
                    <ListItem className={classes.text}>LinkedIn</ListItem>
                  </ListItem> 

                  <ListItem>
                    <ListItemAvatar>
                      <FcPhone className={classes.footer_icons} />
                    </ListItemAvatar>
                    <ListItem className={classes.text}>+49410215455</ListItem>
                  </ListItem>
                   
                  <ListItem>
                    <ListItemAvatar>
                      <FcVoicemail className={classes.footer_icons} />
                    </ListItemAvatar>
                    <ListItem className={classes.text}>
                      We answer within 2 hours during working days
                    </ListItem>
                  </ListItem>
                </List>
                </div>
                </div>
          </Grid>

          <Grid sm={12} xs={12} md={4}>
            <div className='child3__container'>
              <div className='child3__title'>
                <h1>About Us MindChase</h1>
                <p className={classes.text}>
                  We are Fun guys , we do fun things and stuff 
                  Learn with us all the new stuff and things 
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Hidden>
    </div>
  );
};

export default FooterComponent;
