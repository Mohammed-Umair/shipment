import React from "react";
import {
  Button,
  Paper,
  Typography,
  Grid,
  TextField,
  Box,
  FormControl,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormLabel,
} from "@mui/material";

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

export const OtpMethod = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/otpverify");
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
            Select Agent and OTP Delivery method
          </Typography>
          <form>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="mobile"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Email"
                    control={<Radio sx={{ color: "violet" }} />}
                    label={
                      <span style={{ fontWeight: "bold" }}>
                        Email: Amo******ma@ril.com
                      </span>
                    }
                    sx={{
                      "& .MuiRadio-colorSecondary.Mui-checked": {
                        color: "violet",
                      },
                    }}
                  />
                  <FormControlLabel
                    value="mobile"
                    control={<Radio sx={{ color: "violet" }} />}
                    label={
                      <span style={{ fontWeight: "bold" }}>
                        Mobile: +91 9765******3
                      </span>
                    }
                    sx={{
                      "& .MuiRadio-colorSecondary.Mui-checked": {
                        color: "violet",
                      },
                    }}
                  />
                  <FormControlLabel
                    value="Both"
                    control={<Radio sx={{ color: "violet" }} />}
                    label={
                      <Box
                        sx={{
                          textAlign: "start",
                        }}
                      >
                        <span style={{ fontWeight: "bold" }}>
                          Both Email: Amo******ma@ril.com
                        </span>
                        <br />

                        <span style={{ fontWeight: "bold" }}>
                          Mobile: +91 9765******3
                        </span>
                      </Box>
                    }
                    sx={{
                      "& .MuiRadio-colorSecondary.Mui-checked": {
                        color: "violet",
                      },
                    }}
                  />
                </RadioGroup>
              </FormControl>
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
                variant="outlined"
                fullWidth
                sx={{
                  textTransform: "capitalize",
                  color: "violet",
                  fontSize: "16px",
                }}
              >
                {" "}
                My Details Don't Match
              </Button>
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

export default OtpMethod;
