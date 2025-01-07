import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import OurMenu from "../Pages/OurMenuPage/OurMenu/OurMenu";
import OurShop from "../Pages/OurShopPage/OurShop/OurShop";
import Login from "../authentication/Login/Login";
import Register from "../authentication/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

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
        element: (
          <PrivateRoute>
            <OurShop></OurShop>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      //Admin Routes
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);

export default router;
