import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import bgOne from "../assets/banner-2 (1).jpg";
import bgTwo from "../assets/banner-5.jpg";
import bgThree from "../assets/banner-3.jpg";
import bgFour from "../assets/banner-6.jpg";
import sliderImg from "../assets/banner-4.jpg";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Home = () => {
  return (
    <>
      <section className="w-[80%] mx-auto mt-7 mb-10">
        <div className=" flex flex-row items-center justify-center gap-5 w-full ">
          <div className="flex flex-col gap-8 w-[25%] ">
            <img src={bgOne} alt="" />
            <img src={bgTwo} alt="" />
          </div>
          <div className="w-[50%]">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              freeMode={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[FreeMode, Pagination, Autoplay]}
            >
              <SwiperSlide>
                {" "}
                <img src={bgThree} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src={sliderImg} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex flex-col gap-7 w-[25%]">
            <img src={bgOne} alt="" />
            <img src={bgFour} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
