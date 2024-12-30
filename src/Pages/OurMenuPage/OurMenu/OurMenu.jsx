import { Helmet } from "react-helmet-async";
import Cover from "../../../components/Shared/Cover/Cover";
import menuBg from '../../../assets/menu/menuBg.jpg'
const OurMenu = () => {
  return (
    <div>
      <Helmet>
        <title>CuisineCanvas || Our Menu</title>
      </Helmet>
      
      <Cover img={menuBg} title={"OUR MENU"}></Cover>
    </div>
  );
};

export default OurMenu;
