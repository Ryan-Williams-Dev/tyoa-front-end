import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";

function MoodListItem({ children }) {
  let [selected, setSelected] = useState(false);

  return (
    <Box
      onClick={() => setSelected(!selected)}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: selected ? "secondary.main" : "card.bg",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70px",
          width: "100px",
          flexGrow: 1,
          borderRadius: "20px",
        }}
      >
        <Typography variant="body1" color={selected ? "white" : "primary"}>
          {children}
        </Typography>
      </Box>
    </Box>
  );
}

export default MoodListItem;
