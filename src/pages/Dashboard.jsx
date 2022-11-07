import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import BigMoodCard from "../components/BigMoodCard";
import { navHeightContext } from "../providers/NavHeightProvider";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { motion } from "framer-motion";

function Dashboard() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { navHeight } = useContext(navHeightContext);

  useEffect(() => {
    if (!user) {
      navigate("/welcome");
    }
  }, [user, navigate]);

  const userFirstName = user && user.name.split(" ")[0];

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
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
            Welcome back, {user && userFirstName}!{" "}
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
            gap: "1.5em",
            marginY: "1em",
            "@media (orientation: landscape)": {
              flexDirection: "row",
            },
          }}
        >
          <BigMoodCard mood="good">
            <FaThumbsUp />
          </BigMoodCard>
          <BigMoodCard mood="bad">
            <FaThumbsDown />
          </BigMoodCard>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
