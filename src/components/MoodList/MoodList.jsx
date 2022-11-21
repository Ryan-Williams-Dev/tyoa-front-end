import { Box } from "@mui/material";
import MoodListItem from "./MoodListItem";
import LoadingDiv from "../common/LoadingDiv";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { selectMood, deselectMood } from "../../features/moods/moodSlice";

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
          sx={{
            pt: "1em",
            width: "90%",
            display: "grid",
            gap: "1.5em",
            gridTemplateColumns: {
              xs: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
              xl: "repeat(6, 1fr)",
            },
          }}
        >
          {moods.map((element) => {
            const moodName = element[mood];
            const moodId = element._id;
            return (
              <MoodListItem
                isSelected={selectedMoods.includes(moodId)}
                selectMoodHandler={() => dispatch(selectMood(moodId))}
                deselectMoodHandler={() => dispatch(deselectMood(moodId))}
                key={moodId}
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
