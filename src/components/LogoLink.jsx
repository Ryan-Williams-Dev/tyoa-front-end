import { Box } from "@mui/material";
import { Link } from "react-router-dom";

function LogoLink({ extraStylingImg, extraStylingContainer }) {
  return (
    <div
      style={{
        ...extraStylingContainer,
      }}
    >
      <Link to="/">
        <Box
          component="img"
          src="/img/logo.svg"
          sx={{
            ...extraStylingImg,
          }}
        />
      </Link>
    </div>
  );
}

export default LogoLink;
