import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1 className="text-3xl font-bold text-green-700 ml-24">
        Hi, Welcome {user?.displayName ? user.displayName : "back"}
      </h1>
    </div>
  );
};

export default AdminHome;
