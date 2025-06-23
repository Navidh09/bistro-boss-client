import { Outlet } from "react-router";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
