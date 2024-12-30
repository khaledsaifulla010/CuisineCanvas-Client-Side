import Cover from "../../../components/Shared/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import SoupsMenuCard from "../SoupsMenuCard/SoupsMenuCard";
import soupsBg from '../../../assets/menu/soup-bg.jpg'

const SoupsMenu = () => {
    const [menus] = useMenu();
    const soups = menus.filter((item) => item.category === "soup");
    return (
      <div className="mb-12">
        <Cover img={soupsBg} title={"SOUPS"}></Cover>
        <div className="flex flex-wrap justify-between gap-6 mt-12">
          {soups.map((menu) => (
            <div className="w-[48%]">
              <SoupsMenuCard key={menu._id} menu={menu}></SoupsMenuCard>
            </div>
          ))}
        </div>
      </div>
    );
};

export default SoupsMenu;