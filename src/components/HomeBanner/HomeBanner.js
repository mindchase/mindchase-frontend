import React from 'react';
import { Container, Hidden, makeStyles, Button } from '@material-ui/core';
import MainContent from '../MainContent/MainContent';
import IconsGrid from '../IconsGrid/IconsGrid';
import background from '../../images/digitalcampus_with_logo.jpg'

const useStyles = makeStyles(theme => ({
  conatainer: {
    height: '100vh',
    background: ` url( ${background} )`,
    backgroundPosition: 'contained',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    flexDirection: 'column',
  },
  title: {
    fontSize: '4rem',
    color: 'red',
  },
  text: {
    fontSize: '1.4rem',
    marginBottom: '20px',
  },
}));

const HomeBanner = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.conatainer} maxWidth={false}>
        <Hidden mdDown>
          <h1 className={classes.title}>Digital Campus</h1>
    
      {/*      <p className={classes.text}>Digital Campus</p>*/}
          <Button variant='contained' color='secondary'>
            join us
          </Button>
        </Hidden>
      </div>
      <IconsGrid />
      <MainContent />
    </>
  );
};

export default HomeBanner;
