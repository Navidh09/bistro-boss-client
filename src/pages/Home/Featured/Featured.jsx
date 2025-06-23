import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured-item text-white pb-20 pt-4 bg-fixed">
      <div className="bg-black/60 pb-10 z-10">
        <SectionTitle
          subHeading={"Check it out"}
          heading={"FROM OUR MENU"}
        ></SectionTitle>
        <div className="md:flex mx-auto space-x-12 justify-center items-center ">
          <img className="w-96" src={featured} alt="featureImage" />
          <div className="w-96">
            <h3 className="text-xl">March 20,2025</h3>
            <h3 className="text-xl">WHERE CAN I GET SOME?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn mt-8 btn-outline uppercase rounded-md border-0 border-b-4 border-b-white text-xl font-semibold py-5 px-8">
              Read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
