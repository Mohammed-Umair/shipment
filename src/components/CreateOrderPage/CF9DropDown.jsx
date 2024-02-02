import React from "react";
import {
  Box,
  Divider,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";

import UploadIcon from '@mui/icons-material/Upload';
const CF9DropDown = () => {
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
          alignItems: "center",
          p: "30px 15px ",
        }}
      >
        <Box >
          <Typography
            variant="h6"
            align="left"
            sx={{
              fontWeight: "bold",
            }}
          >
            Upload Documents
          </Typography>

          <TextField
            sx={{
              mt: 2,
              width:"350px"
            }}
            variant="outlined"
            placeholder="Drop file here to Select"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <UploadIcon sx={{color:"violet"}}/>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box sx={{
            display:"flex",
            flexDirection:"column",
            marginLeft:"20px",
            gap:"10px"
        }}>
        <Typography
            variant="body1"
            align="left"
            sx={{
              fontWeight: "bold",
            }}
          >
            Specifications
          </Typography>
          <Typography
            variant="body1"
            align="left"
            sx={{

            }}
          >
            A) The Maximun Size resolutionis 720Dpi
          </Typography><Typography
            variant="body1"
            align="left"
            sx={{
             
            }}
          >
             B) File should be Less Than 25 MB
          </Typography>

        </Box>
      </Box>
    </Box>
  );
};

export default CF9DropDown;
