import React from "react";
import NavBar from "../composants/NavBar";
import Footer from "../composants/Footer";
import BoutonTop from "../composants/BoutonTop";
import smart from "../assets/images/smart.png";
import smartD from "../assets/images/smartDetails.jpg";
import gate from "../assets/images/gate.jpg";
import gateS from "../assets/images/moteurcoul.jpg";
import s1 from "../assets/images/s1.jpg";
import s2 from "../assets/images/s2.jpg";
import s3 from "../assets/images/s3.jpg";
import cf from "../assets/images/cofr.jpg";
import sl from "../assets/images/solar.jpg";
import ph from "../assets/images/ph.jpg";
import sm from "../assets/images/smart.jpg";
import cam from "../assets/images/camera.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";

const Products = () => {
  return (
    <div className="font-Inter overflow-hidden">
      <NavBar />
      <BoutonTop />

      <section className="font-semibold">
        <div className="flex justify-center mt-3 md:mt-16 mb-5 md:mb-16">
          <h1
            data-aos="zoom-in"
            data-aos-delay="30"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-offset="200"
            className="text-4xl tracking-widest font-sans md:text-8xl text-center text-blue-900 md:mb-10"
          >
            SMART LOCK
          </h1>
        </div>
        <div className="flex items-center md:flex-row flex-col-reverse md:mb-40 ">
          <div className="md:pl-6 pl-6">
            <ul className="text-sm list-disc font-normal mt-2  md:text-xl md:px-14 md:py-5">
              <li className="md:mb-2">
                Fourni avec des cartes magnétiques + des encodeurs + économiseur
                d’énergie
              </li>
              <li className="md:mb-2">Ouverture par empreinte </li>
              <li className="md:mb-2">Ouverture par clavier à code </li>
              <li className="md:mb-2">
                {" "}
                Ouverture par téléphone (GSM) Ouverture par carte magnétique
              </li>
              <li className="md:mb-2"> Ouverture par wifi</li>
            </ul>
          </div>
          <div className="mx-10 md:mx-44 lg:mx-2">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={false}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper px-16 md:px-32 lg:px-56 "
            >
              <SwiperSlide>
                <img src={s1} className="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={s2} className="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={s3} className="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/*  */}
        <div className="mt-10 ">
          <div className="flex justify-center mb-16">
            <h1
              data-aos="zoom-in"
              data-aos-delay="30"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-offset="200"
              className="text-4xl md:text-8xl text-center text-blue-900 md:mb-10"
            >
              SMART CAR (GPS)
            </h1>
          </div>

          <div className="flex flex-col-reverse font-normal items-center md:grid md:grid-cols-2  md:mb-40 ">
            <div
              data-aos="fade-left"
              data-aos-delay="30"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="flex flex-col items-center justify-center py-6"
            >
              <div className="pl-4">
                <p className="md:text-2xl  text-xl">GPS tracker 
                  <span className="text-sm md:text-center md:text-base "> (
                  0ption Basic - Option Standard - Option Complète ) </span>
                </p>
                <br />
                <p className=" md:text-xl">
                  En plus des avantages d’un GPS normal, le Smart Car permet de
                  :
                </p> <br />
                <ul className="list-disc text-sm md:text-xl pl-12">
                  <li>Arrêter la voiture à distance</li>
                  <li>Savoir si le véhicule est en circulation</li>
                  <li>Limiter la vitesse de la voiture</li>
                  <li> Prévenir ses proches en cas d’accident ou de vol</li>
                  <li>
                    Contrôler vous-même votre véhicule, plus besoin
                    d’administrateur externe
                  </li>
                  <li>
                    Restreindre les mouvements du véhicule à une ville, une
                    commune, un quartier
                  </li>
                  <li>Capteur de choc en cas d'accident</li>
                  <li>Capteur de contrôle du niveau de carburant</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-6 ">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                // pagination={{
                //   clickable: true,
                // }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="col-start-2 col-span-4 rounded-lg"
              >
                <SwiperSlide>
                  <img src={smart} className="rounded-lg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg">
                  <img src={smartD} className="" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="">
          <div className="flex justify-center">
            <h1
              data-aos="zoom-in"
              data-aos-delay="30"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-offset="200"
              className="text-4xl md:text-8xl text-center text-blue-900 m-10  md:mt-16 md:mb-16"
            >
              GATE OPENER
            </h1>
          </div>

          <div className=" md:grid md:grid-cols-2 ">
            <div className="flex flex-col items-center mb-10 ">
              <p className="text-xl">Moteur à double battants</p>
              <img src={gate} className=" object-cover " alt="" />
              <p className="">Fourni avec un câble à 05 cores</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xl">Moteur coulissant</p>
              <img src={gateS} className="object-cover" alt="" />
              <p className="">
                Fourni avec une paire de photocellules
              </p>
            </div>
          </div>
          <div className="px-2 md:px-16 mt-3 md:pt-10">
            Nos portails motorisés sont hautement avancés en technologie avec:
            <br />
            Moteur dynamique Faible consommation d’énergie; <br /> Force de
            traction allant jusqu’à 02 tonnes; <br /> 04 Modes d’ouverture ultra
            sécurisé: Wifi, GSM, Clavier à code numérique et Bouton poussoir
            Contrôlez tout en un clic.
          </div>

        </div>

        <div className="mx-2 md:mt-40 ">
          <h1
            data-aos="zoom-in"
            data-aos-delay="30"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-offset="200"
            className="text-3xl md:text-8xl text-center text-blue-900 mt-10 mb-5 md:mb-20"
          >
            SECURITE ELECTRONIQUE
          </h1>
          <div className=" mb-10 md:mb-24">
            <div className="flex flex-col md:justify-around md:items-center md:flex-row">
              <div className="flex flex-col m-3">
                <p className="text-center text-base">SMART CAMERA</p>
                <img src={sm} alt="" className="" />
                <p className="text-center font-normal text-lg">
                  Wifi intégré Commande et communication à distance
                </p>
              </div>
              <div className="flex flex-col m-3">
                <p className="text-center text-base">CAMERA IP</p>
                <img src={cam} alt="" className=" object-cover" />
                <p className="md:mt-7 font-normal text-lg text-center">
                  Transmission en live Stockage longue durée communication à
                  distance
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="mx-2 md:mt-40 ">
          <h1
            data-aos="zoom-in"
            data-aos-delay="30"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-offset="200"
            className="text-4xl md:text-8xl text-center text-blue-900 mb-5 md:mb-24"
          >
            ENERGIE VERTE
          </h1>
          <div className="mb-24">
            <div className="md:grid md:grid-cols-3 md:grid-rows-7  gap-x-3 ">
              <div className="row-span-1 col-span-1 text-xl text-center">
                COFFRET CAFP
              </div>
              <div className="row-span-1 col-span-2 text-xl text-center">
                SYSTEME SOLAIRE
              </div>
              <div className="col-span-1 row-span-1 ">
                <img src={cf} alt="" className="h-full object-center" />
              </div>
              <div className="col-span-1 row-span-1  py-16">
                <img src={sl} className="h-full object-center" />
              </div>
              <div className="col-span-1 row-span-1 py-16">
                <img src={ph} className="" />
              </div>
              <div className="row-span-1 col-span-1 text-center">
                Correcteur de puissance Coffret 200 A ~ 400A ++ 380/ 220 VAC ++
                Monophasé / triphasé
              </div>
              <div className="row-span-1 col-span-2 text-center">
                PV 200W ~ 300W Avec Inverter hybride ++ Batteries longue durée
                ++ Monophasé / triphasé
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mb-10"></div>
      <BoutonTop />
      <Footer />
    </div>
  );
};

export default Products;
