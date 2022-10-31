import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import LogoAndWelcome from "../components/WelcomePageComponents/LogoAndWelcome";
import LoginButton from "../components/WelcomePageComponents/LoginButton";
import AboutSection from "../components/WelcomePageComponents/AboutSection";
import LandingSection from "../components/WelcomePageComponents/LandingSection";

function Welcome() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const backgroundByVH = useMediaQuery("(max-aspect-ratio: 2048/1365)");

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <>
      <Box
        sx={{
          backgroundAttachment: "fixed",
          backgroundImage: "url(/img/welcome_bg.jpg)",
          backgroundSize: backgroundByVH ? "auto 100vh" : "100vw auto",
        }}
      >
        <LandingSection />
        <AboutSection />
      </Box>
    </>
  );
}

export default Welcome;
