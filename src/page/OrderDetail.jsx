import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Accordion,
  AccordionDetails,
} from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionSummary from "@mui/material/AccordionSummary";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AttachmentIcon from "@mui/icons-material/Attachment";
import MessageIcon from "@mui/icons-material/Message";
import OD1DropDown from "../components/CreateOrderPage/OD1DropDown";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
const OrderDetail = () => {
  const breadcrumbs = [
    <Typography key="3" color="blue">
      Shipment
    </Typography>,
    <Typography key="3" color="blue">
      Purchase Order
    </Typography>,
  ];

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Box
        sx={{
          ml: 1,
          mt: 3,
        }}
      >
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Box>

      <Box
        sx={{
          m: 2,
        }}
      >
        <Grid container>
          <Grid item xs={9}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h6" color="blue">
                    PO 240455501
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "10px",
                      color: "blue",
                      marginRight: "50px",
                    }}
                  >
                    <MessageIcon />
                    <AttachmentIcon />
                    <Typography> Attachment (6)</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: "10px",
                    textAlign: "left",
                  }}
                >
                  <Box>
                    <Typography variant="body1" color="gray">
                      Order Date
                    </Typography>
                    <Typography variant="body1" color="gray">
                      &nbsp;
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" color="gray">
                      Buyer Name
                    </Typography>
                    <Typography variant="body1" color="Black">
                      Sidharan M
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body1" color="gray">
                      Buyer Email ID
                    </Typography>
                    <Typography variant="body1" color="Black">
                      MADHUSHARAN.SRIDHARAN@RIL.COM
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: "10px",
                    textAlign: "left",
                  }}
                >
                  <Box>
                    <Typography variant="body1" color="gray">
                      Parment Terms
                    </Typography>
                    <Typography variant="body1" color="black">
                      Cash Against Document - 100% Payment Shall
                      <br />
                      on receipt of correct invoice & supporting Socuments
                      through bank
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="body1" color="gray">
                      Status
                    </Typography>
                    <Typography variant="body1" color="Green">
                      Pending For Acknowledgement
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
              <CardContent
                sx={{
                  padding: "0px",
                  marginTop: "60px",
                }}
              >
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                  sx={{
                    border: "1px solid grey",
                    bgcolor: "blue",
                    color: "white",
                  }}
                >
                  <Box
                    sx={{
                      p: 1,
                    }}
                  >
                    <Typography variant="h5" textAlign="left">
                      {" "}
                      Items Details
                    </Typography>
                  </Box>
                </Accordion>

                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: "blue",
                          fontWeight: "bold",
                          fontSize: "30px",
                        }}
                      />
                    }
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "170px",
                        textAlign:"left"

                        // gridTemplateColumns:'33% 33% 33% 33%',
                        // gap:"50px "
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            color: "gray",
                          }}
                        >
                          Ship to Location
                        </Typography>
                        <Typography
                          sx={{
                            color: "black",
                          }}
                        >
                          Surat, Gujrat.
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            color: "gray",
                          }}
                        >
                          NO . of Items
                        </Typography>
                        <Typography
                          sx={{
                            color: "black",
                          }}
                        >
                          2
                        </Typography>
                      </Box>
                      <Box>
                        {/* empty div */}
                        {/* empty div */}
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            color: "gray",
                          }}
                        >
                          Total Amount
                        </Typography>
                        <Typography
                          sx={{
                            color: "black",
                          }}
                        >
                          110.00 USD
                        </Typography>
                      </Box>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <OD1DropDown/>
                  </AccordionDetails>
                </Accordion>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                width: "200px",
                ml: "30px",
                textAlign: "left",
              }}
            >
              <Typography variant="h6" color="blue">
                Po Details
                <br />
                item Details
                <br />
                Grand Total Amount
              </Typography>
              <hr />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "column",
                width: "200px",
                height: "120px",
                ml: "30px",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: "black",
                  "&:hover": {
                    bgcolor: "black",
                  },
                }}
                fullWidth
              >
                Accept
              </Button>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "red",
                  "&:hover": {
                    bgcolor: "red",
                  },
                }}
                fullWidth
              >
                Raise Query
              </Button>
              <Button variant="outlined" fullWidth sx={{}}>
                Back
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default OrderDetail;
