import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

function Welcome() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <Box
      sx={{
        margin: "0",
        minHeight: "100vh",
        width: "100vw",
        backgroundImage: "url(/img/welcome_bg.jpg)",
        backgroundSize: "auto 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography variant="h2">Welcome</Typography>
    </Box>
  );
}

export default Welcome;
