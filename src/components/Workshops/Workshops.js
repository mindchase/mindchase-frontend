import React from "react";
import WorkshopItem from "./WorkshopItem";
import WorkshopData from "./WorkshopBodyData";
import { Box, Grid } from "@material-ui/core";

const Workshops = () => {
  return (
    <>
      <Box p={5}>
        <Grid container spacing={4}>
          {/* loop them props */}
          {WorkshopData.map((card, id) => {
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
