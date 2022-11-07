import { Navigate, Outlet, useParams } from "react-router-dom";

function DescriptorParamCheckWrapper() {
  const { mood } = useParams();
  const valid = mood === "good" || mood === "bad" ? true : false;

  return valid ? <Outlet /> : <Navigate to="/" replace />;
}

export default DescriptorParamCheckWrapper;
