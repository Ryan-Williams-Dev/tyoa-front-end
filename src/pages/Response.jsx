import { Box } from "@mui/material";
import PageTitle from "../components/common/PageTitle";
import { motion } from "framer-motion";

function Response() {
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
      <PageTitle subText={"Here's some advice that may help you out"}>
        Sorry to hear that.
      </PageTitle>
    </Box>
  );
}

export default Response;
