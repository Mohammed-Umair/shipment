import React from "react";
import { Box } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CommonAccordian from "./CommonAccordian";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const CreateOrder = () => {
  const breadcrumbs = [
    // <Link
    //   underline="hover"
    //   key="1"
    //   color="inherit"
    //   href="/"
    //   onClick={handleClick}
    //   sx={{
    //     textDecoration:"",
    //   }}
    // >
    //   MUI
    // </Link>,

    <Typography key="3" color="blue">
      Shipment
    </Typography>,
    <Typography key="3" color="blue">
      New Order
    </Typography>,
    <Typography key="3" color="blue">
      Order No. 240254847
    </Typography>,
  ];

  return (
    <div>
      <Box
        sx={{
          ml: 1,
          mt: 3,
        }}
      >
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Box>

      <Box sx={{
        m:2
      }}>

        <CommonAccordian/>
      </Box>
    </div>
  );
};

export default CreateOrder;
