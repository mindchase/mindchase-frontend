import React, { useEffect, useState } from "react";
import WorkshopItem from "./WorkshopItem";
import WorkshopData from "./WorkshopBodyData";
import { Box, Grid } from "@material-ui/core";
import axios from 'axios'

const Workshops = () => {

  const [courses, setCourses] = useState([])

  useEffect(() => {
    const getCourses = async () => {
      const response = await axios.get("http://localhost:3002/courses")
      console.log(response.data)
      setCourses(response.data)
    }
    getCourses()
  }, [])


  return (
    <>
      <Box p={5}>
        <Grid container spacing={4}>
          {/* loop them props */}
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
