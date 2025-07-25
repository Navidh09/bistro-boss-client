import FoodCards from "../../../layout/Shared/cards/FoodCards";

const OrderCards = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {items.map((item) => (
        <FoodCards
          key={item._id}
          img={item.image}
          title={item.name}
          desc={item.recipe}
          price={item.price}
        ></FoodCards>
      ))}
    </div>
  );
};

export default OrderCards;
