import { Box } from "@mui/material";
import MoodListItem from "./MoodListItem";
import LoadingDiv from "../common/LoadingDiv";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function MoodList({ mood, selectedState, setSelectedState }) {
  // const { data, error, loading } = useFetch("/api/moods");
  const { moods, selectedMoods, isLoading, isError, isSuccess, message } =
    useSelector((state) => state.moods);

  const itemClickHandler = (moodName) => {
    if (selectedState[moodName] === true) {
      let newState = { ...selectedState };
      delete newState[moodName];
      return setSelectedState(newState);
    }

    return setSelectedState({
      ...selectedState,
      [moodName]: true,
    });
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
  }, [isError, message]);

  return (
    <Box
      sx={{
        pt: "1em",
        width: "90%",
        display: "grid",
        gap: "1.5em",
        gridTemplateColumns: { xs: "repeat(3, 1fr)", md: "repeat(6, 1fr)" },
      }}
    >
      {isLoading && <LoadingDiv />}

      {moods &&
        moods.map((element) => {
          const moodName = element[mood];
          const moodId = element["_id"];
          return (
            <MoodListItem
              selected={selectedState[moodId]}
              clickHandler={() => itemClickHandler(moodId)}
              key={moodId}
            >
              {moodName}
            </MoodListItem>
          );
        })}
    </Box>
  );
}

export default MoodList;
