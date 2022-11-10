import { useState } from "react";
import { Box } from "@mui/material";
import MoodListItem from "./MoodListItem";
import { useEffect } from "react";

const goodMoods = [
  "Joyful",
  "Grateful",
  "Pride",
  "Serenity",
  "Interest",
  "Amused",
  "Hopeful",
  "Optimistic",
  "Loving",
  "Loved",
  "Awe",
  "Inspired",
  "Elevated",
  "Altruistic",
  "Relief",
  "Confident",
];

const badMoods = [
  "Angry",
  "Emptiness",
  "Frustration",
  "Innadequacy",
  "Helplessness",
  "Fear",
  "Guilt",
  "Lonliness",
  "Depression",
  "Overwhelmed",
  "Resentful",
  "Failure",
  "Sadness",
  "Jealous",
  "Uninterested",
  "Bored",
  "Pessimistic",
  "Selfish",
  "Unconfident",
];

function MoodList({ mood, selectedState, setSelectedState }) {
  const itemClickHandler = (moodName) => {
    setSelectedState({
      ...selectedState,
      [moodName]: selectedState[moodName] ? false : true,
    });
  };

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
      {mood === "good" &&
        goodMoods.map((moodName) => {
          return (
            <MoodListItem
              selected={selectedState[moodName]}
              clickHandler={() => itemClickHandler(moodName)}
              key={moodName}
            >
              {moodName}
            </MoodListItem>
          );
        })}
      {mood === "bad" &&
        badMoods.map((moodName) => {
          return (
            <MoodListItem
              selected={selectedState[moodName]}
              clickHandler={() => itemClickHandler(moodName)}
              key={moodName}
            >
              {moodName}
            </MoodListItem>
          );
        })}
    </Box>
  );
}

export default MoodList;
