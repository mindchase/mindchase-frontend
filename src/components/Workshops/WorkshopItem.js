import React, { useState } from "react";
// refactor for css
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
import { Link, useParams, useRouteMatch } from "react-router-dom";

// test out with carousel??????
// import Carousel from "react-material-ui-carousel";

// need to refactor this as css - or use this approach throughout project
const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 140,
  },
});

const WorkshopItem = (props) => {
  const classes = useStyles();

  const [isShown, setIsShown] = useState(false);

  // (trying to) build relative route paths
  const { id } = useParams();

  const { path, url } = useRouteMatch();
  console.log("url:", url);
  console.log("path:", path);

  return (
    <>
      <Link to={`${url}/${props.id}`}>
        <Card
          className={classes.root}
          // tooltip funcs
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
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
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
          // // tooltip funcs
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Fetch last updated: 01/2021?
            </Typography>
            <Typography variant="h5" component="h2">
              <Link to={`${url}/${props.id}`}>{props.title}</Link>
            </Typography>
            <Typography variant="body2" component="p">
              {props.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" color="secondary">
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default WorkshopItem;
