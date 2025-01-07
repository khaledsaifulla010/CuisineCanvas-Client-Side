import { RiDeleteBin2Fill } from "react-icons/ri";
import useCart from "../../../hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div>
      <div className="flex items-center justify-around mt-12">
        <h1 className="text-5xl font-bold">Total Items : {cart.length} </h1>
        <h1 className="text-5xl font-bold">Total Prices : {totalPrice} </h1>
        <button className="border p-2 rounded-md text-purple-700 border-purple-400 font-bold">
          Pay
        </button>
      </div>
      <div>
        <div className="mt-12">
          {cart.length > 0 ? (
            <div className="overflow-x-auto mt-20 mb-72 px-8">
              <div className="rounded-lg shadow-lg border border-gray-300">
                <table className="table w-full border-collapse">
                  <thead className="bg-gray-700 text-white text-lg font-extrabold">
                    <tr>
                      <th className="text-center py-3 px-4">SL/No.</th>
                      <th className="text-center py-3 px-4">Item Image</th>
                      <th className="text-center py-3 px-4">Item Name</th>
                      <th className="text-center py-3 px-4">Item Price</th>

                      <th className="text-center py-3 px-4">Delete Item </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    {cart.map((singleCart, index) => (
                      <tr key={singleCart._id} className="hover:bg-gray-100">
                        <td className="text-center py-3 px-4 font-bold text-green-600 text-base">
                          {index + 1}
                        </td>
                        <td className="text-center py-3 px-4">
                          <div className="avatar flex justify-center">
                            <div className="mask rounded-full h-16 w-16">
                              <img
                                src={singleCart.image}
                                className="object-cover"
                              />
                            </div>
                          </div>
                        </td>
                        <td className="text-center py-3 px-4 text-base text-purple-700 font-bold">
                          {singleCart.name}
                        </td>
                        <td className="text-center py-3 px-4 text-green-700 font-bold text-base">
                          {singleCart.price}
                        </td>

                        <td className="text-center py-3 px-4 text-red-600 font-bold text-2xl">
                          <button>
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
              No Items Found!
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
