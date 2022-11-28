import { Box } from "@mui/material";
import PageTitle from "../components/common/PageTitle";
import { motion } from "framer-motion";

function About() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "min(85vw, 1488px)",
        }}
      >
        <PageTitle>About</PageTitle>
      </Box>
    </Box>
  );
}

export default About;
