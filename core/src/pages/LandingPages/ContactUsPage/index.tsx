import React from "react";
import Navbar from "~/customComponents/Navbar";
import Footer from "~/customComponents/Footer";
import FAQS from "~/customComponents/FAQS";
import { motion, AnimatePresence } from "framer-motion";
import { Inter } from "next/font/google";
import { BiPlusMedical, BiMinus } from "react-icons/bi";
import FAQComponent from "../../../customComponents/FAQS/FAQComponent";
import { faq } from "../../../data/faq";

const ContactUsPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="relative z-0 flex h-[1250px] w-full flex-row md:h-full md:flex-col">
        <div className="relative w-[45%] flex-1 bg-[#000000] p-[7%] md:w-full">
          <div>
            <h1 className="mb-4 text-[60px] font-bold leading-tight">
              Contact Us
            </h1>
            <p className="mb-14 font-inikaRegular text-[24px] leading-7">
              Reach out to us with any questions you have using the form below.
              Enter your name, email and mesage and we will get back to you as
              soon as possible.
            </p>
          </div>
          <div>
            <form>
              <div className="relative z-10 flex flex-col">
                <input
                  className="mb-4 rounded-full px-4 pb-3 pt-2 text-white"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                />

                <input
                  className="mb-4 rounded-full px-4 pb-3 pt-2 text-white"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />

                <textarea
                  className="mb-4 resize-none rounded-3xl px-4 py-3 text-white"
                  name="message"
                  id="message"
                  placeholder="Message"
                  cols={30}
                  rows={10}
                ></textarea>

                <div className="z-2 ml-8 flex h-full items-center justify-center lg:ml-4">
                  <motion.a
                    whileHover={{ scale: 1.05, backgroundColor: "#045de9" }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-16 w-48 items-center justify-center rounded-full bg-blue-500 shadow-md lg:h-12 lg:w-32"
                    href="/confirmation"
                  >
                    <span className="text-center text-2xl font-bold">
                      Submit
                    </span>
                  </motion.a>
                </div>
              </div>
            </form>
          </div>
          <div className="md:hidden">
            <div
              className="absolute bottom-0 right-0 rounded-full bg-[#306083] p-48 text-[#306083] opacity-75"
              style={{ transform: "translate(35%, 35%)" }}
            >
              <></>
            </div>
            <div
              className="absolute bottom-44 right-44 rounded-full bg-[#4CA9EEBF] p-36 text-[#4CA9EEBF]"
              style={{ transform: "translate(35%, 35%)" }}
            >
              <></>
            </div>
          </div>
        </div>

        <div className="flex-2 z-2 w-[55%] bg-[#141414] p-[7%] md:w-full">
          <div className="flex flex-col">
            <div className="w-[100%] text-left">
              <h1 className="mb-8 text-[60px] font-bold leading-tight">
                FAQ's
              </h1>
              <FAQComponent faq={faq.faq1} />
              <FAQComponent faq={faq.faq2} />
              <FAQComponent faq={faq.faq3} />
              <FAQComponent faq={faq.faq4} />
              <FAQComponent faq={faq.faq5} />
              <FAQComponent faq={faq.faq6} />
              <FAQComponent faq={faq.faq7} />
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-2">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUsPage;
