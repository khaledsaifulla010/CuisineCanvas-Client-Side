import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import TodaysOfferCard from "../TodaysOfferCard/TodaysOfferCard";

const TodaysOffer = () => {
  const [menus] = useMenu();
  const todayOfferes = menus.filter((item) => item.category === "offered");
  return (
    <div className="mb-12 mt-12">
      <SectionTitle
        subHeading={"Dont Miss"}
        heading={"Todays Offers"}
      ></SectionTitle>
      <div className="flex flex-wrap justify-between gap-6 ">
        {todayOfferes.map((menu) => (
          <div className="w-[48%]">
            <TodaysOfferCard key={menu._id} menu={menu}></TodaysOfferCard>
          </div>
        ))}
      </div>
      <div className="mb-12 text-center">
        <button className="relative text-lg font-bold uppercase text-gray-800 tracking-wide">
          Order Your Favourite Food
          <div className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 w-24 border-b-2 border-gray-800 rounded-full"></div>
        </button>
      </div>
    </div>
  );
};

export default TodaysOffer;
