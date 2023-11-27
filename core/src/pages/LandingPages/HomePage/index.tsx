import React from "react";
import Navbar from "../../../customComponents/Navbar";
import Footer from "../../../customComponents/Footer";
import { motion } from "framer-motion";
import { homepageResources } from "../../../itlText/homepage";

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Splashscreen/Hero */}
      <div className="md:16 w-full bg-[#141718] px-32 pb-32 pt-40 lg:px-24 lg:pb-2 lg:pt-4 ">
        <div className="flex h-full items-center justify-center ">
          <div className="h-[400px] w-[80%] lg:w-[95%]">
            <div className="flex h-full justify-between ">
              <div className="flex h-full w-full items-center justify-center ">
                <div>
                  <div className="">
                    <motion.div
                      initial={{ x: -120 }}
                      animate={{ x: 0 }}
                      transition={{ duration: 0.3, ease: "easeIn" }}
                      className="flex flex-row"
                    >
                      <motion.p className="text-5xl font-medium text-white lg:text-3xl">
                        {homepageResources.specific.English}{" "}
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl font-bold text-sky-500 lg:text-3xl "
                      >
                        &nbsp;{homepageResources.needs.English}
                      </motion.p>
                    </motion.div>
                    <motion.h3
                      initial={{ x: -120 }}
                      animate={{ x: 0 }}
                      transition={{ duration: 0.35, ease: "easeIn" }}
                      className="text-5xl font-medium text-white lg:text-3xl "
                    >
                      {homepageResources.require.English}
                    </motion.h3>
                    <motion.h3
                      initial={{ x: -120, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, ease: "easeIn" }}
                      className="text-5xl font-bold text-sky-500 lg:text-3xl "
                    >
                      {homepageResources.solutions.English}
                    </motion.h3>
                  </div>
                  <div>
                    <motion.a
                      whileHover={{ scale: 1.1, backgroundColor: "#045de9" }}
                      className="my-6 flex h-14 w-72 items-center justify-center rounded-full bg-blue-500 lg:my-4 lg:h-12 sm:w-64 md:w-48"
                      href="/about-us"
                    >
                      <span className="text-center text-xl font-bold text-white">
                        {homepageResources.pricing.English}
                      </span>
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="flex h-full w-full items-center justify-center sm:hidden">
                <div className="flex h-[420px] w-[420px] items-center justify-center rounded-full bg-stone-700 shadow lg:h-64 lg:w-64 md:h-48 md:w-48">
                  <img
                    className=""
                    alt="Bison Graphic"
                    src="/images/Bison.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blue Waves */}
      <div className="relative w-full bg-[#141718] text-white">
        <img
          className="w-full md:aspect-[1/1] md:h-full md:object-cover"
          alt="blue curved lines graphic"
          src="/images/BlueWaves.svg"
        ></img>
        <div className="absolute inset-0 m-32 flex flex-col items-center justify-center xl:m-16 lg:m-4">
          <p className="font-inikaBold text-6xl font-bold text-white 2xl:text-5xl  xl:text-3xl">
            {homepageResources.here.English}
          </p>
          <div className="my-4 h-[5px] w-[25%] rounded-full bg-white lg:my-2 lg:h-[3px]"></div>
          <p className="px-32 text-center font-inikaRegular text-4xl font-medium 2xl:text-2xl lg:px-12 lg:text-xl lg:leading-tight">
            {homepageResources.hereDescription.English}
          </p>
        </div>
      </div>

      {/* Info Section */}
      <div className="flex flex-col bg-[#141718] px-32 py-16 xl:px-20 md:px-2 ">
        {/* Section 1 */}
        <div className="mb-4 flex justify-center text-white md:pt-8">
          <div className="flex flex-row md:flex-col-reverse">
            <div className="mx-20 flex-initial xl:mx-10 md:mx-8">
              <div className="flex h-full w-[450px] flex-col justify-center xl:w-[300px] md:w-[100%]">
                <h1 className="font-inikaBold text-5xl font-bold">
                  {homepageResources.whyUs.English}
                </h1>
                <p className="font-inikaRegular text-xl">
                  {homepageResources.whyUsDescription.English}
                </p>
              </div>
            </div>
            <div className="flex w-full justify-center">
              <div className=" mx-20 h-96 w-96 flex-initial xl:mx-10 xl:h-64 xl:w-64 md:mx-4">
                <img
                  className="aspect-[1/1]"
                  src="/images/Wolf.svg"
                  alt="wolf graphic"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="mb-4 flex justify-center text-white md:pt-8">
          <div className="flex flex-row md:flex-col">
            <div className="flex w-full justify-center">
              <div className=" mx-20 h-96 w-96 flex-initial xl:mx-10 xl:h-64 xl:w-64 md:mx-4">
                <img
                  className="aspect-[1/1]"
                  src="/images/Bear.svg"
                  alt="wolf graphic"
                />
              </div>
            </div>
            <div className="mx-20 flex-initial xl:mx-10 md:mx-8">
              <div className="flex h-full w-[450px] flex-col justify-center xl:w-[300px] md:w-[100%]">
                <h1 className="font-inikaBold text-5xl font-bold">
                  {homepageResources.whyDo.English}
                </h1>
                <p className="font-inikaRegular text-xl">
                  {homepageResources.whyDoDescription.English}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="mb-4 flex justify-center text-white md:pt-8">
          <div className="flex flex-row md:flex-col-reverse ">
            <div className="mx-20 flex-initial xl:mx-10 md:mx-8">
              <div className="flex h-full w-[450px] flex-col justify-center xl:w-[300px] md:w-[100%]">
                <h1 className="font-inikaBold text-5xl font-bold">
                  {homepageResources.howItWorks.English}
                </h1>
                <p className="font-inikaRegular text-xl">
                  {homepageResources.howItWorksDescription.English}
                </p>
              </div>
            </div>
            <div className="flex w-full justify-center">
              <div className=" mx-20 h-96 w-96 flex-initial xl:mx-10 xl:h-64 xl:w-64 md:mx-4">
                <img
                  className="aspect-[1/1]"
                  src="/images/Moose.svg"
                  alt="wolf graphic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
