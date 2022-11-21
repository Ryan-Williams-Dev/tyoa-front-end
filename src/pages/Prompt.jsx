import { Box } from "@mui/material";
import PageTitle from "../components/common/PageTitle";
import { motion } from "framer-motion";

function Prompt() {
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
        paddingTop: "1vh",
      }}
    >
      <PageTitle>Share your positivity</PageTitle>
    </Box>
  );
}

export default Prompt;
