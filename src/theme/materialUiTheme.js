import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#253334",
    },
    secondary: {
      main: "#7C9A92",
    },
    text: {
      primary: "#FFFFFF",
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
    button: {
      textTransform: "none",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
