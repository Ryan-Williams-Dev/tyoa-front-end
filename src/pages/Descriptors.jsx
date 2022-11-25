import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import MoodList from "../components/MoodList/MoodList";
import PageTitle from "../components/common/PageTitle";
import PrimaryButton from "../components/common/PrimaryButton";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get } from "../features/moods/moodsSlice";
import { toast } from "react-toastify";
import { reset } from "../features/responses/responsesSlice";

function Descriptors() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mood } = useParams();
  const { selectedMoods } = useSelector((state) => state.moods);
  const numOfSelected = selectedMoods.length;

  const onSubmit = (mood) => {
    if (numOfSelected < 1) {
      return toast.info(
        <Typography variant="h6">Select at least one emotion</Typography>
      );
    }
    navigate(mood === "good" ? "/prompt" : "/response");
  };

  useEffect(() => {
    dispatch(get());
    dispatch(reset());
  }, [dispatch]);

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
      <PageTitle
        subText={
          numOfSelected < 1
            ? "Select all which apply."
            : `${numOfSelected} emotion${
                numOfSelected > 1 ? "s" : ""
              } selected.`
        }
      >
        Tell me more...
      </PageTitle>
      <MoodList mood={mood} />
      <PrimaryButton
        clickHandler={() => onSubmit(mood)}
        extraStyles={{
          width: "min(400px, 87vw)",
        }}
        undertext="Let us know when your ready"
      >
        Submit
      </PrimaryButton>
    </Box>
  );
}

export default Descriptors;
