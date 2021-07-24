import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Document, Page } from 'react-pdf';

import {
      Card,
      CardActionArea,
      CardActions,
      CardContent,
      CardMedia,
      Button,
      Typography,
      makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
      maxWidth: 300,
      position :"relative",
      backgroundColor:" #F0E7E1"
    },
    root1:{
      marginTop:10,
      marginLeft:90,

    },
  text1:{
      color:'black'
    },
    media: {
      height: 140,
    },
    link: {
      textDecoration: 'none'
    }
});

const WorkshopItem = (props) => {
  /*

 i tray to insert the  as pdf File 

const [numPages ,setNumPages]=useState(null)
const [pageNumber,setPageNumber]=useState(1)

function onDocumentLoadSuccess({ numPages }) {
  setNumPages(numPages);
}

return (
  <div>
    <Document
      file="somefile.pdf"
      onLoadSuccess={onDocumentLoadSuccess}
    >
      <Page pageNumber={pageNumber} />
    </Document>
    <p>Page {pageNumber} of {numPages}</p>
  </div>
);
}
*/
  const classes = useStyles();
  const [isShown, setIsShown] = useState(false);
  const { path, url } = useRouteMatch();
  console.log("url:", url);
  console.log("path:", path);
  
  return (
    <div className={classes.root1}>
      <Link to={`${url}/${props.route}`}
      className={classes.link}
        >

        <Card
          className={classes.root}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}   
            >

            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    component="img"
                    alt={props.alt}
                    image={props.image}
                    title={props.title}

                  />

                <CardContent >
                    <Typography variant="h5" component="h2" 
                        className={classes.text1}  align ='center'>
                      {props.title}
                    </Typography>


                  </CardContent>

              </CardActionArea>
          </Card>
      </Link>

      {isShown && (
        <Card
          className={classes.root}
          variant="outlined"   
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <CardContent>
            <Typography
              className={classes.title}
              color="red"
              gutterBottom
              align = 'center'    
            >

              Fetch last updated: 01/2021
            </Typography>
            <Typography variant="h5" component="h2" 
              className={classes.text1}
              align = 'center' 
              presentation={props.presentation}        
            >

              <Link to={`${url}/${props.id}`}                  
                  className={classes.link}
     
                  >{props.title}</Link>
            </Typography>
            <Typography variant="body2" component="p">
              {props.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" color="secondary"
               to='/video-player'
               component={Link} 
            >
           go to videos-workshops
            </Button>
          </CardActions>
        </Card>
      )}
    </div>
  );
};

export default WorkshopItem;
