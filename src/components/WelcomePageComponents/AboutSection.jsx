import { useRef } from "react";
import { Box, Typography } from "@mui/material";
import useIntersectionObserver from "../common/hooks/useIntersectionObserver";

function AboutSection() {
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <Box
      ref={ref}
      className={isVisible ? "show" : "hidden"}
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: "1em",
        paddingX: "2em",
      }}
    >
      <Typography variant="h2">About</Typography>
      <Typography
        variant="h6"
        maxWidth="600px"
        sx={{
          fontSize: {
            md: "1.5rem",
            xl: "1.7rem",
          },
        }}
      >
        Life is full of ups and downs. At times, a positive mentality is clear.
        At others, it's hard to frame anything in a positive light. Take Your
        Own Advice is a tool. A tool to absorb your optimistic wisdom when
        positive energy is flowing. Then on days when negative thoughts are
        louder, we will feed you related support in your own words. <br />{" "}
        Become your own best friend.
      </Typography>
    </Box>
  );
}

export default AboutSection;
