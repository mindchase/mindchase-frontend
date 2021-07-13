//import React, { useEffect, useState } from "react";
import WorkshopItem from "./WorkshopItem";
//import WorkshopData from "./WorkshopBodyData";
import { Box, Grid } from "@material-ui/core";

const Workshops = ({courses,setCourses}) => {

  //const [courses, setCourses] = useState([])
  // State move to APP component

  return (
    <>
      <Box p={5}>
        <Grid container spacing={4}

        >
          {courses.map((card, id) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={id}>
                <WorkshopItem {...card} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Workshops;
