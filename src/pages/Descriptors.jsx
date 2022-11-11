import { useState } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import MoodList from "../components/MoodList/MoodList";
import PageTitle from "../components/common/PageTitle";
import PrimaryButton from "../components/common/PrimaryButton";
import { useEffect } from "react";

function Descriptors() {
  const { mood } = useParams();
  let [selected, setSelected] = useState({});
  let [numOfSelected, setNumOfSelected] = useState(0);

  useEffect(() => {
    setNumOfSelected(Object.keys(selected).length);
  }, [selected]);

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
            : `${numOfSelected} word${numOfSelected > 1 ? "s" : ""} selected.`
        }
      >
        Tell me more...
      </PageTitle>
      <MoodList
        selectedState={selected}
        setSelectedState={setSelected}
        mood={mood}
      />
      <PrimaryButton undertext="Let us know when your ready">
        Move on
      </PrimaryButton>
    </Box>
  );
}

export default Descriptors;
