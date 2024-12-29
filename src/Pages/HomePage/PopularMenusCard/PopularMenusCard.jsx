import React from "react";

const PopularMenusCard = ({ menu }) => {
  const { name, recipe, image, price } = menu;
  return (
    <div className="grid grid-cols-4 items-center gap-4 mb-6">
      {/* Image Section */}
      <div className="col-span-1">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="col-span-2">
        <h3 className="text-lg font-semibold uppercase">{name}</h3>
        <p className="text-sm text-gray-500">{recipe}</p>
      </div>

      {/* Price Section */}
      <div className="col-span-1 text-right">
        <p className="text-lg font-bold text-success">${price}</p>
      </div>
    </div>
  );
};

export default PopularMenusCard;
