import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { navHeightContext } from "../providers/NavHeightProvider";
import MoodList from "../components/MoodList/MoodList";

function Descriptors() {
  const { navHeight } = useContext(navHeightContext);
  const { mood } = useParams();

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: `calc(100vh - ${navHeight}px)`,
        paddingTop: "2em",
      }}
    >
      <Typography variant="h1">{mood}</Typography>
      <MoodList mood={mood} />
    </Box>
  );
}

export default Descriptors;
