import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner"></div>{" "}
        <span className=" w-28 loading loading-dots text-secondary"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
