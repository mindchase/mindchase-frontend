import React,{useState ,useEffect }from "react";
import { Hidden, makeStyles, Button } from '@material-ui/core';
import MainContent from '../MainContent/MainContent';
//import IconsGrid from '../IconsGrid/IconsGrid';
import background from '../../images/digitalcampus_with_logo.jpg'
import axios from 'axios'
import Workshops from "../Workshops/Workshops";
import { Link } from "react-router-dom";

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
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const getCourses = async () => {
      const response = await axios.get("/courses")
     // console.log("hey",response.data)
      setCourses(response.data)
    }
    getCourses()
  }, [])

  const classes = useStyles();
  return (
    <>
      <div className={classes.conatainer} maxWidth={false}>
     <Hidden>
          <h1 className={classes.title}>Digital Campus</h1>
          <Button variant='contained' color='secondary'
             to='/register'
             component={Link}  >
            join us
          </Button>
      </Hidden>
      </div>
      <Workshops 
          courses={courses}
          />
         
      <MainContent />
    </>
  );
};

export default HomeBanner;
