import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function LogoLink({ extraStylingImg, extraStylingContainer }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/")}
      style={{
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
    </div>
  );
}

export default LogoLink;
