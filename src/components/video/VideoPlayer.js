import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardMedia from '@material-ui/core/CardMedia';
import './videoPlayer.css'
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

const VideoPlayer =()=> {
     const classes = useStyles();

    return (
        <div className={classes.root}>

<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
           
        <iframe
        title="video"
            id="video"
            width="300"
            heigh="154"
            src={"https://embed.ted.com/talks/amy_cuddy_your_body_language_may_shape_who_you_are"}
            frameBorder="0"
            allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
           
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        <card className="allVideo" >
            <h1>Welcome in yous video workshops</h1>
            {/* <header className="headerVideo">
                <input type="text" placeholder= "write the name of your video"
                    className="input-video"
                />
            </header>

            <iframe className="video"
                title="youtube" src="https://embed.ted.com/talks/amy_cuddy_your_body_language_may_shape_who_you_are" >
            </iframe> */}

            <div className="allVideo">
                <h1>See moor presentation</h1>
                <iframe 
                className="pretention"
                title ="pretention" src="https://www.slideshare.net/MohammadBasemKarhabi/slideshelf" scrolling="no" 
                > </iframe> 
                
            </div>
        </card>
        </div>
    )
}
export default VideoPlayer






