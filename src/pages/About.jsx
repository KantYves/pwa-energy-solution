import React from "react";
import NavBar from "../composants/NavBar";
import img0 from "../assets/images/abt.jpg";
import img2 from "../assets/images/imA2.jpg";
import img3 from "../assets/images/imA3.jpg";
import img4 from "../assets/images/imA4.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Footer from "../composants/Footer";
import BoutonTop from "../composants/BoutonTop";

const About = () => {
  return (
    <section className="font-Inter">
      <NavBar/>
      <BoutonTop/>
        <div className="flex px-2 font-sans flex-col items-center md:flex md:mb-10 xl:mb-20 ">
          <div
            className="flex flex-col  py-6 lg:px-20"
          >
            <div className="relative mb-2 md:mb-5 px-10 py-2 md:pb-5">
              <div data-aos="zoom-in"
                  data-aos-delay="30"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-offset="200" className="text-3xl tracking-widest font-sans md:text-8xl font-semibold text-center  text-blue-900  ">
                ABOUT US
              </div>
            </div>
           
            <p className="px-4 md:px-2 text-sm mb-2 text-center text-zinc-950  md:text-2xl">
              PWA Energy Solution is a privately-owned Canadian company that
              significantly involve and invest in Research and Development (R&D)
              project which include integrated design, engineering, procurement
              and project management in the Renewable Energy & Agriculture
              domains. Some of our research projects are funded by ourselves.
              Our philosophy is to work with clients to become an extension of
              their own team – listening to their needs, engaging them in the
              process while minimizing risk for both teams.
            </p>
          </div>
          <div className="px-10 md:px-20  xl:rounded-xl">
            <img
              id="about"
              src={img0}
              alt=""
              className="object-cover rounded-lg xl:w-full"
            />
          </div>
        </div>

        <div className="px-2">
          <div className="m-2 p-3   text-justify  lg:text-lg lg:py-6 md:px-20 md:py-6">
            <div className="mx-2 mb-3 md:mb-10 text-center">
              <h2
                data-aos="fade-left"
                data-aos-delay="30"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-offset="200"
                className="text-center tracking-widest font-sans text-3xl md:text-8xl font-semibold text-blue-900 "
              >
                OUR MISSION
              </h2>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="30"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              className="text-sm font-sans md:text-2xl "
            >
              Throughout the history of mankind science has helped us to
              transform our world into a better place to live and thrive. All
              our activities today are the result of scientific influences and
              innovations. But along with the better quality of living for many
              people in developed countries, our modern world is facing
              externalities associated with human activities that become
              possible due to scientific breakthroughs of the previous century.
              <br />
              <br />
              Today’s world is using oil, gas and coal to satisfy our energy
              needs for electricity, heat, clean water and food. All that
              dependence on fossil fuels has created the greatest environmental
              challenge that we have ever faced – the climate change. Pollutants
              in our air, drained rivers, contamination of natural environment
              are all the result of excessive consumption of natural resources
              that we have been restlessly ignoring for many years. <br />
              <br />
              The growing global consensus over seriousness of climate change
              has led to the conclusion of the international climate agreement
              in Paris in December 2015 that served as a momentum for
              governments to implement policies for alternative energy
              development and educate people about potential consequences if
              this problem keeps being ignored. <br />
              <br />
              We at PWA ENERGS believe that scientific achievements of our
              generation can and must be integrated in today’s world and, as
              never before, must replace the outdated ways of how we satisfy our
              basic physiological needs. As supply of fossil fuels is
              unavoidably running out and prices for oil and gas are expected to
              rise within the next decade, the dependence on cheap and reliable
              energy sources is undoubtedly inevitable. <br />
              <br />
              That is why our company is developing new alternatives that will
              address the environmental challenges of our time and help to
              preserve our planet for future generations. The technologies
              behind PWA ENERGS products are focused on renewable energy
              solutions and relate to the most necessary and essential needs of
              humanity to survive. Our inventions are utilized in the area of
              energy generation, water pump, agriculture technologies <br />
              <br />
              We believe that humans all over the planet must have cheap and
              reliable access to at least three basic needs for survival and
              prosperity – electricity, food and clean water. Our mission is to
              revolutionize the technologies we are utilizing today for a better
              tomorrow for all of us. <br /> <br />
              In underdeveloped regions with or without transmission
              infrastructure, the need for cheap power is the greatest,
              including electricity for:
              <ul className="list-disc p-4 text-sm md:text-xl md:px-14 md:py-5">
                <li>Refrigeration to preserve food</li>
                <li>
                  Cooking that eliminates smoke from burning coal, dung or wood
                </li>
                <li>Lighting to extend the hours for work and study</li>
                <li>Power for farms, industrial and home uses</li>
                <li>Transportation electric cycles, cars and trucks</li>
              </ul>
            </div>
          </div>

          <div className="m-2 p-4  lg:text-lg lg:py-6 md:px-20 md:py-1">
            <div className="text-center mb-3  md:mb-10">
              <h1
                data-aos="fade-left"
                data-aos-delay="30"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-offset="200"
                className=" tracking-widest font-sans text-3xl font-semibold md:text-8xl text-blue-900 mb-2"
              >
                LABORATORY
              </h1>
            </div>
            <div
              data-aos="zoom-in-down"
              data-aos-delay="30"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              className="text-sm md:text-2xl mt-5 font-normal"
            >
              The Laboratory serves as an effective platform for implementation
              of long-term technology researches to provide conceptually new
              competitive solutions and create unique products in in the field
              of agriculture and electrical engineering. <br /> <br />
              Our in-house Laboratory offers a range of testing techniques,
              including technology concept test runs, 3D modeling and precision
              studies of the devices under development, prototype assembly and
              pilot testing, revision and demonstration. The laboratory is
              equipped with a set of high-end testing machines, such as
              oscillographs, voltampermeters and phase meters, standard-voltage
              generators, tachometer, logic analyzers, power meters, temperature
              gauges, electromagnetic background meters, and others. <br />
              <br />
              Tests are performed on a customized laboratory bench. The detailed
              performance data set model gives a comprehensive understanding of
              the development, its strengths, weaknesses and limitations, thus
              enabling to make well calibrated decisions regarding the selection
              of materials and details to be used, and the commercialization
              feasibility. <br /> <br />
              Below is just a brief list of performed tests and assessments:
              <div
                data-aos="fade-left"
                data-aos-delay="30"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
              >
                <ul className="list-disc text-sm p-4   md:text-xl md:px-14 md:py-5">
                  <li>
                    Transverse, longitudinal bending and twisting loads tests
                  </li>
                  <li>
                    Individual components (cylinders, shafts, seals, bushings,
                    sensors) tests
                  </li>
                  <li>Lighting to extend the hours for work and study</li>
                  <li>Noise and vibration tests</li>
                  <li>Fatigue wear test</li>
                  <li>Destruction test</li>
                </ul>
              </div>
            </div>
            <br />
          </div>


          <div className="grid grid-cols-6 md:px-60 ">
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
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="col-start-2 col-span-4 rounded-lg"
            >
              <SwiperSlide>
                <img src={img3} className="rounded-lg" alt="" />
              </SwiperSlide>
              <SwiperSlide className="rounded-lg">
                <img
                  src={img2}
                  className=""
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={img4}
                  className="rounded-lg"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="mb-10"></div>
      <Footer />
    </section>
  );
};

export default About;
