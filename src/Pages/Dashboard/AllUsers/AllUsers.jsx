import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa6";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success(`${user.name} is an Admin Now`, {
          position: "top-right",
          theme: "colored",
        });
      }
    });
  };

  return (
    <div>
      <div className="flex items-center justify-around mt-12">
        <h1 className="text-5xl font-bold">All Users </h1>
        <h1 className="text-5xl font-bold">Total Users : {users.length} </h1>
      </div>
      <div>
        <div className="mt-12">
          {users.length > 0 ? (
            <div className="overflow-x-auto mt-20 mb-72 px-8">
              <div className="rounded-lg shadow-lg border border-gray-300">
                <table className="table w-full border-collapse">
                  <thead className="bg-gray-700 text-white text-lg font-extrabold">
                    <tr>
                      <th className="text-center py-3 px-4">SL/No.</th>
                      <th className="text-center py-3 px-4">User Name</th>
                      <th className="text-center py-3 px-4">User Email</th>

                      <th className="text-center py-3 px-4">User Role </th>
                      <th className="text-center py-3 px-4">Delete User</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    {users.map((user, index) => (
                      <tr key={user._id} className="hover:bg-gray-100">
                        <td className="text-center py-3 px-4 font-bold text-green-600 text-base">
                          {index + 1}
                        </td>

                        <td className="text-center py-3 px-4 text-base text-purple-700 font-bold">
                          {user.name}
                        </td>
                        <td className="text-center py-3 px-4 text-green-700 font-bold text-base">
                          {user.email}
                        </td>
                        <td className="text-center py-3 px-4 text-orange-600 font-bold text-2xl">
                          {user.role === "Admin" ? (
                            "Admin"
                          ) : (
                            <button onClick={() => handleMakeAdmin(user)}>
                              <FaUsers />
                            </button>
                          )}
                        </td>

                        <td className="text-center py-3 px-4 text-red-600 font-bold text-2xl">
                          <button onClick={() => handleDelete(user._id)}>
                            <RiDeleteBin2Fill />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <h1 className="text-2xl font-bold text-slate-500 text-center mt-36 mb-36">
              No Users Found!
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
