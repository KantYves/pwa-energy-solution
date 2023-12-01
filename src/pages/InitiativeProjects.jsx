import React from "react";
import NavBar from "../composants/NavBar";
import Footer from "../composants/Footer";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import img2 from "../assets/images/init0.jpg";
import img3 from "../assets/images/init1.jpg";
import img4 from "../assets/images/init2.jpg";
import BoutonTop from "../composants/BoutonTop";

const InitiativeProjects = () => {
  return (
    <div className="font-Inter">
      <NavBar />
      <BoutonTop/>
      <h1
        data-aos="zoom-in"
        data-aos-delay="30"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-offset="200"
        className="text-4xl font-sans mt-5 font-semibold tracking-widest mb-2 md:text-8xl  text-center px-8 py-2 text-blue-900 md:mt10 md:mb-10 "
      >
        INITIATIVES PROJECTS
      </h1>
      <section className="grid grid-cols-6  md:px-52 ">
        <div className="col-start-2 col-span-4 rounded-lg">
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
            className={`{width:'100%'} rounded-2xl`}
          >
            <SwiperSlide>
              <img src={img2} alt="" />
              {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              iusto?
            </p> */}
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="" />
              {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              iusto?
            </p> */}
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="" />
              {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              iusto?
            </p> */}
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <div className="mx-4 md:mx-32 mt-10">
        <h2
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className=" text-2xl md:text-7xl text-center font-sans text-blue-900 md:p-4 font-semibold mb-5 mt-10"
        >
          HYBRID FUELLESS GENERATOR
        </h2>
        <p className="text-sm md:text-xl text-justify font-normal ">
          We have been researching magnetic system for motor and generator
          technology for the last 4 years. we have been researching different
          ways to produce electricity for home’s and to be affordable for the
          average home owner. We are very excited about our most recent
          invention! <br />
          Our invention consists of two parts; an electric motor and white
          magnetic generator. The motor is used to run the magnetic generator up
          to 1500 RPM and then motor is disconnected from the power. <br />
          After the motor is disconnected from the power, the magnetic generator
          produces all the energy and powers the electric motor, lights, a space
          heater etc. <br />
          The magnetic generator has coils of bifilar of copper wire in the
          stator and neodymium magnets in the rotor inside. When a magnet
          approaches a coil of copper wire, it induces a like polarity in the
          coil.
          <br />
          <br />
          For example: A magnets North pole will induce a North polarity in the
          coil and North repels North and that creates the motive force for the
          generator. This is known as the Lorentz Force. Permanent Magnets are
          Permanent: Permanent magnets only lose 1% of their power in 10 years.
          <br />
          <br />
          The generator is powered by permanent magnets and coils of copper wire
          using the Lorentz force. When a magnet approaches a coil of copper
          wire, it induces a like polarity in the coil (North induces North and
          North repels North). This repulsive force causes the generator rotor
          to spin and create electricity.
          <br />
          Physicists have no theory to explain where the energy that creates
          electron spin in permanent magnets comes from. Unexplained
          observations absolutely always precede theory.
        </p> <br />
        <p className="text-sm md:text-xl text-justify font-normal">
          The generator is powered by permanent magnets and coils of copper wire
          using the Lorentz force. When a magnet approaches a coil of copper
          wire, it induces a like polarity in the coil (North induces North and
          North repels North). This repulsive force causes the generator rotor
          to spin and create electricity. <br />
          Physicists have no theory to explain where the energy that creates
          electron spin in permanent magnets comes from. Unexplained
          observations absolutely always precede theory.
          <br />
          <br />
          Alternative Motor – Generator Technology for Home and Business! The
          generator is a hybrid electricity generator that produces clean, green
          energy 24/7/365 using Solar, Flywheel and Lithium Ion Batteries.
          <br />
          <br />
          Features of our Generator :
          <br />
        </p>
        <div
          data-aos="fade-left"
          data-aos-delay="30"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          className=""
        >
          <ul className="list-disc text-sm p-4 md:text-xl md:px-14 md:py-5">
            <li>It produces free electricity without any Fuel or gasoline. Only work by magnetic power.</li>
            <li> No heating problem and maintenance free</li>
            <li>It is available in single phase and three phase both with 50/60 HZ.</li>
            <li> It takes less than 1 min to get start and full run up.</li>
            <li> It is fully Digital controlled with automatic start ON/OFF system.</li>
            <li>It has emergency security system.</li>
            <li>It has no disturbing noise & covered with sound resistance Body.</li>
            <li> It is able to run almost 24/7 nonstop.</li>
            <li> It’s efficiency is almost 90%. So, no worries about output power.</li>
          </ul>
        </div>
      </div>
      <div className="mb-10"></div>

      <Footer />
    </div>
  );
};

export default InitiativeProjects;
