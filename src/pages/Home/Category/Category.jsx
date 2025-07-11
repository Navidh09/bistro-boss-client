import "./category.css";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import category1 from "../../../assets/home/slide1.jpg";
import category2 from "../../../assets/home/slide2.jpg";
import category3 from "../../../assets/home/slide3.jpg";
import category4 from "../../../assets/home/slide4.jpg";
import category5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"order online"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper cinzel"
      >
        <SwiperSlide>
          <img src={category1} alt="" />
          <h3 className="text-center uppercase text-4xl text-shadow-black text-shadow-2xs -mt-24">
            salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={category3} alt="" />
          <h3 className="text-center uppercase text-2xl text-shadow-black text-shadow-2xs -mt-24">
            soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={category2} alt="" />
          <h3 className="text-center uppercase text-2xl text-shadow-black text-shadow-2xs -mt-24">
            pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={category4} alt="" />
          <h3 className="text-center uppercase text-2xl text-shadow-black text-shadow-2xs -mt-24">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={category5} alt="" />
          <h3 className="text-center uppercase text-2xl text-shadow-black text-shadow-2xs -mt-24">
            salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
