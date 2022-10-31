import { useRef } from "react";
import LogoAndWelcome from "./LogoAndWelcome";
import LoginButton from "./LoginButton";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

function LandingSection() {
  const ref = useRef(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <section
      ref={ref}
      className={isVisible ? "show" : "hidden"}
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <LogoAndWelcome />
      <LoginButton />
    </section>
  );
}

export default LandingSection;
