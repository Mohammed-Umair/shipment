import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Divider, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const CF2DropDown = () => {
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
          <Box align="left" display="flex" gap="10px">
            <Box sx={{}}>
              <Typography
                variant="body1"
                sx={{
                  color: "gray",
                }}
              >
                Mode Of Transport
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "bold",
                  mt: "20px",
                }}
              >
                Air
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body1"
                sx={{
                  color: "gray",
                }}
              >
                Port Of Discharge
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "bold",
                  mt: "20px",
                }}
              >
                NHAVA SHEVA,JNPT
              </Typography>
            </Box>
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
            Mean Of Transport{" "}
            <span
              style={{
                color: "red",
              }}
            >
              *
            </span>
          </Typography>
          <Select label="City" fullWidth variant="filled">
            <MenuItem value="city1">City 1</MenuItem>
            <MenuItem value="city2">City 2</MenuItem>
            <MenuItem value="city3">City 3</MenuItem>
          </Select>
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
            Shipping Type{" "}
            <span
              style={{
                color: "red",
              }}
            >
              *
            </span>
          </Typography>
          <Select label="City" fullWidth variant="filled">
            <MenuItem value="city1">City 1</MenuItem>
            <MenuItem value="city2">City 2</MenuItem>
            <MenuItem value="city3">City 3</MenuItem>
          </Select>
        </Grid>

        {/* Additional Dropdown in Column 3 */}
      </Grid>

      {/* 2 */}
      <Grid container spacing={2} padding="30px 30px 0px">
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
            Master Airways Bill No/Bill OF Landing
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
            Master Airways Bill No/Bill OF Landing Date
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
              Port Of Origin{" "}
              <span
                style={{
                  color: "red",
                }}
              >
                *
              </span>
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
              Port Of Destination{" "}
              <span
                style={{
                  color: "red",
                }}
              >
                *
              </span>
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

      <Grid container spacing={2} padding="30px 30px 0px">
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
            House Airways Bill No/Bill OF Landing
          </Typography>

          <TextField variant="filled" fullWidth />
          <span
            style={{
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Please Enter House Airways Bill No/Bill OF Landing
          </span>
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
            House Airways Bill No/Bill OF Landing Date
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
              Date Of Departure{" "}
              <span
                style={{
                  color: "red",
                }}
              >
                *
              </span>
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
              Expecte Date Of Arrival
              <span
                style={{
                  color: "red",
                }}
              >
                *
              </span>
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
          </Box>
        </Grid>

        {/* Additional Dropdown in Column 3 */}
      </Grid>

      {/* 4 */}

      <Grid container spacing={2} padding="30px 30px 0px">
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
            Flight/Vessel Number{" "}
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
              Express B/L
              <span
                style={{
                  color: "red",
                }}
              >
                *
              </span>
            </Typography>
            <Select label="City" fullWidth variant="filled">
              <MenuItem value="city1">City 1</MenuItem>
              <MenuItem value="city2">City 2</MenuItem>
              <MenuItem value="city3">City 3</MenuItem>
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
              Freight Amount
            </Typography>
            <TextField
              variant="filled"
              fullWidth
              sx={{
                width: "100px",
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
              &nbsp;
            </Typography>
            <Select
              label="City"
              fullWidth
              variant="filled"
              sx={{
                width: "100px",
              }}
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
              Destination Free Days{" "}
              <span
                style={{
                  color: "red",
                }}
              >
                *
              </span>
            </Typography>
            <TextField
              variant="filled"
              fullWidth
              sx={{
                width: "100%",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <Checkbox {...label} />
            <Typography
              variant="body1"
              align="left"
              sx={{
                color: "blue",
                mb: "5px",
              }}
            >
              Banker Release order
              <span
                style={{
                  color: "red",
                }}
              >
                *
              </span>
            </Typography>
          </Box>
        </Grid>

      </Grid>
        {/* Additional Dropdown in Column 3 */}
    </Box>
  );
};

export default CF2DropDown;
