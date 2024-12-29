import { Link } from "react-router-dom";
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
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
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
