import React, { useEffect } from "react";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { LiaTimesSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";
import NewLogo from "../assets/images/NewLogo.jpeg";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t, i18n } = useTranslation();

  const onChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    for (
      let index = 0;
      index < document.getElementsByClassName("lang").length;
      index++
    ) {
      const element = document.getElementsByClassName("lang")[index];
      if (element.value === i18n.language) {
        element.setAttribute("selected", "true");
      }
    }
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b w-full py-2 z-40 top-0 left-0 font-Inter">
      <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full flex-wrap w-full">
        <img src={NewLogo} width={120} alt="Logo de PWA ENERGY"/>

        <div className="px-5">
          <button
            className="lg:hidden block text-4xl cursor-pointer transition"
            onClick={() => setOpen(!open)}
          >
            {open ? <LiaTimesSolid /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>

        <nav
          className={`${
            open ? "block border-t" : "hidden"
          } w-full lg:flex  lg:item-center lg:w-auto `}
        >
          <ul className="md:text-xl   text-gray-600 lg:flex lg:items-center ">
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "text-blue-700 font-semibold" : "")}
            >
              <li className="flex justify-center lg:px-5 p-2  hover:text-blue-700  ">
                {t("menu.home")}
              </li>
            </NavLink>
            <NavLink
              to="/about"
              className={(nav) => (nav.isActive ? "text-blue-700 font-semibold" : "")}
            >
              <li className="flex justify-center lg:px-5 p-2  hover:text-blue-700 ">
                {t("menu.about")}
              </li>
            </NavLink>
            <NavLink
              to="/projects"
              className={(nav) => (nav.isActive ? "text-blue-700 font-semibold" : "")}
            >
              <li className="flex justify-center lg:px-5 p-2  hover:text-blue-700 ">
                {t("menu.initiative")}
              </li>
            </NavLink>
            <NavLink
              to="/products"
              className={(nav) => (nav.isActive ? "text-blue-700 font-semibold" : "")}
            >
              <li className="flex justify-center lg:px-5 p-2  hover:text-blue-700 ">
                {t("menu.product")}
              </li>
            </NavLink>
            <NavLink
              to="/contact"
              className={(nav) => (nav.isActive ? "text-blue-700 font-semibold" : "")}
            >
              <li className="flex justify-center lg:px-5 p-2  hover:text-blue-700 ">
                {t("menu.contact")}
              </li>
            </NavLink>
            <li className="flex justify-center lg:px-5 p-2  hover:text-blue-700 ">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2 dark:border-gray-60 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={onChangeLanguage}
              >
                <option value="en" className="lang">
                  EN
                </option>
                <option value="fr" className="lang">
                  FR
                </option>
              </select>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default NavBar;
