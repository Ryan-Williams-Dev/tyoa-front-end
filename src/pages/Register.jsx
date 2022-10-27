import {
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";

function Register() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          marginTop: "10vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress size={100} color="primary" />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          marginTop: "2em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="/img/logo.svg"
          sx={{
            maxHeight: "50px",
          }}
        />
        <Typography variant="h2">Register</Typography>
        <Typography variant="body1">Please create an account</Typography>
      </Box>
      <Box
        component="form"
        onSubmit={onSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2em",
          margin: "2em",
        }}
      >
        <TextField
          variant="standard"
          inputRef={nameRef}
          type="text"
          required
          label="Name"
        ></TextField>
        <TextField
          inputRef={emailRef}
          type="email"
          required
          label="Email"
        ></TextField>
        <TextField
          inputRef={passwordRef}
          type="password"
          required
          label="Password"
        ></TextField>
        <TextField
          inputRef={passwordConfirmRef}
          type="password"
          required
          label="Confirm Password"
        ></TextField>
        <Button type="submit" variant="contained">
          Register
        </Button>
      </Box>
    </Box>
  );
}

export default Register;
