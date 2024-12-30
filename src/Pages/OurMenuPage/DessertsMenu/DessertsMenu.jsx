import Cover from "../../../components/Shared/Cover/Cover";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import useMenu from "../../../hooks/useMenu";
import DessertsMenuCard from "../DessertsMenuCard/DessertsMenuCard";

const DessertsMenu = () => {
  const [menus] = useMenu();
  const desserts = menus.filter((item) => item.category === "dessert");
  return (
    <div className="mb-12">
      <Cover img={dessertBg} title={"DESSERTS"}></Cover>
      <div className="flex flex-wrap justify-between gap-6 mt-12">
        {desserts.map((menu) => (
          <div className="w-[48%]">
            <DessertsMenuCard key={menu._id} menu={menu}></DessertsMenuCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DessertsMenu;
