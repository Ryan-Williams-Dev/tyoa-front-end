import { Box } from "@mui/material";
import PageTitle from "../components/common/PageTitle";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import promptMaker from "../components/Prompt/utils/promptMaker";

function Prompt() {
  const { moods, selectedMoods } = useSelector((state) => state.moods);
  const prompt = promptMaker(moods, selectedMoods);

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
      <PageTitle>{prompt}</PageTitle>
    </Box>
  );
}

export default Prompt;
