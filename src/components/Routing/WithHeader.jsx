import Header from "../Header";
import { Outlet } from "react-router-dom";

function WithHeader() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default WithHeader;
