import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#253334",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#7C9A92",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
    background: {
      default: "#253334",
    },
  },
  typography: {
    fontFamily: ["Alegreya", "Alegreya Sans"].join(","),
    h1: {
      fontFamily: "Alegreya",
      fontWeight: "bold",
    },
    h2: {
      fontFamily: "Alegreya",
      fontWeight: "bold",
    },
    h3: {
      fontFamily: "Alegreya Sans",
      fontWeight: "medium",
    },
    h4: {
      fontFamily: "Alegreya Sans",
      fontWeight: "medium",
    },
    h5: {
      fontSize: 25,
      fontFamily: "Alegreya Sans",
      fontWeight: "regular",
    },
    body1: {
      fontFamily: "Alegreya Sans",
      fontWeight: "regular",
    },
    button: {
      textTransform: "none",
    },
    iconButton: {
      color: "text.primary",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
