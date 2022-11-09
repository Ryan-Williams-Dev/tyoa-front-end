import { useContext } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { navHeightContext } from "../providers/NavHeightProvider";
import MoodList from "../components/MoodList/MoodList";
import PageTitle from "../components/common/PageTitle";
import PrimaryButton from "../components/common/PrimaryButton";

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
        paddingTop: "1vh",
      }}
    >
      <PageTitle subText={"Select all that apply."}>Tell me more...</PageTitle>
      <MoodList mood={mood} />
      <PrimaryButton undertext="Let us know when your ready">
        Submit
      </PrimaryButton>
    </Box>
  );
}

export default Descriptors;
