import * as React from "react";
import { Box, Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import AccordionSummary from "@mui/material/AccordionSummary";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FileUploadIcon from "@mui/icons-material/FileUpload";

import CF1DropDown from "./CF1DropDown";
import CF2DropDown from "./CF2DropDown";
import CF3DropDown from "./CF3DropDown";
import CF4DropDown from "./CF4DropDown";
import CF5DropDown from "./CF5DropDown";
import CF6DropDown from "./CF6DropDown";
import CF7DropDown from "./CF7DropDown";
import CF9DropDown from "./CF9DropDown";
import CF10DropDown from "./CF10DropDown";
export default function CommonAccordian() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          border: "1px solid grey",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography
              sx={{
                ml: "5px",
                color: "grey",
              }}
            >
              Purchase Order
              <span
                style={{
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {" "}
                240254847
              </span>
            </Typography>

            <Typography
              sx={{
                ml: "25px",
                color: "grey",
              }}
            >
              ASN No.
              <span
                style={{
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                823626
              </span>
            </Typography>
            <Typography
              sx={{
                ml: "25px",
                color: "grey",
              }}
            >
              ASN Date.
              <span
                style={{
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Sep27,2023
              </span>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                marginRight: "10px",
                border: "1px solid black",
                padding: "5px 10px",

                borderRadius: "6px",
              }}
            >
              <select
                id="payment"
                name="payment"
                // value={Payment}
                // onChange={handleChange}
                style={{ border: "none", fontSize: "16px" }}
              >
                <option value="Payment">General Data </option>
                <option value="Option 1">Freight Details</option>
                <option value="Option 2">Invoivce Details </option>
                <option value="Option 3">Package Details </option>
                <option value="Option 4">Item Details </option>
                <option value="Option 5">
                  Item Details & Invoice Mapping{" "}
                </option>
                <option value="Option 6">Third Party Manufacture</option>
                <option value="Option 7">Trade Aggrement </option>
                <option value="Option 8">Supporting Document </option>
                <option value="Option 9">Comment </option>

                {/* Add more options as needed */}
              </select>
            </div>
            <UnfoldMoreIcon
              sx={{
                transform: "rotate(45deg)",
                color: "violet",
              }}
            />

            <Typography
              sx={{
                color: "violet",
                ml: "5px",
              }}
            >
              Expand All
            </Typography>
          </Box>
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
                color: "violet",
                fontWeight: "bold",
                fontSize: "30px",
              }}
            />
          }
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              textAlign: "left",
              color: "skyblue",
            }}
          >
            General Data
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          {/* <Typography sx={{ color: "text.secondary" }}>
            You are currently not an owner
          </Typography> */}
          <CheckCircleIcon
            sx={{
              color: "lightgray",
              fontSize: "20px",
            }}
          />
        </AccordionSummary>
        <AccordionDetails>
          <CF1DropDown />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: "violet",
                fontWeight: "bold",
                fontSize: "30px",
              }}
            />
          }
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              textAlign: "left",
              color: "skyblue",
            }}
          >
            Freight Details
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          {/* <Typography sx={{ color: "text.secondary" }}>
            You are currently not an owner
          </Typography> */}
          <CheckCircleIcon
            sx={{
              color: "lightgray",
              fontSize: "20px",
            }}
          />
        </AccordionSummary>
        <AccordionDetails>
          <CF2DropDown />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: "violet",
                fontWeight: "bold",
                fontSize: "30px",
              }}
            />
          }
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              textAlign: "left",
              color: "skyblue",
            }}
          >
            Invoice Details
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Typography sx={{ color: "grey", mr: "15px" }}>
            Overall Total Invoice ammount{" "}
            <span
              style={{
                color: "black",
                fontWeight: "bold",
              }}
            >
              &nbsp; 0
            </span>
          </Typography>
          <CheckCircleIcon
            sx={{
              color: "lightgray",
              fontSize: "20px",
            }}
          />
        </AccordionSummary>
        <AccordionDetails>
          <CF3DropDown />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: "violet",
                fontWeight: "bold",
                fontSize: "30px",
              }}
            />
          }
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              textAlign: "left",
              color: "skyblue",
            }}
          >
            Package Details
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          {/* <Typography sx={{ color: "text.secondary" }}>
            You are currently not an owner
          </Typography> */}
          <CheckCircleIcon
            sx={{
              color: "lightgray",
              fontSize: "20px",
            }}
          />
        </AccordionSummary>
        <AccordionDetails>
          <CF4DropDown />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: "violet",
                fontWeight: "bold",
                fontSize: "30px",
              }}
            />
          }
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              textAlign: "left",
              color: "skyblue",
            }}
          >
            Item Details
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Typography sx={{ color: "grey", mr: "15px" }}>
            Total Number of Material
            <span
              style={{
                color: "black",
                fontWeight: "bold",
              }}
            >
              &nbsp; 0
            </span>
          </Typography>
          <CheckCircleIcon
            sx={{
              color: "lightgray",
              fontSize: "20px",
            }}
          />
        </AccordionSummary>
        <AccordionDetails>
          <CF5DropDown />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: "violet",
                fontWeight: "bold",
                fontSize: "30px",
              }}
            />
          }
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              textAlign: "left",
              color: "skyblue",
            }}
          >
            Item Details & Invoice Mapping
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Typography sx={{ color: "grey", mr: "15px" }}>
            Total Number of Line Material
            <span
              style={{
                color: "black",
                fontWeight: "bold",
              }}
            >
              &nbsp; 0
            </span>
          </Typography>
          <Typography sx={{ color: "grey", mr: "15px" }}>
            Total Basic Value of Items
            <span
              style={{
                color: "black",
                fontWeight: "bold",
              }}
            >
              &nbsp; 0
            </span>
          </Typography>
          <CheckCircleIcon
            sx={{
              color: "lightgray",
              fontSize: "20px",
            }}
          />
        </AccordionSummary>
        <AccordionDetails>
          <CF6DropDown />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: "violet",
                fontWeight: "bold",
                fontSize: "30px",
              }}
            />
          }
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              textAlign: "left",
              color: "skyblue",
            }}
          >
            Third Party Manufacture
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Button
            variant="contained"
            startIcon={<FileUploadIcon />}
            sx={{
              width: "200px",
              textTransform: "capitalize",
              backgroundColor: "darkblue",
              mr: "10px",
              "&:hover": {
                backgroundColor: "darkblue",
              },
            }}
          >
            Export To Excel
          </Button>
          {/* <Typography sx={{ color: "text.secondary" }}>
            You are currently not an owner
          </Typography> */}
          <CheckCircleIcon
            sx={{
              color: "lightgray",
              fontSize: "20px",
            }}
          />
        </AccordionSummary>
        <AccordionDetails>
          <CF7DropDown />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel9"}
        onChange={handleChange("panel9")}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: "violet",
                fontWeight: "bold",
                fontSize: "30px",
              }}
            />
          }
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              textAlign: "left",
              color: "skyblue",
            }}
          >
            Trage Aggrement
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          {/* <Typography sx={{ color: "text.secondary" }}>
            You are currently not an owner
          </Typography> */}
          <CheckCircleIcon
            sx={{
              color: "lightgray",
              fontSize: "20px",
            }}
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel10"}
        onChange={handleChange("panel10")}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: "violet",
                fontWeight: "bold",
                fontSize: "30px",
              }}
            />
          }
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              textAlign: "left",
              color: "skyblue",
            }}
          >
            Supporting Document
          </Typography>

          <Typography sx={{ color: "text.secondary" }}>
            (Vendor Test Certificate ,Third Party inspection Report ,Packing
            List ,Country of origin Certificate)
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <CheckCircleIcon
            sx={{
              color: "lightgray",
              fontSize: "20px",
            }}
          />
        </AccordionSummary>
        <AccordionDetails>
          <CF9DropDown />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel11"}
        onChange={handleChange("panel11")}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: "violet",
                fontWeight: "bold",
                fontSize: "30px",
              }}
            />
          }
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              textAlign: "left",
              color: "skyblue",
            }}
          >
            Comment
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          {/* <Typography sx={{ color: "text.secondary" }}>
            You are currently not an owner
          </Typography> */}
          <CheckCircleIcon
            sx={{
              color: "lightgray",
              fontSize: "20px",
            }}
          />
        </AccordionSummary>
        <AccordionDetails>
          <CF10DropDown />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{}}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
          }}
        >
          <Box></Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                textTransform: "capitalize",
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
              }}
            >
              Save & Draft
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
              }}
            >
              Review
            </Button>
          </Box>
        </Box>
      </Accordion>
    </div>
  );
}
