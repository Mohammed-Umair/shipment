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
import SearchIcon from "@mui/icons-material/Search";

const CF5DropDown = () => {
  return (
    <Box
      sx={{
        maxHeight: "320px",
        overflowY: "auto",
      }}
    >
      <Divider
        sx={{
          mb: 1,
          boxShadow: 1,
        }}
      ></Divider>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 1,
        }}
      >
        <TextField
          variant="outlined"
          label="Search"
          sx={{
            width: "350px",
          }}
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
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
              width: "230px",
            }}
          >
            Download Excel Template
          </Button>
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              backgroundColor: "darkblue",
              width: "150px",
              "&:hover": {
                backgroundColor: "darkblue",
              },
            }}
          >
            Upload Excel
          </Button>
        </Box>
      </Box>
      <Divider
        sx={{
          mt: 1,
          boxShadow: 1,
        }}
      ></Divider>
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
            PO No
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
            UoM
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
            item
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
            Article 
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
            Article Description
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
            HSN Code 
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
      </Grid>

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
         PO Quantity
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
            Open Quantity
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
            Offered Quantity
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
            Pack Id
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
            Remark
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
      </Grid>
      <Divider
        sx={{
          mt: 1,
        }}
      ></Divider>
      <Divider
        sx={{
          mt: 1,
        }}
      ></Divider>

      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          gap: "10px",
          mr: "20px",
          mt: 2,
        }}
      >
        <Button
          variant="outlined"
          sx={{
            textTransform: "capitalize",
          }}
        >
          Cencel
        </Button>
        <Button
          variant="contained"
          sx={{
            textTransform: "capitalize",
            backgroundColor: "darkblue",
            "&:hover": {
              backgroundColor: "darkblue",
            },
          }}
        >
          Save as Draft
        </Button>
        <Button
          variant="contained"
          sx={{
            textTransform: "capitalize",
            backgroundColor: "darkblue",
            "&:hover": {
              backgroundColor: "darkblue",
            },
          }}
        >
          Review
        </Button>
      </Box>
    </Box>
  );
};

export default CF5DropDown;
