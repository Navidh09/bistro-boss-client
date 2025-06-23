import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItems from "../../../components/menuItems/MenuItems";
import useMenu from "../../../hooks/useMenu";
import Buttons from "../../Menu/buttons/Buttons";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-20">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {popular.map((item) => (
          <MenuItems item={item} key={item._id}></MenuItems>
        ))}
      </div>
      <Buttons title={"view full menu"}></Buttons>
      <div className="bg-black text-white mt-12 text-center py-24 font-semibold text-5xl raleway">
        <p>Call Us: +88 0192345678910</p>
      </div>
    </section>
  );
};

export default PopularMenu;
