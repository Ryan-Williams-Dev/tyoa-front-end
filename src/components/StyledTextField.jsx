import { styled, TextField } from "@mui/material";

const StyledTextField = styled(TextField)({
  "& label": {
    color: "rgba(255, 255, 255, 0.7)",
  },
  "&:hover label": {
    fontWeight: 700,
  },
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "rgba(255, 255, 255, 0.7)",
  },
});

export default StyledTextField;
