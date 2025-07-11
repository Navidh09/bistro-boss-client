import { Outlet, useLocation } from "react-router";

import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";

const MainLayout = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/login" || location.pathname === "/signUp" || (
        <Navbar></Navbar>
      )}
      <Outlet></Outlet>
      {location.pathname === "/login" || location.pathname === "/signUp" || (
        <Footer></Footer>
      )}
    </div>
  );
};

export default MainLayout;
