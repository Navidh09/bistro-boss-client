import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import FoodCards from "../../../layout/Shared/cards/FoodCards";

const ChefChoice = () => {
  return (
    <section className="mb-20">
      <SectionTitle
        subHeading={"Should Try"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FoodCards
          img={img1}
          title={"Caeser Salad"}
          desc={"Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets."}
        ></FoodCards>

        <FoodCards
          img={img2}
          title={"Chargrilled Pizza"}
          desc={
            "Chargrilled chicken with avocado, baby gem lettuce, baby spinach, shallots, French beans, walnuts, croutons and a mustard dressing."
          }
        ></FoodCards>
        <FoodCards
          img={img3}
          title={"Sautéed Soup"}
          desc={
            "Sautéed breaded veal escalope with watercress, lemon and veal jus."
          }
        ></FoodCards>
      </div>
    </section>
  );
};

export default ChefChoice;
