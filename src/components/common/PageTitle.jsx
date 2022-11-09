import { Box, Typography } from "@mui/material";

function PageTitle({ children, subText }) {
  return (
    <Box
      sx={{
        width: "85vw",
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        marginY: "0.5em",
      }}
    >
      <Typography variant="h3" fontFamily="Alegreya">
        {children}
      </Typography>
      <Typography
        variant="h4"
        sx={{
          opacity: 0.7,
        }}
      >
        {subText}
      </Typography>
    </Box>
  );
}

export default PageTitle;
