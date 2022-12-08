import { Box, CircularProgress, Typography } from "@mui/material";

function LoadingDiv({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "10vh",
        height: "80vh",
        width: "100vw",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <CircularProgress size={100} color="secondary" />
      {children && (
        <Typography
          variant="h4"
          sx={{
            width: "80vw",
          }}
        >
          {children}
        </Typography>
      )}
      {!children && (
        <Typography
          variant="h4"
          sx={{
            width: "80vw",
          }}
        >
          The back-end of this application is running on an eco heroku plan,
          thus may be a little slow to start up due to sleeping. If this loading
          screen takes a while don't worry.
          <br /> Thank you for your patience.
        </Typography>
      )}
    </Box>
  );
}

export default LoadingDiv;
