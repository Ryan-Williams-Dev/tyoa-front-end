import { styled, Box } from "@mui/material";

const StyledFormContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  "@media(max-width: 600px)": {
    width: "80vw",
  },
  alignSelf: "center",
  width: "600px",
  gap: "1em",
  margin: "2em",
});

export default StyledFormContainer;
