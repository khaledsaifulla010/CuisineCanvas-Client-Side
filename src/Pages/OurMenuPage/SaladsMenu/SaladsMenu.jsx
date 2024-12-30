import Cover from "../../../components/Shared/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import saladsBg from "../../../assets/menu/salad-bg.jpg";
import SaladsMenuCard from "../SaladsMenuCard/SaladsMenuCard";

const SaladsMenu = () => {
  const [menus] = useMenu();
  const salads = menus.filter((item) => item.category === "salad");
  return (
    <div className="mb-12">
      <Cover img={saladsBg} title={"SALADS"}></Cover>
      <div className="flex flex-wrap justify-between gap-6 mt-12">
        {salads.map((menu) => (
          <div className="w-[48%]">
            <SaladsMenuCard key={menu._id} menu={menu}></SaladsMenuCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SaladsMenu;
