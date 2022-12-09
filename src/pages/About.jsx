import { Box, Typography } from "@mui/material";
import PageTitle from "../components/common/PageTitle";
import { motion } from "framer-motion";
import InfoCard from "../components/common/InfoCard";

function About() {
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
        <PageTitle>About</PageTitle>
        <InfoCard>
          Take Your Own Advice is a mental health tool. A tool to absorb your
          optimistic wisdom when positive energy is flowing. Then on days when
          negative thoughts are louder, we will send you related support in your
          own words.
        </InfoCard>
        <Typography variant="h4" fontFamily="Alegreya">
          Tech Stack
        </Typography>
        <InfoCard>
          Front-End:
          <br />
          React, Redux, Redux Toolkit, React-Router, Framer-Motion, Axios, and
          MaterialUI
          <br />
          <br />
          Back-End: <br /> Node, Express, Mongoose, MongoDB
        </InfoCard>
        <Typography variant="h4" fontFamily="Alegreya">
          Repos
        </Typography>
        <InfoCard>
          <a
            style={{
              color: "white",
            }}
            href="https://github.com/Ryan-Williams-Dev/tyoa-front-end"
          >
            Front-End
          </a>
          <br />
          <br />
          <a
            style={{
              color: "white",
            }}
            href="https://github.com/Ryan-Williams-Dev/tyoa-back-end"
          >
            Back-End
          </a>
        </InfoCard>
        <Typography variant="h4" fontFamily="Alegreya">
          External Credits
        </Typography>
        <InfoCard>
          Styling inspired by{" "}
          <a
            style={{
              color: "white",
            }}
            href="https://www.figma.com/community/file/915132326936854738"
          >
            this figma template
          </a>
        </InfoCard>
      </Box>
    </Box>
  );
}

export default About;
