import { Box, Typography } from "@mui/material";
import PageTitle from "../components/common/PageTitle";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { getResponse } from "../features/responses/responsesSlice";
import LoadingDiv from "../components/common/LoadingDiv";
import { useNavigate } from "react-router-dom";

function Response() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError, message, response } = useSelector(
    (state) => state.responses
  );
  const { selectedMoods } = useSelector((state) => state.moods);

  useEffect(() => {
    if (selectedMoods.length < 1) {
      navigate("/bad");
    }
    dispatch(getResponse(selectedMoods));
  }, [dispatch, navigate, selectedMoods]);

  useEffect(() => {
    if (isError) {
      toast.error(<Typography variant="h6">{message}</Typography>);
    }
  }, [isError, message]);

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
        gap: "1rem",
      }}
    >
      <PageTitle
        extraStylesContainer={{
          width: "min(90vw, 600px)",
        }}
        subText={"Here's some advice that may help you out"}
      >
        Sorry to hear that.
      </PageTitle>
      {isLoading && <LoadingDiv />}
      {response && (
        <Typography
          variant="h4"
          sx={{
            width: "min(90vw, 600px)",
            backgroundColor: "primary.dark",
            padding: "20px",
            borderRadius: 10,
          }}
        >
          {response.text}
        </Typography>
      )}
    </Box>
  );
}

export default Response;
