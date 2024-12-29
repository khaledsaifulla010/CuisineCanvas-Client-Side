import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link to={"/"} className="flex items-center gap-1">
            <img className="w-8" src={logo} />
            <h1 className="text-3xl font-bold">CuisineCanvas</h1>
          </Link>
        </div>
        <div className="navbar-center">
          <ul className="flex items-center gap-8">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/ourMenu"}>Our Menu</NavLink>
            <NavLink to={"/ourShop"}>Our Shop</NavLink>
            <NavLink to={"/contactUs"}>Contact Us</NavLink>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
