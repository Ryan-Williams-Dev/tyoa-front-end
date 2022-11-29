import { Box, Typography } from "@mui/material";

function PageTitle({ children, subText, extraStylesContainer }) {
  return (
    <Box
      sx={{
        width: "min(90vw, 1488px)",
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        marginY: "0.5em",
        pl: "10px",
        ...extraStylesContainer,
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
