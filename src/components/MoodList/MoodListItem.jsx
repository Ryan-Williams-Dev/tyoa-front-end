import { Box, Typography } from "@mui/material";

function MoodListItem({
  children,
  isSelected,
  selectMoodHandler,
  deselectMoodHandler,
}) {
  return (
    <Box
      onClick={isSelected ? deselectMoodHandler : selectMoodHandler}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: isSelected ? "secondary.main" : "card.bg",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70px",
          width: "100px",
          flexGrow: 1,
          borderRadius: "20px",

          "@media (hover: hover)": {
            "&:hover": {
              opacity: "80%",
            },
          },
          "&:active": {
            opacity: "80%",
          },
        }}
      >
        <Typography
          sx={{ userSelect: "none" }}
          variant="body1"
          color={isSelected ? "white" : "primary"}
        >
          {children}
        </Typography>
      </Box>
    </Box>
  );
}

export default MoodListItem;
