import { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import PageTitle from "../components/common/PageTitle";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import promptMaker from "../components/Prompt/utils/promptMaker";
import PrimaryButton from "../components/common/PrimaryButton";

function Prompt() {
  const { moods, selectedMoods } = useSelector((state) => state.moods);
  const { user } = useSelector((state) => state.auth);
  const prompt = promptMaker(moods, selectedMoods);
  const [input, setInput] = useState("");
  const [helperText, setHelperText] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);

    if (input.length > 500) {
      setHelperText("Please keep your response to a maximum of 500 characters");
    } else if (input.length < 25) {
      setHelperText("Please share more!");
    } else {
      setHelperText("");
    }
  };

  // next task fix this
  const onSubmit = (event, input) => {
    event.preventDefault;
  };

  return (
    <Box
      component={motion.form}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "1vh",
        height: "90vh",
        justifyContent: "space-between",
      }}
    >
      <PageTitle>
        Hey {user.name.split(" ")[0]}, you could really help someone.
      </PageTitle>

      <Box
        sx={{
          width: "min(85vw, 500px)",
          flexGrow: 1,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            width: "85vw",
            marginTop: "1em",
          }}
        >
          {prompt}
        </Typography>
        <TextField
          sx={{
            backgroundColor: "primary.dark",
            borderRadius: "15px",
            marginTop: "20px",
          }}
          value={input}
          onChange={(e) => handleChange(e)}
          InputProps={{ disableUnderline: true }}
          fullWidth
          label={"Unleash your wisdom here"}
          variant="filled"
          multiline
          minRows={15}
          error={input.length > 500}
          helperText={helperText}
        />
      </Box>

      <PrimaryButton
        buttonType="submit"
        clickHandler={(event) => onSubmit(event, input)}
        undertext="Thanks for sharing your positivity"
      >
        Submit
      </PrimaryButton>
    </Box>
  );
}

export default Prompt;
