import React from "react";
import solarbnr from "../assets/images/solarBnr.jpg";
import img2 from "../assets/images/img3.jpg";
// import img3 from "../assets/images/img3.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { HashLink as Link } from "react-router-hash-link";
import { HiArrowNarrowDown } from "react-icons/hi";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Banniere = () => {

  const { t } = useTranslation();

  return (
    <section className=" mb-5 md:mb-10 bg-opacity-25 md:grid-cols-1">
      {/* <div className="flex flex-col justify-center items-center gap-y-5 mx-5  lg:px-20">
        <h1 data-aos="zoom-out-right" data-aos-delay="30"data-aos-duration="1000"data-aos-easing="ease-in-out" className="text-center text-xl font-extrabold leading-tight text-blue-900 md:text-4xl lg:text-6xl">
          Welcome to <br /> PWA ENERGY SOLUTION
        </h1>
        <Link 
            data-aos="fade-up"data-aos-delay="30"data-aos-duration="1000"data-aos-easing="ease-in-out"
             to="#about" smooth>
          <button
            type="button"
            className="animate-bounce px-3 py-1 flex items-center rounded-md bg-blue-800 md:px-7 md:py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
              More
            <HiArrowNarrowDown className="text-lg md:text-xl" />
          </button>
        </Link>
      </div> */}

      <div className="">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className=""
        > 
          <SwiperSlide className="relative">
            <div>
              <img src={solarbnr} alt="" className=" object-cover "/>
              <div className="absolute  inset-0  bg-gray-950 bg-opacity-70 flex items-center flex-col justify-start p-3 md:pt-20 font-sans h-full w-full text-center">
                <p data-aos="zoom-in" data-aos-duration="1000"  className="text-2xl font-thin text-gray-400 md:text-3xl md:pb-10"> {t("welcome")}</p>
                <p
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-delay="300"
                 className="text-4xl font-sans tracking-wide text-gray-400 font-bold md:text-9xl">
                  PWA ENERGY SOLUTION
                  </p>
              <NavLink  to="/contact">
              <button
                  type="submit"
                  value="Send"
                  className="mt-5 text-xs md:mt-14 p-2 text-center  rounded-lg border-current border-solid font-JetBrainsMono md:text-sm  text-gray-50 shadow-sm border-white	border-2 hover:scale-105 tracking-wide "
                >
                 CONTACT US
                </button>
              </NavLink>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export default Banniere;
