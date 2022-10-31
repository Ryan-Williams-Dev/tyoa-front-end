import { FaEye, FaEyeSlash } from "react-icons/fa";
import { InputAdornment, IconButton } from "@mui/material";

function PasswordAdornment({ clickHandler, visibility }) {
  return (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={clickHandler}
        sx={{
          color: "white",
          opacity: 0.7,
          "&:hover": {
            opacity: 1,
          },
        }}
      >
        {visibility ? <FaEyeSlash /> : <FaEye />}
      </IconButton>
    </InputAdornment>
  );
}

export default PasswordAdornment;
