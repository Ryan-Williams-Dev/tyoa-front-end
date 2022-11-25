import { Box, Typography } from "@mui/material";
import PageTitle from "../components/common/PageTitle";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { getResponse } from "../features/responses/responsesSlice";
import LoadingDiv from "../components/common/LoadingDiv";

function Response() {
  const dispatch = useDispatch();
  const { isLoading, isError, message, response } = useSelector(
    (state) => state.responses
  );
  const { selectedMoods } = useSelector((state) => state.moods);

  useEffect(() => {
    if (selectedMoods) {
      dispatch(getResponse(selectedMoods));
    }
  }, []);

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
      }}
    >
      <PageTitle subText={"Here's some advice that may help you out"}>
        Sorry to hear that.
      </PageTitle>
      {isLoading && <LoadingDiv />}
      {response && <Typography>{response.text}</Typography>}
    </Box>
  );
}

export default Response;
