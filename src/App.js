import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import WithHeader from "./components/Header/WithHeader";
import WithoutHeader from "./components/Header/WithoutHeader";
import theme from "./theme/palette";
import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Router>
          <Routes>
            <Route element={<WithoutHeader />}>
              <Route path="/welcome" element={<Welcome />} />
            </Route>

            <Route element={<WithHeader />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
          </Routes>
        </Router>
        <ToastContainer />
      </>
    </ThemeProvider>
  );
}

export default App;
