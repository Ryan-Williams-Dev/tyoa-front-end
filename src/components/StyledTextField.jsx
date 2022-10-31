import { styled, TextField } from "@mui/material";

const StyledTextField = styled(TextField)({
  fontFamily: "Alegreya Sans",
  fontWeight: "regular",
  width: "500px",
  "@media(max-width: 600px)": {
    width: "100%",
  },
  "& input": {
    fontFamily: "Alegreya Sans",
  },
  "& label": {
    color: "rgba(255, 255, 255, 0.7)",
    fontFamily: "Alegreya Sans",
    fontWeight: "regular",
    marginLeft: "0.5em",
  },
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "rgba(255, 255, 255, 0.7)",
  },
});

export default StyledTextField;
