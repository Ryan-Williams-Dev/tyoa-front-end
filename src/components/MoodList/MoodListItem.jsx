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
        userSelect: "none",
      }}
    >
      <Box
        sx={{
          backgroundColor: isSelected ? "secondary.main" : "card.bg",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: {
            xs: "70px",
            sm: "100px",
            md: "130px",
          },
          width: {
            xs: "100px",
            sm: "143px",
            md: "185px",
          },
          flexGrow: 1,
          borderRadius: "20px",

          "@media (hover: hover)": {
            "&:hover": {
              opacity: "80%",
              cursor: "pointer",
            },
          },
          "&:active": {
            opacity: "80%",
          },
        }}
      >
        <Typography
          variant="body1"
          color={isSelected ? "white" : "primary"}
          sx={{
            fontSize: {
              sm: 20,
              md: 28,
            },
          }}
        >
          {children}
        </Typography>
      </Box>
    </Box>
  );
}

export default MoodListItem;
