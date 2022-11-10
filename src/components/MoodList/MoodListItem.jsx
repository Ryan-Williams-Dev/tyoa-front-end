import { Box, Typography } from "@mui/material";

function MoodListItem({ children, selected, clickHandler }) {
  return (
    <Box
      onClick={clickHandler}
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
