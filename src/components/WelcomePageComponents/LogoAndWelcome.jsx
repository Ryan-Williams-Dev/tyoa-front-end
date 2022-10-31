import { Box, Typography } from "@mui/material";

function LogoAndWelcome() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flexGrow: "1",
      }}
    >
      <Box
        component="img"
        src="/img/logo.svg"
        sx={{
          maxHeight: "30vh",
          marginBottom: "2em",
        }}
      />
      <Typography
        variant="h2"
        color="text.primary"
        sx={{
          textAlign: "center",
        }}
      >
        WELCOME
      </Typography>
      <Typography
        variant="h4"
        color="text.primary"
        sx={{
          textAlign: "center",
        }}
      >
        Unlock a more balanced self.
        <br />
        Take your own advice.
      </Typography>
    </Box>
  );
}

export default LogoAndWelcome;
