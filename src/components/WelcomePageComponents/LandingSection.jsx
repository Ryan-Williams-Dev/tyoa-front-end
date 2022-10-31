import { useRef } from "react";
import LogoAndWelcome from "./LogoAndWelcome";
import PrimaryButton from "./PrimaryButton";
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
        display: "grid",
        gridTemplateRows: "repeat(3, 33%)",
        gridTemplateColumns: "repeat(1, 100%)",
        justifyItems: "center",
        alignItems: "end",
      }}
    >
      <LogoAndWelcome />
      <PrimaryButton
        buttonRoute="/login"
        undertext="Don't have an account?"
        undertextBold="Sign Up"
        undertextRoute="/register"
        extraStyles={{ gridRowStart: 3, gridRowEnd: 3, alignSelf: "center" }}
      >
        Login With Email
      </PrimaryButton>
    </section>
  );
}

export default LandingSection;
