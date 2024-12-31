import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";

const MainLayout = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFooterLogin = location.pathname.includes("login");
  const noHeaderFooterRegister = location.pathname.includes("register");

  return (
    <div className="max-w-[1450px] mx-auto">
      {!(noHeaderFooterLogin || noHeaderFooterRegister) && <Navbar />}
      <Outlet />
      {!(noHeaderFooterLogin || noHeaderFooterRegister) && <Footer />}
    </div>
  );
};

export default MainLayout;
