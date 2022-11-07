import { Box, CircularProgress } from "@mui/material";

function LoadingDiv() {
  return (
    <Box
      sx={{
        marginTop: "10vh",
        height: "80vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size={100} color="secondary" />
    </Box>
  );
}

export default LoadingDiv;
