import { Helmet } from "react-helmet-async";

import menuImg from "../../assets/menu/banner3.jpg";
import dessertBg from "../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../assets/menu/pizza-bg.jpg";
import saladBg from "../../assets/menu/salad-bg.jpg";
import soupBg from "../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";
import Cover from "../../layout/Shared/cover/Cover";
import MenuCategory from "./menuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();

  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");

  return (
    <div className="bg-white text-black">
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* main menu */}
      <Cover
        img={menuImg}
        title={"OUR MENU"}
        desc={"Would you like to try a dish?"}
      ></Cover>
      <SectionTitle
        subHeading={"Don't miss"}
        heading={"TODAY'S OFFER"}
      ></SectionTitle>
      {/* offered menu */}
      <MenuCategory items={offered}></MenuCategory>
      {/* desserts menu */}
      <MenuCategory
        img={dessertBg}
        items={desserts}
        title={"desserts"}
      ></MenuCategory>
      {/* pizza menu */}
      <MenuCategory
        img={pizzaBg}
        items={pizzas}
        title={"pizzas"}
      ></MenuCategory>
      {/* salads menu */}
      <MenuCategory
        img={saladBg}
        items={salads}
        title={"salads"}
      ></MenuCategory>
      {/* soups menu */}
      <MenuCategory img={soupBg} items={soups} title={"soups"}></MenuCategory>
    </div>
  );
};

export default Menu;
