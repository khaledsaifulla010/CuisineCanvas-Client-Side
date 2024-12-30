import { Helmet } from "react-helmet-async";
import Cover from "../../../components/Shared/Cover/Cover";
import menuBg from "../../../assets/menu/menuBg.jpg";
import TodaysOffer from "../TodaysOffer/TodaysOffer";
import DessertsMenu from "../DessertsMenu/DessertsMenu";
import PizzasMenu from "../PizzasMenu/PizzasMenu";
const OurMenu = () => {
  return (
    <div>
      <Helmet>
        <title>CuisineCanvas || Our Menu</title>
      </Helmet>

      <Cover img={menuBg} title={"OUR MENU"}></Cover>
      <TodaysOffer></TodaysOffer>
      <DessertsMenu></DessertsMenu>
      <PizzasMenu></PizzasMenu>
    </div>
  );
};

export default OurMenu;
