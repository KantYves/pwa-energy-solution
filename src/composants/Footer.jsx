import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="p-4  bg-slate-950 md:p-8 font-light md:tracking-widest lg:p-10 mt-0">
      {/* <hr className="mt-14" /> */}
      <div className="mx-auto max-w-screen-xl text-center">
        <div className="mx-auto mb-7 w-full flex justify-center gap-10 mt-8 text-gray-400 max-w-screen-xl text-center">
          <BsFacebook className="text-gray-400 hover:text-gray-600 cursor-pointer hover:scale-110 text-2xl  md:text-4xl" />
          <BsTwitter className="text-gray-400 hover:text-gray-600 cursor-pointer hover:scale-110 text-2xl  md:text-4xl" />
          <BsLinkedin className="text-gray-400 hover:text-gray-600 cursor-pointer hover:scale-110 text-2xl  md:text-4xl" />
        </div>
        <span className="text-xl md:text-base  text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 <a href="#">PWA ENERGS SOLUTION</a>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
