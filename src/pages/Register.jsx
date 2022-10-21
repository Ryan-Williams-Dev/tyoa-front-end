import { Box, Button, TextField, Typography } from "@mui/material";
import { useRef } from "react";

function Register() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);

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
        <Typography variant="h3">Register</Typography>
        <Typography variant="body1">Please create an account</Typography>
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
          inputRef={nameRef}
          type="text"
          required
          label="Name"
        ></TextField>
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
        <TextField
          inputRef={passwordConfirmRef}
          type="password"
          required
          label="Confirm Password"
        ></TextField>
        <Button type="submit" variant="contained">
          Register
        </Button>
      </Box>
    </>
  );
}

export default Register;
