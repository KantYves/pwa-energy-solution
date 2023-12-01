import React, { useEffect, useState } from "react";
import { IoIosArrowDropup } from "react-icons/io";

const BoutonTop = () => {

  const [boutonTop, setbtnTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 770) {
        setbtnTop(true);
      } else {
        setbtnTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return <div>
    {boutonTop&&(
         <button
         className="cursor-pointer bottom-5 right-5  fixed md:bottom-10 text-zinc-600  md:right-18 "
         onClick={scrollUp}
       >
         <IoIosArrowDropup className="text-blue-700"  size={48} />
       </button>
    )}
  </div>;
};

export default BoutonTop;
