import { Box, List, ListItem, ListItemAvatar } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import VerifiedIcon from "@mui/icons-material/Verified";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";

import { useNavigate } from "react-router";
const LeftSider = () => {
  const navigate = useNavigate();

  const handleNavigateToHomePage = () => {
    navigate("/home");
  };
  const handleNavigateApproval1 = () => {
    navigate("/paymentApproval1");
  };
  const handleNavigateApproval2 = () => {
    navigate("/approval2");
  };

  return (
    <Box
      sx={{
        height: "100%",
        width: "50px",
        backgroundColor: "white",
        boxShadow: 1,
        textAlign: "center",
      }}
    >
      <List sx={{ bgcolor: "background.paper" }}>
        <ListItem
          sx={{
            width: "50px",
            height: "40px",
            border: "1px solid gray",
            overflow: "hidden",
            boxShadow: (theme) =>
              `inset 6px 0 1px  ${theme.palette.primary.main}`,
            marginTop: "46px",
          }}
        >
          <ListItemAvatar>
            <TextSnippetIcon
              sx={{
                fontSize: "30px",
                color: "black",
              }}
              //   onClick={handleNavigateToHomePage}
            />
          </ListItemAvatar>
        </ListItem>
        <ListItem
          sx={{
            marginTop: "15px",
          }}
        >
          <ListItemAvatar>
            {" "}
            <AssignmentIcon
              sx={{
                fontSize: "30px",
                color: "black",
              }}
              //   onClick={handleNavigateApproval1}
            />
          </ListItemAvatar>
        </ListItem>
        <ListItem
          sx={{
            marginTop: "15px",
          }}
        >
          <ListItemAvatar>
            {" "}
            <AccountTreeIcon
              sx={{
                fontSize: "30px",
                color: "black",
                transform: "rotate(90deg)",
              }}
              //   onClick={handleNavigateApproval2}
            />
          </ListItemAvatar>
        </ListItem>
        <ListItem
          sx={{
            marginTop: "15px",
          }}
        >
          <ListItemAvatar>
            {" "}
            <LocalShippingRoundedIcon
              sx={{
                fontSize: "30px",
                color: "black",
              }}
              //   onClick={handleNavigateApproval2}
            />
          </ListItemAvatar>
        </ListItem>
      </List>
    </Box>
  );
};

export default LeftSider;
