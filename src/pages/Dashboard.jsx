import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import BigMoodCard from "../components/BigMoodCard";
import { navHeightContext } from "../providers/NavHeightProvider";

function Dashboard() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { navHeight } = useContext(navHeightContext);

  useEffect(() => {
    if (!user) {
      navigate("/welcome");
    }
  }, [user, navigate]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: `calc(100vh - ${navHeight}px)`,
      }}
    >
      <Box
        sx={{
          width: "100vw",
          marginTop: "2em",
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          // borderStyle: "solid",
          // borderWidth: "1px",
          // borderColor: "white",  /* These are to visualise the border */
        }}
      >
        <Box
          sx={{
            width: "85vw",
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            marginY: "0.5em",
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
        <Box
          sx={{
            height: "100%",
            width: "90vw",
            alignSelf: "center",
            display: "flex",
            flexDirection: "column",
            gap: "1em",
            marginY: "0.5em",
          }}
        >
          <BigMoodCard>Wonderful!</BigMoodCard>
          <BigMoodCard>Just Awful!</BigMoodCard>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
