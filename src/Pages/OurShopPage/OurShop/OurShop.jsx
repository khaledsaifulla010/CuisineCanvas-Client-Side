import Cover from "../../../components/Shared/Cover/Cover";
import shopImage from "../../../assets/shop/shopImage.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../FoodCard/FoodCard";
import "./OurShopStyles.css";
import { useState } from "react";
const OurShop = () => {
  const [menus] = useMenu();

  const salads = menus.filter((item) => item.category === "salad");
  const pizzas = menus.filter((item) => item.category === "pizza");
  const soups = menus.filter((item) => item.category === "soup");
  const desserts = menus.filter((item) => item.category === "dessert");
  const drinks = menus.filter((item) => item.category === "drinks");

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTabSelect = (index) => {
    setSelectedIndex(index);
  };
  return (
    <div className="mb-24">
      <Cover img={shopImage} title={"OUR SHOP"}></Cover>
      <Tabs selectedIndex={selectedIndex} onSelect={handleTabSelect}>
        <TabList className="custom-tab-list">
          <Tab className={selectedIndex === 0 ? "active-tab" : ""}>Salads</Tab>
          <Tab className={selectedIndex === 1 ? "active-tab" : ""}>Pizzas</Tab>
          <Tab className={selectedIndex === 2 ? "active-tab" : ""}>Soups</Tab>
          <Tab className={selectedIndex === 3 ? "active-tab" : ""}>
            Desserts
          </Tab>
          <Tab className={selectedIndex === 4 ? "active-tab" : ""}>Drinks</Tab>
        </TabList>

        <TabPanel className="mt-12">
          <div className="grid grid-cols-3 gap-x-8 gap-y-16">
            {salads.map((menu) => (
              <FoodCard key={menu._id} menu={menu}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-x-8 gap-y-16">
            {pizzas.map((menu) => (
              <FoodCard key={menu._id} menu={menu}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-x-8 gap-y-16">
            {soups.map((menu) => (
              <FoodCard key={menu._id} menu={menu}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-x-8 gap-y-16">
            {desserts.map((menu) => (
              <FoodCard key={menu._id} menu={menu}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-x-8 gap-y-16">
            {drinks.map((menu) => (
              <FoodCard key={menu._id} menu={menu}></FoodCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurShop;
