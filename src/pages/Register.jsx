import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import StyledTextField from "../components/FormComponents/StyledTextField";
import StyledFormContainer from "../components/FormComponents/StyledFormContainer";
import PrimaryButton from "../components/common/PrimaryButton";
import PasswordAdornment from "../components/FormComponents/PasswordAdornment";
import LogoLink from "../components/common/LogoLink";
import { motion } from "framer-motion";
import LoadingDiv from "../components/common/LoadingDiv";

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

  let [showPassword, setShowPassword] = useState(false);
  let [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

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

  const handleClickShowPassword = () => {
    setShowPassword((showPassword = !showPassword));
  };
  const handleClickShowPasswordConfirm = () => {
    setShowPasswordConfirm((showPasswordConfirm = !showPasswordConfirm));
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

        <StyledTextField
          variant="standard"
          inputRef={passwordConfirmRef}
          type={showPasswordConfirm ? "text" : "password"}
          required
          label="Confirm Password"
          InputProps={{
            endAdornment: (
              <PasswordAdornment
                visibility={showPasswordConfirm}
                clickHandler={handleClickShowPasswordConfirm}
              />
            ),
          }}
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
