
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-[1450px] mx-auto">
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
