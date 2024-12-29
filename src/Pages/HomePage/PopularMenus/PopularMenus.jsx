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
    <div>
      <SectionTitle
        subHeading={"Check It Out"}
        heading={"OUR POPULAR MENUS"}
      ></SectionTitle>
      <div className="flex flex-wrap justify-between gap-6 mb-24">
        {menus.map((menu) => (
          <div key={menu._id} className="w-[48%]">
            <PopularMenusCard menu={menu} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMenus;
