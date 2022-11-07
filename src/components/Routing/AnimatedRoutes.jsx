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
            <Route path="/descriptors/:mood" element={<Descriptors />} />
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
