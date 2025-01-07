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
    </div>
  );
};

export default Cart;
