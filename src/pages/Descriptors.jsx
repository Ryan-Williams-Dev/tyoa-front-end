import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useParams, Navigate } from "react-router-dom";
import { navHeightContext } from "../providers/NavHeightProvider";

function Descriptors() {
  const { navHeight } = useContext(navHeightContext);
  const { mood } = useParams();

  if (mood !== "good" && mood !== "bad") {
    console.log(mood);
    return <Navigate to="/" replace />;
  }
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
        paddingTop: "2em",
      }}
    >
      <Typography variant="h1">{mood}</Typography>
    </Box>
  );
}

export default Descriptors;
