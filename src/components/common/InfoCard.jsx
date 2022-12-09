import { Typography } from "@mui/material";

function InfoCard({ children }) {
  return (
    <Typography
      variant="h5"
      sx={{
        backgroundColor: "primary.dark",
        borderRadius: "10px",
        padding: "1rem",
        verticalAlign: "center",
      }}
    >
      {children}
    </Typography>
  );
}

export default InfoCard;
