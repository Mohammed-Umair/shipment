import React from "react";
import { Button, Paper, Typography, Grid, TextField, Box } from "@mui/material";

import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import UpdateIcon from "@mui/icons-material/Update";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import background from "../assets/background.jpeg";

import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const backgroundImageStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/otpMethod");
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{
        height: "100vh",

        ...backgroundImageStyle,
      }}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper
          elevation={3}
          style={{
            padding: "20px",
            marginLeft: "20px",
            position: "relative",
            left: "280px",
          }}
        >
          <Typography
            variant="body1"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",

              color: "violet",
            }}
          >
            Welcome
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ fontWeight: "bold", color: "violet" }}
          >
            Login with your Supplier ID
          </Typography>
          <form>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                // margin: "0 20px",
              }}
            >
              <TextField fullWidth variant="outlined" label="Supplier ID" />
            </Box>

            <Grid
              container
              justifyContent="space-between"
              style={{ marginTop: "10px" }}
            >
              <Grid item>
                <Checkbox {...label} />
                <Button
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "15px",
                    color: "black",
                    fontWeight: "bold",
                  }}
                  variant="text"

                  // onClick={handleNavigateToRegister}
                >
                  Remember Me
                </Button>
              </Grid>
              <Grid item>
                <Button
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "15px",
                    color: "violet",
                    fontWeight: "bold",
                  }}
                  variant="text"

                  // onClick={handleNavigateToForget}
                >
                  Trouble signing in ?
                </Button>
              </Grid>
            </Grid>

            <Button
              variant="contained"
              fullWidth
              type="submit"
              sx={{
                mt: 2,
                bgcolor: "rgb(127 0 255 / 33%)",
                color: "black",
                borderRadius: "8px",
                "&:hover": {
                  bgcolor: "#7F00FF",
                  color: "white",
                },
              }}
              onClick={handleLogin}
            >
              Login
            </Button>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "column",
                mt:"10px"
              }}
            >
              <Typography
                variant="body1"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                How to login?{" "}
                <span
                  style={{
                    color: "violet",
                  }}
                >
                  Click Here
                </span>
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                Not Registered with us?
                <span
                  style={{
                    color: "violet",
                  }}
                >
                  Sign Up
                </span>
              </Typography>
            </Box>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
