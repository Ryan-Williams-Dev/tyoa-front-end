import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function BigMoodCard({ children, mood }) {
  return (
    <Box
      component={Link}
      to={`/descriptors/${mood}`}
      sx={{
        backgroundColor: "card.bg",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        flexGrow: 1,
        borderRadius: "20px",
      }}
    >
      <Typography variant="h1" color="primary">
        {children}
      </Typography>
    </Box>
  );
}

export default BigMoodCard;
