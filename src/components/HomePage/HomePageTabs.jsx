import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";

import Checkbox from "@mui/material/Checkbox";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import RefreshIcon from "@mui/icons-material/Refresh";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import EditIcon from '@mui/icons-material/Edit';

import { useNavigate } from "react-router";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function HomePageTabs() {
  const navigate = useNavigate();

  const [value, setValue] = React.useState(0);
  const [isCheckboxChecked, setCheckboxChecked] = React.useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleCheckboxChange = (event) => {
    setCheckboxChecked(event.target.checked);
  };

  const handleNavigateToOrderCreatePage = () => {
    navigate("/createOrderPage");
  };

  const handleDetailPage=()=>{
    navigate("/orderDetailPage")

  }
  
  return (
    <Box sx={{ width: "100%", mt: 1 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab
            label="Order"
            {...a11yProps(0)}
            sx={{
              textTransform: "capitalize",

              fontSize: "18px",
            }}
          />
          <Tab
            label="Shipment"
            {...a11yProps(1)}
            sx={{
              textTransform: "capitalize",
              fontSize: "18px",
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 2 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: "20px", textTransform: "capitalize" }}
          >
            New Orders(4)
          </Button>
          <Button
            variant="outlined"
            sx={{ ml: 1, borderRadius: "20px", textTransform: "capitalize" }}
          >
            Order in Process(8)
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <InputBase
            placeholder="Search by Order Number"
            endAdornment={<SearchIcon sx={{ color: "action.active", mr: 1 }} />}
            sx={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "8px",
              width: "350px",
            }}
            size="small"
          />

          <Box>
            <Button
              variant="text"
              startIcon={<RefreshIcon />}
              sx={{
                mr: "20px",
                textTransform: "capitalize",
              }}
            >
              Refresh
            </Button>
            <Button
              variant="outlined"
              startIcon={<FilterAltOutlinedIcon />}
              sx={{
                mr: "20px",
                textTransform: "capitalize",
                borderRadius: "10px",
              }}
            >
              Filter
            </Button>
            <Button
              variant="text"
              startIcon={<FileDownloadOutlinedIcon />}
              sx={{
                mr: "20px",
                textTransform: "capitalize",
              }}
            >
              Download
            </Button>
          </Box>
        </Box>
        {[1, 2, 3, 4, 5].map((tem) => {
          return (
            <Box
              sx={{
                display: "flex",
                mt: "20px",
              }}
            >
              <Checkbox {...label} onChange={handleCheckboxChange} />
              <Box
                component={Paper}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(6, 2fr)",
                  gridGap: "8px",
                  boxShadow: 1,
                  textAlign: "left",
                  padding: "20px 10px",
                }}
              >
                {/* Row 1 */}
                <div>Order No.</div>
                <div>Date</div>
                <div>Revision </div>
                <div>Ordering Company Name</div>
                <div>Order Amount</div>
                <div>No.of Item</div>

                {/* Row 2 */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    color: "blue",
                  }}
                >
                  240455389 <VisibilityOutlinedIcon onClick={handleDetailPage} />
                </div>
                <div>07/12/2023</div>
                <div>0</div>
                <div>Reliance Industries Ltd </div>
                <div
                  style={{
                    color: "blue",
                  }}
                >
                  10.00 USD{" "}
                </div>
                <div
                  style={{
                    textAlign: "right",
                  }}
                >
                  1 ...
                </div>
              </Box>
            </Box>
          );
        })}
        {isCheckboxChecked && (
          <Button
            variant="contained"
            color="primary"
            sx={{
              position: "absolute",
              top: 75,
              right: 20,
              borderRadius: "10px",
              textTransform: "capitalize",
            }}
            onClick={handleNavigateToOrderCreatePage}
          >
            Create
          </Button>
        )}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 2 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: "20px", textTransform: "capitalize" }}
          >
            Shipment In Process(8)
          </Button>
         
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <InputBase
            placeholder="Search by Order Number,ship ID SCN Number"
            endAdornment={<SearchIcon sx={{ color: "action.active", mr: 1 }} />}
            sx={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "8px",
              width: "450px",
            }}
            size="small"
          />

          <Box>
            <Button
              variant="text"
              startIcon={<RefreshIcon />}
              sx={{
                mr: "20px",
                textTransform: "capitalize",
              }}
            >
              Refresh
            </Button>
            <Button
              variant="outlined"
              startIcon={<FilterAltOutlinedIcon />}
              sx={{
                mr: "20px",
                textTransform: "capitalize",
                borderRadius: "10px",
              }}
            >
              Filter
            </Button>
            <Button
              variant="text"
              startIcon={<FileDownloadOutlinedIcon />}
              sx={{
                mr: "20px",
                textTransform: "capitalize",
              }}
            >
              Download
            </Button>
          </Box>
        </Box>
        {[1, 2, 3, 4, 5].map((tem) => {
          return (
            <Box
              sx={{
                display: "flex",
                mt: "20px",
              }}
            >
              {/* <Checkbox {...label} onChange={handleCheckboxChange} /> */}
              <Box
                component={Paper}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(8, 2fr)",
                  gridGap: "8px",
                  boxShadow: 1,
                  textAlign: "left",
                  padding: "20px 10px",
                }}
              >
                {/* Row 1 */}
                <div>As No.</div>
                <div>Date</div>
                <div>Order No </div>
                <div>Ship Form</div>
                <div>Ship to</div>
                <div>Status</div>
                <div>Shipment Amount</div>
                <div>No.of Item</div>



                {/* Row 2 */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    color: "blue",
                  }}
                >
                  823671 
                </div>
                <div>02/11/2023</div>
                <div>240454844</div>
                <div>Tokyo, Japan</div>
                <div>Surat, Gujarat</div>

                <div
                  style={{
                    color: "blue",
                  }}
                >
                  Saved as Draft
                </div>
                <div
                  style={{
                    color: "blue",
                  }}
                >
                 0.00USD
                </div>
                <div
                  style={{
                    textAlign: "right",
                  }}
                >
                 <EditIcon/>
                </div>
              </Box>
            </Box>
          );
        })}
        {isCheckboxChecked && (
          <Button
            variant="contained"
            color="primary"
            sx={{
              position: "absolute",
              top: 75,
              right: 20,
              borderRadius: "10px",
              textTransform: "capitalize",
            }}
            onClick={handleNavigateToOrderCreatePage}
          >
            Create
          </Button>
        )}
      </CustomTabPanel>
    </Box>
  );
}
