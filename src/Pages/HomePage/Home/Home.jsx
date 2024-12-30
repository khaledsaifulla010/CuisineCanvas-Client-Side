import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import OnlineOrder from "../OnlineOrder/OnlineOrder";
import PopularMenus from "../PopularMenus/PopularMenus";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>CuisineCanvas || Home</title>
      </Helmet>
      <Banner></Banner>
      <OnlineOrder></OnlineOrder>
      <PopularMenus></PopularMenus>
    </div>
  );
};

export default Home;
