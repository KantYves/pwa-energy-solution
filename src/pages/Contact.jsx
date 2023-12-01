import React, { useRef } from "react";
import NavBar from "../composants/NavBar";
import Footer from "../composants/Footer";
import imgcontact from "../assets/images/cntct.jpg";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { MdOutlineLocationCity } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import BoutonTop from "../composants/BoutonTop";

const Contact = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "DaHU6Mqmq7-yZ906W",
        "template_nmszyws",
        form.current,
        "VWnYc8PA-3E_QjoWnUK79"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message envoyé");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="font-Inter">
      <NavBar />
      <BoutonTop/>
      <section className="mb-0 ">
        <div className="mx-auto max-w-2xl mt-2 mb-10 space-y-3 text-center">
          <p
            data-aos="zoom-in"
            data-aos-delay="30"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-offset="200"
            className="md:text-7xl font-bold font-sans tracking-wide text-blue-900 text-4xl"
          >
            READ TO TALK ?
          </p>
          <p
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            data-aos-delay="1000"
            data-aos-easing="ease-in-out"
            className="tracking-normal text-sm md:text-lg text-blue-900"
          >
            Do you have a big idea ? <br /> We can help with
          </p>
        </div>
        <div className="grid grid-cols-1 gap-0 my-4  bg-white bg-opacity-25 md:grid-cols-2 xl:grid-cols-2">
          <div className="px-5 md:px-10 md:rounded-3xl">
            <img
              src={imgcontact}
              alt=""
              className="h-full w-full rounded-lg object-cover  md:h-full md:w-full xl:w-full"
            />
          </div>

          {/* Formulaire */}
          <div className="lg:px-20 px-5">
            <form
              action="#"
              ref={form}
              onSubmit={sendEmail}
              method="POST"
              className="mx-auto mt-5 max-w-xl sm:mt-9 lg:mt-9 "
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm md:text-xl  leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="user_name"
                      id="first-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm md:text-xl leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="user_lastName"
                      id="last-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm md:text-xl leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="user_email"
                      id="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm md:text-xl leading-6 text-gray-900"
                  >
                    Phone number
                  </label>
                  <div className="relative mt-2.5">
                    <input
                      type="tel"
                      name="user_number"
                      id="phone-number"
                      className="block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm md:text-xl leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  value="Send"
                  className="w-full text-center px-3 py-1 rounded-md bg-blue-800 md:px-7 md:py-2 text-sm  text-white shadow-sm hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 -tracking-tighter"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Our adresse */}
        <div className="mt-10 md:mt-20">
          <div
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease"
            className="flex items-center justify-center md:m-16 "
          >
            <h4 className="text-3xl m-6 md:mb-6 font-bold font-sans leading-tight text-blue-900 md:text-8xl ">
              OURS ADRESSES
            </h4>
          </div>
          <div className="grid grid-cols-1 mx-5 gap-y-5 md:grid-cols-3 md:mb-5">
            <div className="">
              <div className="flex justify-center mx-10 items-center gap-2 ">
                <MdOutlineLocationCity size={22} className="text-blue-900" />
                <p className="text-base md:text-xl">Location</p>
              </div>
              <p className="mx-5 text-xs text-center md:text-base">
                Maryland, United State of America (USA) <br />
                Grand-Bassam, Cote d’Ivoire (detailed address is hidden to avoid
                unsolicited visits; only scheduled visits will be approved)
              </p>
            </div>
            <div className="">
              <div className="flex mx-10 justify-center items-center gap-x-2 ">
                <MdEmail size={22} className="text-blue-900" />{" "}
                <p className="text-base  md:text-xl">Email</p>
              </div>
              <p className="mx-5 text-center">
                <a href="#" className="text-blue-800 mx-5 text-xs md:text-base break-words">
                  info@pwaenergysolution.com
                </a>
              </p>
            </div>
            <div>
              <div className="flex justify-center mx-10 items-center gap-2 ">
                <BsTelephoneOutboundFill size={18} className="text-blue-900" />
                <p className="text-base  md:text-xl">Phone</p>
              </div>
              <p className="mx-5 mb-5 text-xs text-center md:text-base">
                Respect the time zone difference when making a direct call.
                <br />
                General inquiries in English: <br />
                <strong> PWA ENERGS Office,</strong> <br />
                +225 77 07 07 06 (UTC+00:00) <br />
                +1 (240) 584-1076 (UTC – 04:00) <br />
                Commercial and Technical questions in English/French Karim Palm,
                CEO <br />
                +1(240) 584-1076 or +225 77 07 07 06 (WhatsApp, Viber)
              </p>
            </div>
          </div>
        </div>

{/* Localisation Map */}
<section className="">

        <div className="mapouter flex items-center ">
          <div className="gmap_canvas  w-full">
            <iframe
              className="gmap_iframe"
              width="100%"
              height={370}
              src="https://maps.google.com/maps?width=660&amp;height=400&amp;hl=en&amp;q=5.215609,-3.782794&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            {/* <a href="https://connectionsgame.org/">Connections NYT</a> */}
          </div>
        </div>
</section>

      </section>

      <Footer />
    </div>
  );
};

export default Contact;
