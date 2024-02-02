import React from "react";
import {
  Box,
  Divider,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
const CF10DropDown = () => {
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
          mt: "20px",
        }}
      >
        <TextField
          multiline
          rows={4} // You can adjust the number of rows as needed
          variant="filled"
          fullWidth
        />
        
      </Box>
    </Box>
  );
};

export default CF10DropDown;
