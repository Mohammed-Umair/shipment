import React from "react";
import {
  Box,
  Divider,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CF4DropDown = () => {
  return (
    <Box
      sx={{
        maxHeight: "210px",
        overflowY: "auto",
      }}
    >
      <Divider></Divider>
      <Grid container spacing={2} padding="5px 5px">
        <Grid item xs={1.5}>
          <Typography
            variant="body1"
            align="left"
            sx={{
              mb: "10px",
              color:"blue"

            }}
          >
            Pack Code
          </Typography>

          <TextField variant="filled" fullWidth  size="small"/>
          {/* <Typography
            variant="body1"
            align="left"
            sx={{
              mb: "5px",
            }}
          >
            Sized/Dimension
          </Typography> */}
        </Grid>

        <Grid item xs={1.5}>
          <Typography
            variant="body1"
            align="left"
            sx={{
              mb: "10px",
              color:"blue"
            }}
          >
            Refrence No
          </Typography>
          <TextField variant="filled" fullWidth  size="small"/>
        </Grid>

        <Grid item xs={1.5}>
          <Typography
            variant="body1"
            align="left"
            sx={{
              mb: "10px",
              color:"blue"
            }}
          >
            Gross Weight
          </Typography>
          <TextField variant="filled" fullWidth  size="small"/>
        </Grid>

        

        <Grid item xs={1.5}>
          <Typography
            variant="body1"
            align="left"
            sx={{
              mb: "10px",
              color:"blue"
            }}
          >
           Gross Unit
          </Typography>
          <TextField variant="filled" fullWidth  size="small"/>
        </Grid>

        <Grid item xs={1.5}>
          <Typography
            variant="body1"
            align="left"
            sx={{
              mb: "10px",
              color:"blue"
            }}
          >
            Net Weight
          </Typography>
          <TextField variant="filled" fullWidth  size="small"/>
        </Grid>

        <Grid item xs={0}></Grid>

        <Grid item xs={4}>
          <Box
            sx={{
              display: "flex",
              gap: "5px",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                textTransform: "capitalize",
                width:"230px",
              }}
            >
              Download Excel Template
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                backgroundColor: "darkblue",
                width:"150px"
,
                "&:hover": {
                  backgroundColor: "darkblue",
                },
              }}
            >
              Upload Excel
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} padding="5px 5px">
        <Grid item xs={1.5}>
          <Typography
            variant="body1"
            align="left"
            sx={{
              mb: "10px",
              color:"blue"

            }}
          >
           Volume
          </Typography>

          <TextField variant="filled" fullWidth  size="small"/>
          {/* <Typography
            variant="body1"
            align="left"
            sx={{
              mb: "5px",
            }}
          >
            Sized/Dimension
          </Typography> */}
        </Grid>

        <Grid item xs={1.5}>
          <Typography
            variant="body1"
            align="left"
            sx={{
              mb: "10px",
              color:"blue"
            }}
          >
           Unit
          </Typography>
          <TextField variant="filled" fullWidth  size="small"/>
        </Grid>

        <Grid item xs={1.5}>
          <Typography
            variant="body1"
            align="left"
            sx={{
              mb: "10px",
              color:"blue"
            }}
          >
           Sized/Dimension
          </Typography>
          <TextField variant="filled" fullWidth  size="small"/>
        </Grid>

        

        <Grid item xs={1.5}>
          <Typography
            variant="body1"
            align="left"
            sx={{
              mb: "10px",
              color:"blue"
            }}
          >
           Pack Type
          </Typography>
          <TextField variant="filled" fullWidth  size="small"/>
        </Grid>

        <Grid item xs={1.5}>
          <Typography
            variant="body1"
            align="left"
            sx={{
              mb: "10px",
              color:"blue"
            }}
          >
            Stackable
          </Typography>
          <TextField variant="filled" fullWidth  size="small"/>
        </Grid>

        <Grid item xs={0}></Grid>

        <Grid item xs={4}>
         
        </Grid>
      </Grid>

      <Divider
        sx={{
          mt: 1,
          color: "black",
        }}
      />
      <Box
        sx={{
          align: "left",
          display: "flex",
        }}
      >
        <Button
          variant="contained"
          startIcon={<AddCircleOutlineIcon />}
          sx={{
            borderRadius: "10px",
            mt: "10px",
            backgroundColor: "darkblue",
            textTransform:"capitalize",
            width: "200px",
            "&:hover": {
              backgroundColor: "darkblue",
            },
          }}
        >
          Add Package
        </Button>
      </Box>
    </Box>
  );
};

export default CF4DropDown;
