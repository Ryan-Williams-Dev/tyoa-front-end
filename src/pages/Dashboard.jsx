import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import BigMoodCard from "../components/BigMoodCard";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { motion } from "framer-motion";
import PageTitle from "../components/common/PageTitle";
import { resetSelectedMoods } from "../features/moods/moodSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/welcome");
    }
    dispatch(resetSelectedMoods());
  }, [user, navigate, dispatch]);

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
        minHeight: "85vh",
      }}
    >
      <Box
        sx={{
          width: "100vw",
          minHeight: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          pt: "1vh",
        }}
      >
        <PageTitle subText="How're you feeling today?">
          Welcome back, {user && userFirstName}!{" "}
        </PageTitle>

        <Box
          sx={{
            height: "100%",
            width: "min(90vw, 1800px)",
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
