import { Box, Typography, CircularProgress } from "@mui/material";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import StyledTextField from "../components/StyledTextField";
import PrimaryButton from "../components/WelcomePageComponents/PrimaryButton";
import StyledFormContainer from "../components/StyledFormContainer";

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
        paddingTop: "4em",
      }}
    >
      <StyledFormContainer component="form" onSubmit={onSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "97%",
            alignSelf: "center",
          }}
        >
          <a href="/">
            <Box
              component="img"
              src="/img/logo.svg"
              sx={{
                maxHeight: "50px",
                maxWidth: "50px",
                marginBottom: "2em",
              }}
            />
          </a>

          <Typography variant="h2" fontWeight="regular">
            Sign In
          </Typography>
          <Typography variant="body1" fontSize={20} color="text.secondary">
            Get back to where you left off.
          </Typography>
        </Box>
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
        <PrimaryButton
          buttonType="submit"
          undertext="Don't have an account?"
          undertextBold="Sign Up"
          undertextRoute="/register"
        >
          LOGIN
        </PrimaryButton>
      </StyledFormContainer>
    </Box>
  );
}

export default Login;
