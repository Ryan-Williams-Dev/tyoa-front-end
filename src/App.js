import { BrowserRouter as Router } from "react-router-dom";
import theme from "./theme/materialUiTheme";
import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CssBaseline from "@mui/material/CssBaseline";
import "./styles/scrollAnimate.css";
import AnimatedRoutes from "./components/Routing/AnimatedRoutes";
import "./styles/toastStyling.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        <Router>
          <AnimatedRoutes />
        </Router>
        <ToastContainer theme="dark" />
      </>
    </ThemeProvider>
  );
}

export default App;
