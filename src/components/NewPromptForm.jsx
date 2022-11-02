// import { useSelector, useDispatch } from "react-redux";
import { Box, Button, TextField, Typography } from "@mui/material";

function NewPromptForm() {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "2em",
        gap: "2em",
      }}
    >
      <Typography variant="h5">
        Please ask some new questions of yourself
      </Typography>
      <TextField label="Create a new advice prompt"></TextField>
      <TextField label="Moods intended for"></TextField>
      <Button type="Submit" color="primary">
        Submit
      </Button>
    </Box>
  );
}

export default NewPromptForm;
