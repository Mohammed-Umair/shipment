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
import EditIcon from "@mui/icons-material/Edit";
import UploadIcon from "@mui/icons-material/Upload";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const CF3DropDown = () => {
  return (
    <Box
      sx={{
        maxHeight: "320px",
        overflowY: "auto",
      }}
    >
      <Divider></Divider>
      <Grid container spacing={2} padding="5px 5px">
        <Grid item xs={2}>
          <Typography
            variant="body1"
            align="left"
            sx={{
              color: "blue",
              mb: "5px",
            }}
          >
            Invoice Number{" "}
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

        <Grid item xs={2}>
          <Typography
            variant="body1"
            align="left"
            sx={{
              color: "blue",
              mb: "5px",
            }}
          >
            Invoice Date{" "}
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
        </Grid>

        <Grid item xs={2}>
          <Typography
            variant="body1"
            align="left"
            sx={{
              color: "blue",
              mb: "5px",
            }}
          >
            Invoice Value{" "}
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

        <Grid item xs={2}>
          <Typography
            variant="body1"
            align="left"
            sx={{
              color: "blue",
              mb: "5px",
            }}
          >
            Doc Currency{" "}
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

        <Grid item xs={2}>
          <Typography
            variant="body1"
            align="left"
            sx={{
              color: "blue",
              mb: "5px",
            }}
          >
            Miscellaneus Charges
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            sx={{
              width: "100%",
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <EditIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={2}></Grid>
      </Grid>

      <Box
        sx={{
          mt: 3,
          align: "left",
          display: "flex",
        }}
      >
        <Button
          variant="outlined"
          startIcon={<UploadIcon />}
          sx={{
            borderRadius: "10px",
            width: "200px",
            textTransform:"capitalize",

          }}
        >
          Upload Invoice
        </Button>
      </Box>
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
          Add Invoice
        </Button>
      </Box>
    </Box>
  );
};

export default CF3DropDown;
