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
import FileUploadIcon from "@mui/icons-material/FileUpload";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
const CF6DropDown = () => {
  const cellStyleH = {
    border: "1px solid black",
    padding: "10px",
    textAlign: "left",
    fontWeight:"normal",
    fontSize:"14px"
  };
  const cellStyle = {
    border: "1px solid black",
    padding: "28px",
    textAlign: "left",
    
  };
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
          label="Search by Item Description Code"
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
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            startIcon={<FileUploadIcon />}
            sx={{
              borderRadius: "10px",
              width: "200px",
              textTransform: "capitalize",
              backgroundColor: "darkblue",
              "&:hover": {
                backgroundColor: "darkblue",
              },
            }}
          >
            Export To Excel
          </Button>
          <ZoomOutMapIcon
            sx={{
              color: "violet",
              ml: "10px",
            }}
          />
        </Box>
      </Box>
      <Divider
        sx={{
          mt: 1,
          boxShadow: 1,
        }}
      ></Divider>
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          marginTop:"10px"
          //   border: "1px solid black",
        }}
      >
        <thead>
          <tr>
            <th style={cellStyleH}>Item No</th>
            <th style={cellStyleH}>Material Code</th>
            <th style={cellStyleH}>Country Of Origin <span
              style={{
                color: "red",
              }}
            >
              *
            </span></th>
            <th style={cellStyleH}>Vendor Part No</th>
            <th style={cellStyleH}>Vendor Material Description  <span
              style={{
                color: "red",
              }}
            >
              *
            </span></th>
            <th style={cellStyleH}>Third Party Manufacture  <span
              style={{
                color: "red",
              }}
            >
              *
            </span></th>
            <th style={cellStyleH}>Unit Price</th>
            <th style={cellStyleH}>CTH Code <span
              style={{
                color: "red",
              }}
            >
              *
            </span></th>
            <th style={cellStyleH}>Quantity & UoM <span
              style={{
                color: "red",
              }}
            >
              *
            </span></th>
            <th style={cellStyleH}>UQC Quantity & UoM <span
              style={{
                color: "red",
              }}
            >
              *
            </span></th>
            <th style={cellStyleH}>Invoice No <span
              style={{
                color: "red",
              }}
            >
              *
            </span></th>
            <th style={cellStyleH}>Invoice Item No <span
              style={{
                color: "red",
              }}
            >
              *
            </span></th>
            <th style={cellStyleH}>Invoice Amount & Currency</th>
            <th style={cellStyleH}>Brand/ Mark Name</th>
            <th style={cellStyleH}>Model/Grade/Specification</th>
            <th style={cellStyleH}>Returnable <span
              style={{
                color: "red",
              }}
            >
              *
            </span></th>

            <th style={cellStyleH}>New <span
              style={{
                color: "red",
              }}
            >
              *
            </span></th>

            <th style={cellStyleH}> Base Material Of Construction (MOC)</th>
            <th style={cellStyleH}> Accessories For Item</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={cellStyle}> </td>
            <td style={cellStyle}> </td>
            <td style={cellStyle}> </td>
            <td style={cellStyle}> </td>
            <td style={cellStyle}> </td>
            <td style={cellStyle}> </td>
            <td style={cellStyle}> </td>
            <td style={cellStyle}> </td>
            <td style={cellStyle}> </td>
            <td style={cellStyle}> </td>
            <td style={cellStyle}> </td>
            <td style={cellStyle}> </td>
            <td style={cellStyle}> </td>
            <td style={cellStyle}> </td>
            <td style={cellStyle}> </td>
            <td style={cellStyle}> </td>
            <td style={cellStyle}> </td>
            <td style={cellStyle}> </td>
            <td style={cellStyle}> </td>


          </tr>
        </tbody>
      </table>
    </Box>
  );
};

export default CF6DropDown;
