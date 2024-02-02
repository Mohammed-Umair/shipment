import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {
  Divider,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
const OD1DropDown = () => {
  return (
    <Box
      sx={{
        maxHeight: "210px",
        overflowY: "auto",
      }}
    >
      <Divider></Divider>
      {/* 1 */}
      <Typography
        variant="body1"
        textAlign="left"
        mt="30px"
        sx={{
          fontSize: "18px",
          fontWeight: 600,
        }}
      >
        {" "}
        SENSOR : COPPER ; PN;1 SENSOR-C2(2000541777)
      </Typography>
      <Grid container spacing={2} padding="30px 30px 0px">
        {/* Column 1 */}
        <Grid item xs={3}>
          <Box align="left">
            <Typography
              variant="body1"
              sx={{
                color: "gray",
              }}
            >
              Quantity :
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
              }}
            >
              100.000Each
            </Typography>
          </Box>
        </Grid>

        {/* Column 2 */}
        <Grid item xs={3}>
          <Box align="left">
            <Typography
              variant="body1"
              sx={{
                color: "gray",
              }}
            >
              Unit Rate :
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
              }}
            >
            1.00 USD
            </Typography>
          </Box>
        </Grid>
        {/* column 3 */}

        <Grid item xs={3}>
          <Box align="left">
            <Typography
              variant="body1"
              sx={{
                color: "gray",
              }}
            >
              GST(%):
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
              }}
            >
              --
            </Typography>
          </Box>
        </Grid>
        {/* column 4 */}
        <Grid item xs={3}>
          <Box align="left">
            <Typography
              variant="body1"
              sx={{
                color: "gray",
              }}
            >
              Total Amount :
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
              }}
            >
              100.00 USD
            </Typography>
          </Box>
        </Grid>
        {/* Additional Dropdown in Column 3 */}
      </Grid>

      {/* 2 */}
      <Typography
        variant="body1"
        textAlign="left"
        mt="30px"
        sx={{
          fontSize: "18px",
          fontWeight: 600,
        }}
      >
        {" "}
        UNIVERSAL AC POWER SUPPLY,PIN-106M1079 (200065668)
      </Typography>
      
      <Grid container spacing={2} padding="30px 30px 0px">
        {/* Column 1 */}
        <Grid item xs={3}>
          <Box align="left">
            <Typography
              variant="body1"
              sx={{
                color: "gray",
              }}
            >
              Quantity :
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
              }}
            >
              100.000Each
            </Typography>
          </Box>
        </Grid>

        {/* Column 2 */}
        <Grid item xs={3}>
          <Box align="left">
            <Typography
              variant="body1"
              sx={{
                color: "gray",
              }}
            >
              Unit Rate :
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
              }}
            >
            1.00 USD
            </Typography>
          </Box>
        </Grid>
        {/* column 3 */}

        <Grid item xs={3}>
          <Box align="left">
            <Typography
              variant="body1"
              sx={{
                color: "gray",
              }}
            >
              GST(%):
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
              }}
            >
              --
            </Typography>
          </Box>
        </Grid>
        {/* column 4 */}
        <Grid item xs={3}>
          <Box align="left">
            <Typography
              variant="body1"
              sx={{
                color: "gray",
              }}
            >
              Total Amount :
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
              }}
            >
              100.00 USD
            </Typography>
          </Box>
        </Grid>
      
      </Grid>
      
    </Box>
  );
};

export default OD1DropDown;
