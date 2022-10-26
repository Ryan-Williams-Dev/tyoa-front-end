import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import NewPromptForm from "../components/NewPromptForm";

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
        marginTop: "2em",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h3">Welcome {user && user.name} </Typography>
      <NewPromptForm />
    </Box>
  );
}

export default Dashboard;
