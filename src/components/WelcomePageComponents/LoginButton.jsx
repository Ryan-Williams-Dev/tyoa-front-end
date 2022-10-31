import { useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function LoginButton() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "10vh",
      }}
    >
      <Button
        variant="contained"
        color="secondary"
        component={Link}
        to="/login"
        sx={{
          borderRadius: "10px",
          marginBottom: "1em",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            paddingX: "2.5em",
            paddingY: "0.3em",
          }}
        >
          Login With Email
        </Typography>
      </Button>
      <Box>
        <Typography component="span" variant="h5" color="text.primary">
          Don't have an account?{" "}
          <Typography
            component={Link}
            variant="h5"
            to="/register"
            sx={{
              fontWeight: "bold",
              textDecoration: "none",
              color: "white",
            }}
          >
            Sign Up
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}

export default LoginButton;
