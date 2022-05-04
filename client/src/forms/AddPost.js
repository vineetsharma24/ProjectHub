import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import { COLORS } from "../Values/Colors";
import Footer from "../footer/Footer";
import { InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import loginImage from "../image/loginImage.svg";
import { styled } from "@mui/material/styles";

export default function AddPost() {
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: COLORS.primary2,
    },
    "& 	.MuiInputLabel-root": {
      color: COLORS.white,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: COLORS.primary2,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: COLORS.white,
      },
      "&:hover fieldset": {
        borderColor: COLORS.primary2,
      },
      "&.Mui-focused fieldset": {
        borderColor: COLORS.primary2,
      },
    },
  });

  return (
    <div
      style={{
        background: COLORS.primary1,
      }}
    >
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <div
          style={{
            paddingTop: "10vh",
          }}
        >
          <h1
            style={{
              fontSize: "40px",
              color: COLORS.white,
              borderBottom: "5px solid",
              borderColor: COLORS.primary2,
              width: "300px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Create Project
          </h1>
        </div>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Container sx={{ padding: "0", margin: "0" }} maxWidth="lg">
            <Grid
              sx={{ alignItems: "center", justifyContent: "center" }}
              item
              xs={12}
            >
              <Avatar
                variant="square"
                sx={{
                  m: 1,
                  bgcolor: COLORS.primary2,
                  height: "20vh",
                  width: "95%",

                  borderRadius: "5px",
                }}
              >
                <LockOutlinedIcon />
              </Avatar>
            </Grid>
          </Container>

          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CssTextField
                  name="projectName"
                  required
                  fullWidth
                  id="projectName"
                  label="Project Name"
                  autoFocus
                  InputProps={{
                    style: {
                      color: COLORS.white,
                      outlineColor: "white",
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <CssTextField
                  required
                  fullWidth
                  id="projectDescription"
                  label="Project Description"
                  name="projectDescription"
                  multiline
                  rows={6}
                  InputProps={{
                    style: {
                      color: COLORS.white,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  name="githubLink"
                  required
                  fullWidth
                  id="githubLink"
                  label="Github Link"
                  autoFocus
                  InputProps={{
                    style: {
                      color: COLORS.white,
                      outlineColor: "white",
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: COLORS.primary2 }}
            >
              Publish
            </Button>
          </Box>
        </Box>
      </Container>
      <div
        style={{
          marginTop: "50px",
          position: "relative",
          bottom: "0",
          left: "0",
          right: "0",
        }}
      >
        <Footer />
      </div>
    </div>
  );
}
