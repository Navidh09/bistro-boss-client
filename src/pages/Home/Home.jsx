import { Helmet } from "react-helmet-async";

import Banner from "../../components/Banner";
import Category from "./Category/Category";
import ChefChoice from "./chefChoice/ChefChoice";
import Description from "./description/Description";
import Featured from "./Featured/Featured";
import PopularMenu from "./popularMenu/PopularMenu";
import Testimonials from "./testimonials/Testimonials";

const Home = () => {
  return (
    <div className="bg-white text-black">
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Description></Description>
      <PopularMenu></PopularMenu>
      <ChefChoice></ChefChoice>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
