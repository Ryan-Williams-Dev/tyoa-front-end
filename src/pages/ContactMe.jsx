import { Box, Typography } from "@mui/material";
import PageTitle from "../components/common/PageTitle";
import { motion } from "framer-motion";
import InfoCard from "../components/common/InfoCard";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const alignIcon = {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
};

export default function ContactMe() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "min(87vw, 1488px)",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          paddingY: "1rem",
        }}
      >
        <PageTitle>Contact Me</PageTitle>

        <Typography
          variant="h5"
          sx={{
            backgroundColor: "primary.dark",
            borderRadius: "10px",
            padding: "1rem",
          }}
          fontFamily="Alegreya"
        >
          I love building things, why don't we build something together? I would
          love to hear from you!
        </Typography>
        <Typography variant="h4" fontFamily="Alegreya">
          Find me on these platforms
        </Typography>
        <InfoCard>
          <div style={alignIcon}>
            <FaLinkedin />{" "}
            <a
              style={{ color: "white" }}
              href="https://www.linkedin.com/in/ryan-williams-dev/"
            >
              Ryan-Williams-Dev
            </a>{" "}
          </div>
          <br />
          <div style={alignIcon}>
            <FaGithubSquare />{" "}
            <a
              style={{ color: "white" }}
              href="https://github.com/Ryan-Williams-Dev"
            >
              Ryan-Williams-Dev
            </a>
          </div>
        </InfoCard>
        <Typography variant="h4" fontFamily="Alegreya">
          Email me directly
        </Typography>
        <InfoCard>
          <a href="RyanWilliams.WorkMail@gmail.com" style={{ color: "white" }}>
            RyanWilliams.WorkMail@gmail.com
          </a>
        </InfoCard>
      </Box>
    </Box>
  );
}
