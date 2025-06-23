const MenuItems = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="text-black flex space-x-8">
      <img
        className="w-[118px] rounded-r-full rounded-b-full"
        src={image}
        alt=""
      />
      <div>
        <h3 className="text-xl cinzel">{name} ------------------</h3>
        <p className="w-3/4 text-[#737373]">{recipe}</p>
      </div>
      <p className="text-[#BB8506]">${price}</p>
    </div>
  );
};

export default MenuItems;
