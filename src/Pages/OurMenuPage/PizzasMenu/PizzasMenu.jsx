import Cover from "../../../components/Shared/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import PizzasMenuCard from "../PizzasMenuCard/PizzasMenuCard";
import pizzasBg from "../../../assets/menu/pizza-bg.jpg";

const PizzasMenu = () => {
  const [menus] = useMenu();
  const pizzas = menus.filter((item) => item.category === "pizza");
  return (
    <div className="mb-12">
      <Cover img={pizzasBg} title={"PIZZAS"}></Cover>
      <div className="flex flex-wrap justify-between gap-6 mt-12">
        {pizzas.map((menu) => (
          <div className="w-[48%]">
            <PizzasMenuCard key={menu._id} menu={menu}></PizzasMenuCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PizzasMenu;
