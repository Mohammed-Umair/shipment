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

const CF1DropDown = () => {
  return (
    <Box
      sx={{
        maxHeight: "210px",
        overflowY: "auto",
      }}
    >
      <Divider></Divider>

      {/* 1 */}
      <Grid container spacing={2} padding="30px 30px 0px">
        {/* Column 1 */}
        <Grid item xs={4}>
          <Box align="left">
            <Typography
              variant="body1"
              sx={{
                color: "gray",
              }}
            >
              Company Code
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
              }}
            >
              9008
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
              }}
            >
              Reliance Retail Limited
            </Typography>
          </Box>
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
            City
          </Typography>
          <Select label="City" fullWidth variant="filled">
            <MenuItem value="city1">City 1</MenuItem>
            <MenuItem value="city2">City 2</MenuItem>
            <MenuItem value="city3">City 3</MenuItem>
          </Select>
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
              Gross Weight
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
              Unit Of Measurement
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

        {/* Additional Dropdown in Column 3 */}
      </Grid>

      {/* 2 */}
      <Grid container spacing={2} padding="10px 30px">
        {/* Column 1 */}
        <Grid item xs={4}>
          <Box align="left">
            <Typography
              variant="body1"
              sx={{
                color: "gray",
              }}
            >
              Site Code
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
              }}
            >
              2000
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
              }}
            >
              Reliance Retail Limited
            </Typography>
          </Box>
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
            Country Code
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
            }}
          >
            <Select
              label="City"
              sx={{
                width: "150px",
              }}
              variant="filled"
            >
              <MenuItem value="city1">City 1</MenuItem>
              <MenuItem value="city2">City 2</MenuItem>
              <MenuItem value="city3">City 3</MenuItem>
            </Select>
            <Select
              label="City"
              sx={{
                width: "150px",
              }}
              variant="filled"
            >
              <MenuItem value="city1">City 1</MenuItem>
              <MenuItem value="city2">City 2</MenuItem>
              <MenuItem value="city3">City 3</MenuItem>
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
              Volume
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
              Volume Unit
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

      {/* 3 */}
      <Grid container spacing={2} padding="10px 30px">
        {/* Column 1 */}
        <Grid item xs={4}>
          <Box align="left">
            <Typography
              variant="body1"
              sx={{
                color: "gray",
              }}
            >
              Vendor
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
              }}
            >
              10000000007
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
              }}
            >
              Ratan && Shah
            </Typography>
          </Box>
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
              Region
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
              State
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
        <Grid item xs={4}>
          <Typography
            variant="body1"
            align="left"
            sx={{
              color: "blue",
              mb: "5px",
            }}
          >
            Description
          </Typography>
          <TextField variant="filled" fullWidth />
        </Grid>
      </Grid>

      {/* 4 */}

      <Grid container spacing={2} padding="10px 30px">
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
            Name 2
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
            Means of Transport Type
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
            Bro Applicable
          </Typography>
          <TextField variant="filled" fullWidth />
        </Grid>
      </Grid>

      {/* 5 */}

      <Grid container spacing={2} padding="10px 30px">
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
            Name 3
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
            Cargo Type Code
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
            Cargo Readiness Date
          </Typography>
          <TextField
            type="date"
            variant="filled"
            fullWidth
            sx={{
              width: "100%",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Grid>

      {/* 6 */}
      <Grid container spacing={2} padding="10px 30px">
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
            Name 4
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
            No. of Package
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
            Hazardous/ Dangerous goods
          </Typography>

          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </Grid>
      </Grid>

      {/* 7 */}
      <Grid container spacing={2} padding="30px 30px 0px">
        {/* Column 1 */}
        <Grid item xs={4}>
          <Box align="left">
            <Typography
              variant="body1"
              sx={{
                color: "gray",
              }}
            >
              Incoterms
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
              }}
            >
              EXW
            </Typography>
          </Box>
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
              Net Weight
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
              Weight Unit
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
        <Grid item xs={4} display="flex">
          <Box>
            <Typography
              variant="body1"
              align="left"
              sx={{
                color: "blue",
                mb: "5px",
              }}
            >
              Ship To Address
            </Typography>
            <TextField variant="filled" fullWidth />
          </Box>
        </Grid>

        {/* Additional Dropdown in Column 3 */}
      </Grid>

      {/* 8 */}
      <Grid container spacing={2} padding="30px 30px 0px">
        {/* Column 1 */}
        <Grid item xs={4}>
          <Box align="left">
            <Typography
              variant="body1"
              sx={{
                color: "gray",
              }}
            >
              Incoterms 2
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "bold",
              }}
            >
              Delivery Duty Paid
            </Typography>
          </Box>
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
              IEC Code
            </Typography>
            <TextField variant="filled" fullWidth />
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
              Branch Code
            </Typography>
            <TextField variant="filled" fullWidth />
          </Box>
        </Grid>

        {/* Additional Dropdown in Column 3 */}
      </Grid>

      {/* 9 */}

      <Grid container spacing={2} padding="30px 30px 0px">
        {/* Column 1 */}
        <Grid item xs={4}>
          <Box align="left">
            <Typography
              variant="body1"
              sx={{
                color: "blue",
              }}
            >
              Branch Code Address
            </Typography>
            <TextField variant="filled" fullWidth />
          </Box>
        </Grid>

        {/* Column 2 */}
        <Grid item xs={4} display="flex" gap="10px">
          
        </Grid>

        {/* Column 3 */}
        <Grid item xs={4} display="flex" gap="10px">
        
        </Grid>

        {/* Additional Dropdown in Column 3 */}
      </Grid>
    </Box>
  );
};

export default CF1DropDown;
