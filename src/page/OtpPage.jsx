import React, { useEffect, useState } from "react";
import { Button, Paper, Typography, Grid, TextField, Box } from "@mui/material";
import OtpInput from "react-otp-input";
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

export const OtpPage = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [otpTimer, setOtpTimer] = useState(180);
  const [resendDisabled, setResendDisabled] = useState(true);
  useEffect(() => {
    const timerId = setInterval(() => {
      if (otpTimer > 0) {
        setOtpTimer((prev) => prev - 1);
      } else {
        // OTP timer expired, enable the resend button
        setResendDisabled(false);
        clearInterval(timerId);
      }
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [otpTimer]);

  const handleResendOTP = () => {
    // Reset the timer and disable the button
    setOtpTimer(180);
    setResendDisabled(true);
  };
  const handleLogin = () => {
    navigate("/homePage");
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
            Enter OTP Sent on your Mobile
          </Typography>
          <form>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                // margin: "0 20px",
              }}
            >
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderInput={(props, index) => (
                  <input
                    {...props}
                    style={{
                      width: "40px", 
                      height: "40px", 
                      marginRight: "20px", 
                      fontSize: "16px", 
                      textAlign: "center", 
                      border: "1px solid #ccc", 
                      borderRadius: "5px", 
                    }}
                  />
                )}
              />
            </Box>

            <Grid
              container
              justifyContent="space-between"
              style={{ marginTop: "10px" }}
            >
              <Grid item>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ fontWeight: "bold", color: "gray" }}
                >
                  {otpTimer > 0
                    ? ` ${Math.floor(otpTimer / 60)}:${otpTimer % 60}`
                    : "OTP Expired"}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "15px",
                    color: "black",
                    fontWeight: "bold",
                  }}
                  variant="text"
                  disabled={resendDisabled}
                  onClick={handleResendOTP}
                >
                  Resend OTP
                </Button>
              </Grid>
            </Grid>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                flexDirection: "column",
                mt: "10px",
              }}
            >
              <Typography
                variant="body1"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                Attempt 1/3
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ color: "gray" }}>
                Note:You will be locked out of the stytem for 30 minutes upon 3
                unsuccessful attempt
              </Typography>
            </Box>

            <Button
              variant="contained"
              fullWidth
              type="submit"
              sx={{
                mt: 2,
                // bgcolor: "rgb(127 0 255 / 33%)",
                color: "white",
                bgcolor: "#7F00FF",
                fontSize: "18px",
                borderRadius: "8px",
                textTransform: "capitalize",
                "&:hover": {
                  bgcolor: "#7F00FF",
                  color: "white",
                },
              }}
              onClick={handleLogin}
            >
              Continue
            </Button>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "column",
                mt: "10px",
              }}
            >
              <Button
                variant="text"
                sx={{
                  textTransform: "capitalize",
                  color: "violet",
                  fontSize: "16px",
                }}
              >
                {" "}
                Back
              </Button>
            </Box>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default OtpPage;
