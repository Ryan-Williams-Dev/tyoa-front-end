import { styled, Box } from "@mui/material";

const StyledFormContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "480px",
  gap: "1em",
  margin: "2em",
  "@media(max-width: 600px)": {
    width: "80vw",
  },
});

export default StyledFormContainer;
