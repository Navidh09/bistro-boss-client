import PropTypes from "prop-types";
import { Link } from "react-router";

import MenuItems from "../../../components/menuItems/MenuItems";
import Cover from "../../../layout/Shared/cover/Cover";
import Buttons from "../buttons/Buttons";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="my-20">
      {title && (
        <Cover
          img={img}
          title={title}
          desc={"Would you like to try a dish?"}
        ></Cover>
      )}
      <div className="grid md:grid-cols-2 gap-6 mx-16 mt-15">
        {items.map((item) => (
          <MenuItems item={item} key={item._id}></MenuItems>
        ))}
      </div>
      <Link to={title ? `/order/${title}` : `/order/salads`}>
        <Buttons title={"ORDER YOUR FAVOURITE FOOD"}></Buttons>
      </Link>
    </div>
  );
};

MenuCategory.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string,
  img: PropTypes.string,
};

export default MenuCategory;
