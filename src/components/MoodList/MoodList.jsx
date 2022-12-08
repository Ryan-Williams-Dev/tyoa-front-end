import { Box } from "@mui/material";
import MoodListItem from "./MoodListItem";
import LoadingDiv from "../common/LoadingDiv";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { selectMood, deselectMood } from "../../features/moods/moodsSlice";
import { motion } from "framer-motion";

function MoodList({ mood }) {
  const dispatch = useDispatch();
  const { moods, selectedMoods, isLoading, isError, message } = useSelector(
    (state) => state.moods
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
  }, [isError, message]);

  return (
    <>
      {isLoading && <LoadingDiv>Fetching emotions...</LoadingDiv>}
      {moods && (
        <Box
          component={motion.ul}
          sx={{
            pt: "1em",
            width: "min(90%, 1488px)",
            display: "grid",
            gap: "1.5em",
            gridTemplateColumns: {
              xs: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
              xl: "repeat(6, 1fr)",
            },
          }}
        >
          {moods.map((element, i) => {
            const moodName = element[mood];
            const moodId = element._id;
            const delay = i * 0.05;
            return (
              <MoodListItem
                isSelected={selectedMoods.includes(moodId)}
                selectMoodHandler={() => dispatch(selectMood(moodId))}
                deselectMoodHandler={() => dispatch(deselectMood(moodId))}
                key={moodId}
                delay={delay}
              >
                {moodName}
              </MoodListItem>
            );
          })}
        </Box>
      )}
    </>
  );
}

export default MoodList;
