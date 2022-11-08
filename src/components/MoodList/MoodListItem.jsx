import { Box, Typography } from "@mui/material";
import { FaThumbsUp } from "react-icons/fa";

function MoodListItem({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "65px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "card.bg",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "65px",
          width: "65px",
          flexGrow: 1,
          borderRadius: "20px",
        }}
      >
        <Typography variant="h4" color="primary">
          <FaThumbsUp />
        </Typography>
      </Box>
      <Typography variant="body1">{children}</Typography>
    </Box>
  );
}

export default MoodListItem;
