import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { FaUserCircle } from "react-icons/fa";
import "./Navbar.css";
const Navbar = () => {
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
            <div tabIndex={0} role="button">
              <FaUserCircle className="text-4xl" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu  rounded-box z-[1] w-52 p-2 shadow bg-white text-black"
            >
              <Link to={"/login"}>Login</Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
