import { Box, Typography } from "@mui/material";

function Register() {
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
      <Box component="form"></Box>
    </>
  );
}

export default Register;
