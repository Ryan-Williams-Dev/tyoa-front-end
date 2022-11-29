import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function BigMoodCard({ children, mood }) {
  return (
    <Button
      variant="contained"
      component={Link}
      to={`/${mood}`}
      sx={{
        backgroundColor: "card.bg",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        flexGrow: 1,
        borderRadius: "20px",
        "@media not (hover: hover)": {
          "&:hover": {
            backgroundColor: "card.bg",
            color: "card.bg",
          },
          "&:active": {
            opacity: "0.7",
          },
        },
      }}
    >
      <Typography
        variant="h1"
        color="primary"
        sx={{
          "@media (hover: hover)": {
            "&:hover": {
              color: "card.bg",
            },
          },
        }}
      >
        {children}
      </Typography>
    </Button>
  );
}
export default BigMoodCard;
