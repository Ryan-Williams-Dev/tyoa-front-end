import { Box, Typography } from "@mui/material";
import { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import StyledTextField from "../components/FormComponents/StyledTextField";
import PrimaryButton from "../components/common/PrimaryButton";
import StyledFormContainer from "../components/FormComponents/StyledFormContainer";
import PasswordAdornment from "../components/FormComponents/PasswordAdornment";
import LogoLink from "../components/common/LogoLink";
import { motion } from "framer-motion";
import LoadingDiv from "../components/common/LoadingDiv";

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  let [showPassword, setShowPassword] = useState(false);

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

  const handleClickShowPassword = () => {
    setShowPassword((showPassword = !showPassword));
  };

  if (isLoading) {
    return <LoadingDiv />;
  }

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
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
          <LogoLink extraStylingImg={{ marginBottom: "1.5em" }} />

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
          type={showPassword ? "text" : "password"}
          required
          label="Password"
          InputProps={{
            endAdornment: (
              <PasswordAdornment
                visibility={showPassword}
                clickHandler={handleClickShowPassword}
              />
            ),
          }}
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
