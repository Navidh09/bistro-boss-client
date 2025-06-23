const FoodCards = ({ img, title, desc, price }) => {
  return (
    <div className="card bg-[#F3F3F3] shadow-sm">
      <figure>
        <img className="h-auto object-contain" src={img} alt="Salad" />
        {price && (
          <p className="absolute top-5 font-semibold right-9 bg-black text-white px-5 py-3">
            ${price}
          </p>
        )}
      </figure>
      <div className="card-body text-center">
        <h2 className="font-semibold text-2xl">{title}</h2>
        <p className="w-4/5 mx-auto">{desc}</p>
        <div className="card-actions justify-center">
          <button className="btn mt-6 btn-ghost uppercase rounded-md border-b-4 border-b-[#BB8506] text-[#BB8506] text-xl font-medium py-5 px-8  bg-[#E8E8E8] shadow-2xl">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCards;
