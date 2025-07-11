// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";

import { Rating } from "@smastrom/react-rating";
import axios from "axios";
import { useEffect, useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
// import required modules
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SectionTitle from "../../../components/sectionTitle/SectionTitle";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/reviews`).then((data) => {
      setReviews(data.data);
    });
  }, []);

  return (
    <section>
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-24 text-center flex flex-col items-center gap-8">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <RiDoubleQuotesL className="text-7xl" />
              <p className="text-xl text-[#444444] mb-2">{review.details}</p>
              <h3 className="uppercase text-[#CD9003] text-3xl font-semibold">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
