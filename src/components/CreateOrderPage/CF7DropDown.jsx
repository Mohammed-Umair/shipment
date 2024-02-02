import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Divider, TextField } from "@mui/material";
const CF7DropDown = () => {
  return (
    <Box
      sx={{
        maxHeight: "250px",
        overflowY: "auto",
      }}
    >
      <Divider
        sx={{
          boxShadow: 1,
        }}
      ></Divider>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          mt: "5px",
        }}
      >
        <Typography variant="caption">
          Item 00001 - CONNECTOR,FLEXIBLE;3 M LONG (200000000133)
        </Typography>
      </Box>

      {/* 1 */}
      <Grid container spacing={2} padding="15px 5px">
        {/* Column 1 */}
        <Grid item xs={4}>
          <Typography
            variant="body1"
            align="left"
            sx={{
              color: "blue",
              mb: "5px",
            }}
          >
            Manufacture Name{" "}
            <span
              style={{
                color: "red",
              }}
            >
              *
            </span>
          </Typography>
          <TextField variant="filled" fullWidth />
        </Grid>

        {/* Column 2 */}
        <Grid item xs={4}>
          <Typography
            variant="body1"
            align="left"
            sx={{
              color: "blue",
              mb: "5px",
            }}
          >
            Address (Line 1){" "}
          </Typography>
          <TextField variant="filled" fullWidth />
        </Grid>

        {/* Column 3 */}
        <Grid item xs={4}>
          <Typography
            variant="body1"
            align="left"
            sx={{
              color: "blue",
              mb: "5px",
            }}
          >
            Address (Line 2){" "}
          </Typography>
          <TextField variant="filled" fullWidth />
        </Grid>

        {/* Additional Dropdown in Column 3 */}
      </Grid>

      {/* 2 */}

      <Grid container spacing={2} padding="5px 5px">
        {/* Column 1 */}
        <Grid item xs={4}>
          <Typography
            variant="body1"
            align="left"
            sx={{
              color: "blue",
              mb: "5px",
            }}
          >
            Street{" "}
          </Typography>
          <TextField variant="filled" fullWidth />
        </Grid>

        {/* Column 2 */}
        <Grid item xs={4} display="flex" gap="10px">
          <Box>
            <Typography
              variant="body1"
              align="left"
              sx={{
                color: "blue",
                mb: "5px",
              }}
            >
              City
            </Typography>
            <TextField
              variant="filled"
              sx={{
                width: "150px",
              }}
            />
          </Box>
          <Box>
            <Typography
              variant="body1"
              align="left"
              sx={{
                color: "blue",
                mb: "5px",
              }}
            >
              Country
            </Typography>
            <Select
              label="Dropdown 2"
              sx={{
                width: "150px",
              }}
              variant="filled"
            >
              <MenuItem value="optionA">Option A</MenuItem>
              <MenuItem value="optionB">Option B</MenuItem>
              <MenuItem value="optionC">Option C</MenuItem>
            </Select>
          </Box>
        </Grid>
        {/* Column 3 */}
        <Grid item xs={4} display="flex" gap="10px">
          <Box>
            <Typography
              variant="body1"
              align="left"
              sx={{
                color: "blue",
                mb: "5px",
              }}
            >
              Region
            </Typography>

            <Select
              label="Dropdown 2"
              sx={{
                width: "150px",
              }}
              variant="filled"
            >
              <MenuItem value="optionA">Option A</MenuItem>
              <MenuItem value="optionB">Option B</MenuItem>
              <MenuItem value="optionC">Option C</MenuItem>
            </Select>
          </Box>
          <Box>
            <Typography
              variant="body1"
              align="left"
              sx={{
                color: "blue",
                mb: "5px",
              }}
            >
              Pin Code
            </Typography>
            <TextField
              variant="filled"
              sx={{
                width: "150px",
              }}
            />
          </Box>
        </Grid>

        {/* Additional Dropdown in Column 3 */}
      </Grid>
    </Box>
  );
};

export default CF7DropDown;
