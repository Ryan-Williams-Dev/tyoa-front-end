import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { useMediaQuery } from "@mui/material";
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
          backgroundImage: "url(/img/welcome_bg.jpg)",
          backgroundSize: backgroundByVH ? "auto 100vh" : "100vw auto",
          position: "fixed",
          height: "100vh",
          width: "100vw",
        }}
      />
      <LandingSection />
      <AboutSection />
    </>
  );
}

export default Welcome;
