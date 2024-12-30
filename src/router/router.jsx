import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import OurMenu from "../Pages/OurMenuPage/OurMenu/OurMenu";
import OurShop from "../Pages/OurShopPage/OurShop/OurShop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/ourMenu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/ourShop",
        element: <OurShop></OurShop>,
      },
    ],
  },
]);

export default router;
