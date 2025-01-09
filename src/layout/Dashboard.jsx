import {
  FaAd,
  FaBook,
  FaEnvelope,
  FaHome,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { FaCalendar, FaList } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  const [isAdmin] = useAdmin();

  return (
    <div className="flex mt-12 max-w-[1450px] mx-auto">
      {/* Dashboard Sidebar */}
      <div className="w-72 min-h-screen bg-amber-500">
        <ul className="menu p-4">
          {/* If Admin True */}
          {isAdmin ? (
            <>
              {" "}
              <li>
                <NavLink to={"/dashboard/adminHome"}>
                  <FaHome></FaHome>Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addItems"}>
                  <FaUtensils /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageItems"}>
                  <FaList /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageBookings"}>
                  <FaBook/> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/allUsers"}>
                  <FaUsers/> All Users
                </NavLink>
              </li>
              
            </>
          ) : (
            <>
              {" "}
              {/* If Admin False */}
              <li>
                <NavLink to={"/dashboard/userHome"}>
                  <FaHome></FaHome>User Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/cart"}>
                  <FaShoppingCart></FaShoppingCart>My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/reservation"}>
                  <FaCalendar></FaCalendar>My Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/review"}>
                  <FaAd></FaAd>Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/bookings"}>
                  <FaList></FaList> My Bookings
                </NavLink>
              </li>
            </>
          )}
          {/* shared Navlink */}
          <div className="divider">OR</div>
          <li>
            <NavLink to={"/"}>
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/ourMenu"}>
              <FaSearch /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>
              <FaEnvelope /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Dashboard Content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
