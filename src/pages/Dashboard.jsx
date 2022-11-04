import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import StyledFormContainer from "../components/FormComponents/StyledFormContainer";

function Dashboard() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/welcome");
    }
  }, [user, navigate]);

  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "85vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h3" fontFamily="Alegreya">
          Welcome back, {user && user.name}!{" "}
        </Typography>
        <Typography
          variant="h4"
          sx={{
            opacity: 0.7,
          }}
        >
          How're you feeling today?
        </Typography>
      </Box>
    </Box>
  );
}

export default Dashboard;
