import { Box, Button, TextField, Typography } from "@mui/material";

function Register() {
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
        <TextField type="text" required label="Name"></TextField>
        <TextField type="email" required label="Email"></TextField>
        <TextField type="password" required label="Password"></TextField>
        <TextField
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
