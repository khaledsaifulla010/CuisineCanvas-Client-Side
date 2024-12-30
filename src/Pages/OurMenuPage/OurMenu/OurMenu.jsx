import { Helmet } from "react-helmet-async";
import Cover from "../../../components/Shared/Cover/Cover";
import menuBg from "../../../assets/menu/menuBg.jpg";
import TodaysOffer from "../TodaysOffer/TodaysOffer";
const OurMenu = () => {
  return (
    <div>
      <Helmet>
        <title>CuisineCanvas || Our Menu</title>
      </Helmet>

      <Cover img={menuBg} title={"OUR MENU"}></Cover>
      <TodaysOffer></TodaysOffer>
    </div>
  );
};

export default OurMenu;
