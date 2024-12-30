import axios from "axios";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useState } from "react";
import PopularMenusCard from "../PopularMenusCard/PopularMenusCard";

const PopularMenus = () => {
  const [menus, setMenus] = useState([]);
  axios.get("./menu.json").then((data) => {
    const popularItems = data.data.filter(
      (item) => item.category === "popular"
    );
    setMenus(popularItems);
  });

  return (
    <div className="mb-12">
      <SectionTitle
        subHeading={"Check It Out"}
        heading={"OUR POPULAR MENUS"}
      ></SectionTitle>
      <div className="flex flex-wrap justify-between gap-6 ">
        {menus.map((menu) => (
          <div key={menu._id} className="w-[48%]">
            <PopularMenusCard menu={menu} />
          </div>
        ))}
      </div>
      <div className="mb-12 text-center">
        <button className="relative text-lg font-bold uppercase text-gray-800 tracking-wide">
          View Full Menu
          <div className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-24 border-b-2 border-gray-800 rounded-full"></div>
        </button>
      </div>
    </div>
  );
};

export default PopularMenus;