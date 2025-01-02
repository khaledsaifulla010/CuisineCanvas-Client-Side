import axios from "axios";
import useAuth from "../../../hooks/useAuth";

const FoodCard = ({ menu }) => {
  const { name, recipe, image, price, _id } = menu;
  const { user } = useAuth();
  const handleAddToCart = (food) => {
    console.log(food, user.email);

    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axios
        .post("http://localhost:5000/carts", cartItem)
        .then((data) => console.log(data.data));
    }
  };

  return (
    <div className="relative bg-white shadow-md rounded-lg overflow-hidden w-[460px] border">
      {/* Image Section */}
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        {/* Price Overlay */}
        <div className="absolute top-2 right-2 bg-black text-white text-sm font-semibold px-3 py-1 rounded-md">
          ${price}
        </div>
      </div>
      {/* Text Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">{recipe}</p>
        {/* Button Section */}
        <button
          onClick={() => handleAddToCart(menu)}
          className="mt-4 btn btn-outline border-0 border-b-4 bg-slate-100 font-bold ml-[150px]"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
