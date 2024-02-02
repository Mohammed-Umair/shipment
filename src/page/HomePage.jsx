import React from "react";
import NavBar from "../common/NavBar/NavBar";
import { Grid, Box } from "@mui/material";



import LeftSider from "../components/LeftSider/LeftSider";
import HomePageTabs from "../components/HomePage/HomePageTabs";
const HomePage = () => {
  

  return (
    <div>
      <NavBar />

      <Grid container>
        <Grid item xs={0.5} sm={0.5} md={0.5} lg={0.5} sx={{}}>
          <LeftSider />
        </Grid>
        <Grid
          item
          xs={11.5}
          sm={11.5}
          md={11.5}
          lg={11.5}
          sx={{
          }}
        >
        <HomePageTabs/>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
