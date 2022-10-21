import { Box, Button, TextField, Typography } from "@mui/material";
import { useRef } from "react";

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: "1",
        }}
      >
        <Typography variant="h3">Login</Typography>
      </Box>
      <Box
        component="form"
        onSubmit={onSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2em",
          margin: "2em",
          flexGrow: "1",
        }}
      >
        <TextField
          inputRef={emailRef}
          type="email"
          required
          label="Email"
        ></TextField>
        <TextField
          inputRef={passwordRef}
          type="password"
          required
          label="Password"
        ></TextField>
        <Button type="submit" variant="contained">
          Login
        </Button>
      </Box>
    </>
  );
}

export default Login;
