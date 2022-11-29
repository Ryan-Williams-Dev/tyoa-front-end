import { useEffect, useState } from "react";
import { Box, CircularProgress, TextField, Typography } from "@mui/material";
import PageTitle from "../components/common/PageTitle";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import promptMaker from "../components/Prompt/utils/promptMaker";
import PrimaryButton from "../components/common/PrimaryButton";
import { createResponse, reset } from "../features/responses/responsesSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Prompt() {
  const { moods, selectedMoods } = useSelector((state) => state.moods);
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.responses
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const prompt = promptMaker(moods, selectedMoods);

  const [input, setInput] = useState("");
  const [helperText, setHelperText] = useState("");
  const [valid, setValid] = useState(false);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    if (input.length > 500) {
      setHelperText("Please keep your response to a maximum of 500 characters");
      setValid(false);
    } else if (input.length < 25) {
      setHelperText("Please share more!");
      setValid(false);
    } else {
      setHelperText(`${input.length} / 500`);
      setValid(true);
    }
  }, [input]);

  useEffect(() => {
    if (isError) {
      toast.error(<Typography variant="h6">{message}</Typography>);
      dispatch(reset());
    }
    if (isSuccess) {
      toast.info(<Typography variant="h6">{message}</Typography>);
      dispatch(reset());
      navigate("/");
    }
  }, [isError, isSuccess, message, dispatch, navigate]);

  const onSubmit = (event) => {
    event.preventDefault();

    if (!valid) {
      return setHelperText(
        "Please ensure your response is between 25 and 500 characters long!"
      );
    }

    const responseData = {
      text: input,
      selectedMoods,
    };

    return dispatch(createResponse(responseData));
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
        minHeight: "90vh",
        justifyContent: "space-between",
        marginBottom: "1em",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <PageTitle>
          Hey {user && user.name.split(" ")[0]}, you could really help someone.
        </PageTitle> */}

        <Box
          sx={{
            width: "min(85vw, 600px)",
            flexGrow: 1,
            mt: {
              md: "2em",
            },
          }}
        >
          <Typography
            variant="h4"
            fontFamily="Alegreya"
            sx={{
              marginTop: "1em",
            }}
          >
            Hey {user && user.name.split(" ")[0]}, {prompt}
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

          <PrimaryButton
            buttonType="submit"
            clickHandler={(event) => onSubmit(event, input, selectedMoods)}
            undertext="Thanks for sharing your positivity"
            extraStyles={
              {
                // width: "min(85vw, 500px)",
              }
            }
          >
            {isLoading ? <CircularProgress /> : "Submit"}
          </PrimaryButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Prompt;
