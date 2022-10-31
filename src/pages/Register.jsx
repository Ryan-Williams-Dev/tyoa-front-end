import { Box, Button, Typography, CircularProgress } from "@mui/material";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import StyledTextField from "../components/StyledTextField";
import StyledFormContainer from "../components/StyledFormContainer";
import PrimaryButton from "../components/WelcomePageComponents/PrimaryButton";

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
          <Box
            component="img"
            src="/img/logo.svg"
            sx={{
              maxHeight: "50px",
              maxWidth: "50px",
              marginBottom: "2em",
            }}
          />
          <Typography variant="h2" fontWeight="regular">
            Sign Up
          </Typography>
          <Typography variant="body1" fontSize={20} color="text.secondary">
            Begin your journey of self-guidance.
          </Typography>
        </Box>
        <StyledTextField
          variant="standard"
          inputRef={nameRef}
          type="text"
          required
          label="Name"
        ></StyledTextField>
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
        <StyledTextField
          variant="standard"
          inputRef={passwordConfirmRef}
          type="password"
          required
          label="Confirm Password"
        ></StyledTextField>
        <PrimaryButton
          undertext="Already have an account?"
          undertextBold="Sign In"
          undertextRoute="/login"
          buttonType="submit"
        >
          SIGN UP
        </PrimaryButton>
      </StyledFormContainer>
    </Box>
  );
}

export default Register;
