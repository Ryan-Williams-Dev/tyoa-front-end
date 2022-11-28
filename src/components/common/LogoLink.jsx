import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function LogoLink({ extraStylingImg, extraStylingContainer }) {
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate("/")}
      sx={{
        display: "flex",
        ...extraStylingContainer,
      }}
    >
      <Box
        component="img"
        src="/img/logo.svg"
        sx={{
          ...extraStylingImg,
        }}
      />
    </Box>
  );
}

export default LogoLink;
