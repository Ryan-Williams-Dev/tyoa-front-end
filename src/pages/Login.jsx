import { Box, Button, Typography, CircularProgress } from "@mui/material";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import StyledTextField from "../components/StyledTextField";

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

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

    const userData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    dispatch(login(userData));
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
    <>
      <Box
        sx={{
          marginTop: "2em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: "1",
        }}
      >
        <Typography variant="h3">Login</Typography>
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
          flexGrow: "1",
        }}
      >
        <StyledTextField
          variant="standard"
          inputRef={emailRef}
          type="email"
          required
          label="Email"
        ></StyledTextField>
        <StyledTextField
          variant="standard"
          inputRef={passwordRef}
          type="password"
          required
          label="Password"
        ></StyledTextField>
        <Button type="submit" variant="contained">
          Login
        </Button>
      </Box>
    </>
  );
}

export default Login;
