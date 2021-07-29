import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './videoPlayer.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    height:'80px',

  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    height:'80px',

  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,

  },
  details: {
    alignItems: 'center',
    backgroundColor:'gray',
    height:'420px',
    position:'relative'

  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const VideoPlayer =()=> {
     const classes = useStyles();
     const [expanded, setExpanded] = React.useState(false);

     const handleChange = (panel) => (event, isExpanded) => {
       setExpanded(isExpanded ? panel : false);
     }
      
    return (
      <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>VideoPlayer</Typography>
          <Typography className={classes.secondaryHeading}
          >
            <h1 className='secondaryHeading'>Video workshops</h1>
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <iframe
                  title="video"
                  id="video"
                  width="400"
                  heigh="800"
                  src={"https://embed.ted.com/talks/amy_cuddy_your_body_language_may_shape_who_you_are"}
                  frameBorder="0"
                  allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Presentation</Typography>
          <Typography className={classes.secondaryHeading}>
          <h1>Time Management</h1>       
             </Typography>
        </AccordionSummary>
        <AccordionDetails>
   
                <iframe 
                className="pretention"
                title ="pretention" 
                src="https://www.slideshare.net/MohammadBasemKarhabi/slideshelf" scrolling="no" 
                allowFullScreen
                > 
                </iframe> 
        </AccordionDetails>
      </Accordion> 
    </div>
    )
}
export default VideoPlayer;