import React from "react";
import CardItem from "./CardItem";
// pull in grid & box for nice layout. p.s I h8 css
import { Box, Grid } from "@material-ui/core";
// test out how it looks with carousel
import Carousel from "react-material-ui-carousel";

// add cards here
const cardItemsArr = [
  {
    image: "./images/5.jpg",
    alt: "Picture of peaceful woman",
    title: "Stress Management",
    description: `Lizards are a widespread group of squamate reptiles, with over
    6,000 species, ranging across all continents except Antarctica`,
  },
  {
    image: "./images/14.png",
    alt: "Picture of clock",
    title: "Time Management",
    description: `Lizards are a widespread group of squamate reptiles, with over
   6,000 species, ranging across all continents except Antarctica`,
  },
  {
    image: "./images/14.png",
    alt: "Picture of peaceful woman",
    title: "Other Management",
    description: `Lizards are a widespread group of squamate reptiles, with over
   6,000 species, ranging across all continents except Antarctica`,
  },
  {
    image: "./images/14.png",
    alt: "Picture of peaceful woman",
    title: "Contemplative Reptile",
    description: `Lizards are a widespread group of squamate reptiles, with over
   6,000 species, ranging across all continents except Antarctica`,
  },
  {
    image: "./images/14.png",
    alt: "Picture of peaceful woman",
    title: "Contemplative Reptile",
    description: `Lizards are a widespread group of squamate reptiles, with over
   6,000 species, ranging across all continents except Antarctica`,
  },
  {
    image: "./images/14.png",
    alt: "Picture of peaceful woman",
    title: "Contemplative Reptile",
    description: `Lizards are a widespread group of squamate reptiles, with over
   6,000 species, ranging across all continents except Antarctica`,
  },
];

const Workshops = () => {
  return (
    <Box p={5}>
      <Grid container spacing={4} justify="center">
        {/* loop them props */}
        {cardItemsArr.map((card, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <CardItem {...card} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Workshops;
