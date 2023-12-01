import React from "react";
import img0 from "../assets/images/abtImg.jpg";
import img1 from "../assets/images/treeP.jpg";
import img2 from "../assets/images/donation.jpg";
import "aos/dist/aos.css";
import BoutonTop from "./BoutonTop";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const ContentHome = () => {
  const { t } = useTranslation();

  return (
    <section className=" font-Inter">
      {/* Who are you */}
     
      <div className="flex flex-col items-center  md:flex mb-5 md:mb-20 xl:mb-5 ">
        <div
          data-aos="fade-left"
          data-aos-delay="30"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="flex flex-col lg:px-10"
        >
          <h1 className="text-base md:mt-2 mb-2 md:text-7xl font-sans font-bold text-center px-5 py-2 text-blue-900  md:mb-10  ">
          {t("whoareyou")}
          </h1>
          <p className="px-2 md:px-10  text-xs mb-2 text-zinc-950 md:text-2xl">
          {t("thePwa")}
          </p><br />
          <p className="px-2 md:px-10 text-xs mb-2 text-zinc-950 md:text-2xl">
          {t("our")}
          </p><br />
          <p className="px-2 md:px-10 text-xs mb-2 text-zinc-950 md:text-2xl">
          {t("working")}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center md:flex md:mt-20 mt-5  md:mb-5 xl:mb-5 ">
        <div
          data-aos="fade-left"
          data-aos-delay="30"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="flex flex-col lg:px-20"
        >
          <h1 className="text-base md:mt-2 mb-2 md:text-7xl md:px-0 font-sans  font-bold  text-center px-2 py-2 text-blue-900  md:mb-10  ">
          {t("whatwe")} <br /> {t("reinventing")}
          </h1>
          <p className="px-2 text-xs mb-2 text-zinc-950 md:text-2xl">
          {t("imagine")}
          </p> <br />
          <p className="px-2 text-xs mb-2 text-zinc-950 md:text-2xl">
          {t("imaginethe")}
          </p>
          <ul className="pl-10 text-xs md:text-xl list-disc">
            <li>
            {t("whereno")}
            </li>
            <li>
            {t("wherema")}
            </li>
            <li>
            {t("Whereit")}
            </li>
            <li>
            {t("wherethe")}
            </li>
            <li>
            {t("imaginea")}
            </li>
            <li>{t("imagineaw")}</li>
          </ul>
          <p className="m-7 font-bold text-sm md:text-xl ">
          {t("whe")}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center md:flex md:mt-10 mt-5  md:mb-5 xl:mb-5 ">
        <div
          data-aos="fade-left"
          data-aos-delay="30"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="flex flex-col lg:px-20"
        >
          <h1 className="text-base md:mt-2 mb-2 md:text-8xl font-sans  font-bold text-center px-10 py-2 text-blue-900  md:mb-10  ">
          {t("theproblem")}
          </h1>
          <p className="px-2 text-xs mb-2 text-zinc-950 md:text-2xl">
          {t("theparis")}
          </p>{" "}
          <br />
          <p className="px-2 text-xs mb-2 md:text-2xl text-zinc-950 ">
          {t("thedeveloping")}
          </p>
          <p className="p-5 text-xs text-zinc-950 md:text-2xl">
          {t("electricity")}
          </p>
          <ul className="pl-10 list-disc text-xs md:text-xl">
            <li>{t("completely")}</li>
            <li>{t("provide")}</li>
            <li>{t("complete")}</li>
            <li>{t("recy")}</li>
            <li>
            {t("ima")}
            </li>
            <li>{t("providew")}</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center md:flex md:mt-10 mt-5  md:mb-5 xl:mb-5 ">
        <div
          data-aos="fade-left"
          data-aos-delay="30"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="flex flex-col lg:px-20"
        >
          <h1 className="text-base md:mt-2 mb-2 md:text-8xl font-sans font-bold text-center px-10 py-2 text-blue-900  md:mb-10  ">
          {t("thesolution")}
          </h1>
          <p className="px-2 text-xs mb-2 text-zinc-950 md:text-2xl">
          {t("pwaenergs")}
          </p>
          <br />
          <p className="px-2 text-xs mb-2 text-zinc-950 md:text-2xl">
          {t("pwaen")}
          </p>
          <p className="p-5 text-xs font-semibold text-zinc-950 md:text-2xl">
          {t("ourg")}
          </p>
        </div>
      </div>
      <BoutonTop/>
      <div className="mb-16"></div>
    </section>

  );
};

export default ContentHome;
