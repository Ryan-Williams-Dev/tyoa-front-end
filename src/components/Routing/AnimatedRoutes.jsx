import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import WithHeader from "./WithHeader";
import WithoutHeader from "./WithoutHeader";
import Welcome from "../../pages/Welcome";
import { AnimatePresence } from "framer-motion";
import Descriptors from "../../pages/Descriptors";
import DescriptorParamCheckWrapper from "./DescriptorParamCheckWrapper";
import Prompt from "../../pages/Prompt";
import Response from "../../pages/Response";
import About from "../../pages/About";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<WithoutHeader />}>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<WithHeader />}>
          <Route path="/" element={<Dashboard />} />
          <Route element={<DescriptorParamCheckWrapper />}>
            <Route path="/:mood" element={<Descriptors />} />
          </Route>
          <Route path="/prompt" element={<Prompt />} />
          <Route path="/response" element={<Response />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
