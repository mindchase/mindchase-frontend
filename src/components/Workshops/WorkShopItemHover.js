// import React from "react";
// // // refactor for css
// import {
//   Card,
//   CardActions,
//   CardContent,
//   Button,
//   Typography,
//   makeStyles,
// } from "@material-ui/core";
// // import { Link } from "react-router-dom";
// // // import WorkshopBody from "./WorkshopsBody";
// // // test out with carousel??????
// // // import Carousel from "react-material-ui-carousel";

// // // need to refactor this as css - or use this approach throughout project
// const useStyles = makeStyles({
//   root: {
//     maxWidth: 145,
//   },
//   media: {
//     height: 140,
//   },
// });

// const WorkShopItemHover = (props) => {

//   const classes = useStyles();
//   return (
//     <>
//       <Card
//         className={classes.root}
//         variant="outlined"
//         // // tooltip funcs
//         // onMouseEnter={() => props.setIsShown(true)}
//         // onMouseLeave={() => props.setIsShown(false)}
//       >
//         <CardContent>
//           <Typography
//             className={classes.title}
//             color="textSecondary"
//             gutterBottom
//           >
//             Fetch last updated: 01/2021?
//           </Typography>
//           <Typography variant="h5" component="h2">
//             {/* <Link to={`${url}/${props.index}`}> */}
//             {props.title}
//             {/* </Link> */}
//           </Typography>
//           <Typography variant="body2" component="p">
//             {props.description}
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button size="small" variant="contained" color="secondary">
//             Add to Cart
//           </Button>
//         </CardActions>
//       </Card>
//     </>
//   );
// };

// export default WorkShopItemHover;
