import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { FaUserCircle } from "react-icons/fa";
import "./Navbar.css";
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const redirects = useNavigate();
  const handleSignOut = () => {
    logout().then(() => {
      toast.success("Sign Out Successfully!", {
        position: "top-right",
        theme: "colored",
      });
    });
    redirects("/");
  };

  return (
    <div>
      <div className="navbar fixed z-10 bg-black bg-opacity-80 text-white max-w-[1450px]">
        <div className="navbar-start">
          <Link to={"/"} className="flex items-center gap-1">
            <img className="w-8" src={logo} />
            <h1 className="text-3xl font-bold">CuisineCanvas</h1>
          </Link>
        </div>
        <div className="navbar-center">
          <ul className="flex items-center gap-8 uppercase font-semibold">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/ourMenu"}>Our Menu</NavLink>
            <NavLink to={"/ourShop"}>Our Shop</NavLink>
            <NavLink to={"/contactUs"}>Contact Us</NavLink>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end dropdown-hover">
            <div tabIndex={0} role="button"></div>

            <div
              tabIndex={0}
              role="button"
              className="m-1"
              aria-label="User profile"
            >
              {user?.photoURL ? (
                <img
                  className="w-16 h-16 border border-dotted border-slate-500 rounded-full p-1"
                  src={user.photoURL}
                  alt="User profile"
                />
              ) : (
                <FaUserCircle className="text-5xl" />
              )}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu  rounded-box z-[1] w-52 p-2 shadow bg-white text-black"
            >
              {user ? (
                <button
                  className="border px-2 py-1 rounded-xl font-bold text-red-600 bg-red-100 border-read-200 mt-2 text-center w-full"
                  onClick={handleSignOut}
                >
                  SignOut
                </button>
              ) : (
                <Link
                  className="border px-2 py-1 rounded-xl text-blue-700 bg-blue-50 border-blue-200 w-full text-center font-bold"
                  to={"/login"}
                >
                  Login
                </Link>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
