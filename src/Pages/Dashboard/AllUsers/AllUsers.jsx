import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  return (
    <div>
      <div className="flex items-center justify-around mt-12">
        <h1 className="text-5xl font-bold">All Users </h1>
        <h1 className="text-5xl font-bold">Total Users : {users.length} </h1>
      </div>
    </div>
  );
};

export default AllUsers;
