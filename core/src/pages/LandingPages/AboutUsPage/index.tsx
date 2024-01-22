import React from "react";
import Navbar from "../../../customComponents/Navbar";
import Footer from "../../../customComponents/Footer";
import { motion } from "framer-motion";
import { aboutUsResources } from "~/resources/aboutus";

const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-[#232627]">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <div className="text-white">
        <div className="flex h-[40vh] items-center justify-center md:h-[35vh] md:pt-24 ">
          <div className="w-[50%] xl:w-[70%] md:w-[85%]">
            <h1 className="text-center font-inikaBold text-5xl md:pb-5 md:text-3xl">
              {aboutUsResources.welcome.English}
            </h1>
            <p className="text-center font-inikaRegular text-2xl md:text-xl">
              {aboutUsResources.welcomeDescription.English}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center pt-32 md:pb-16 md:pt-16 ">
          <div className="relative h-auto w-full md:block  ">
            <div className="absolute top-0 h-auto md:relative ">
              {/* div with the cards */}
              <div className="flex h-56 w-screen flex-row items-center justify-center md:h-full md:flex-col  ">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="m-4 flex h-96 w-80 flex-col items-center rounded-2xl bg-[#303334] p-4 pt-6 shadow-xl 2xl:w-72 lg:h-72 lg:w-60 md:w-96 sm:w-60"
                >
                  <div>
                    <img
                      src="/icons/newBlueHeartIcon.svg"
                      alt="icon"
                      className="w-16 lg:w-8"
                    />
                  </div>
                  <h1 className="mb-4 font-inikaBold text-5xl font-bold xl:text-4xl lg:text-3xl">
                    {aboutUsResources.trust.English}
                  </h1>
                  <p className="font-inikaRegular text-xl lg:text-lg">
                    {aboutUsResources.trustDescription.English}
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="m-4 flex h-96 w-80 flex-col items-center rounded-2xl bg-[#303334] p-4 pt-6 shadow-xl 2xl:w-72 lg:h-72 lg:w-60 md:w-96 sm:w-60"
                >
                  <div>
                    <img
                      src="/icons/newHandshakeIcon.svg"
                      alt="icon"
                      className="w-16 lg:w-8"
                    />
                  </div>
                  <h1 className="mb-4 font-inikaBold text-5xl font-bold xl:text-4xl lg:text-3xl">
                    {aboutUsResources.partnership.English}
                  </h1>
                  <p className="font-inikaRegular text-xl lg:text-lg">
                    {aboutUsResources.partnershipDescription.English}
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="m-4 flex h-96 w-80 flex-col items-center rounded-2xl bg-[#303334] p-4 pt-6 shadow-xl 2xl:w-72 lg:h-72 lg:w-60 md:w-96 sm:w-60"
                >
                  <div>
                    <img
                      src="/icons/newHealingCircleIcon2.svg"
                      alt="icon"
                      className="w-16 lg:w-8"
                    />
                  </div>
                  <h1 className="mb-4 font-inikaBold text-5xl font-bold xl:text-4xl lg:text-3xl">
                    {aboutUsResources.culture.English}
                  </h1>
                  <p className="font-inikaRegular text-xl lg:text-lg">
                    {aboutUsResources.cultureDescription.English}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <img
            src="/whiteWave.svg"
            alt="a white wave graphic"
            className="-z-1 w-full"
          />
          <div className="flex h-full w-full justify-center bg-white pb-40 pt-64 lg:pb-20 md:px-5 md:pt-12">
            <div className="flex flex-col items-center ">
              <h1 className="flex w-[70%] justify-center pb-8 text-center font-inikaBold text-5xl text-black md:w-[90%] md:text-3xl">
                {aboutUsResources.chooseHow.English}
              </h1>

              <div className="flex flex-col ">
                <div className="mb-8 flex flex-row px-2">
                  <div className="flex items-center justify-center">
                    <div className="flex aspect-[1/1] h-20 w-20 items-center justify-center rounded-full bg-[#4CA9EE] lg:h-12 lg:w-12">
                      <img
                        src="/icons/video.svg"
                        alt="video icon"
                        className="aspect-[1/1] h-14 w-14 lg:h-8 lg:w-8"
                      ></img>
                    </div>
                  </div>

                  <span className="flex items-center pl-8 text-3xl font-medium text-black 2xl:text-2xl lg:text-xl md:text-lg">
                    {aboutUsResources.video.English}
                  </span>
                </div>

                <div className="mb-8 flex flex-row px-2">
                  <div className="flex items-center justify-center">
                    <div className="flex aspect-[1/1] h-20 w-20 items-center justify-center rounded-full bg-[#4CA9EE] lg:h-12 lg:w-12">
                      <img
                        src="/icons/phone.svg"
                        alt="phone icon"
                        className="aspect-[1/1] h-14 w-14 lg:h-8 lg:w-8"
                      ></img>
                    </div>
                  </div>

                  <span className="flex items-center pl-8 text-3xl font-medium text-black 2xl:text-2xl lg:text-xl md:text-lg">
                    {aboutUsResources.phone.English}
                  </span>
                </div>

                <div className="mb-8 flex flex-row px-2">
                  <div className="flex items-center justify-center">
                    <div className="flex aspect-[1/1] h-20 w-20 items-center justify-center rounded-full bg-[#4CA9EE] lg:h-12 lg:w-12">
                      <img
                        src="/icons/texts.svg"
                        alt="texting bubbles icon"
                        className="aspect-[1/1] h-14 w-14 lg:h-8 lg:w-8"
                      ></img>
                    </div>
                  </div>

                  <span className="flex items-center pl-8 text-3xl font-medium text-black 2xl:text-2xl lg:text-xl md:text-lg">
                    {aboutUsResources.text.English}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1 */}
      <div className="mt-40 flex h-auto w-full justify-center bg-[#232627] pb-40 md:mt-0 md:pb-16">
        <div className="w-[75%] py-24 xl:w-[65%] lg:w-[70%] md:w-full">
          <h1 className="mb-12 text-center font-inikaBold text-6xl text-white 2xl:text-5xl md:text-3xl">
            {aboutUsResources.howItWorks.English}
          </h1>
          <div className="flex justify-center">
            {/* Card Holder */}
            <div className="grid grid-cols-2 gap-7 lg:grid-cols-1 lg:gap-1">
              {/* Card 1 */}
              <div className="w-fit">
                <div className="relative m-5 flex h-64 w-96 items-center justify-center rounded-2xl bg-[#303334] xl:h-32 xl:w-72 lg:h-44 lg:w-96">
                  <p className="pl-15 pr-5 text-3xl leading-8 text-white xl:text-lg xl:leading-6 lg:text-lg">
                    {aboutUsResources.step1.English}
                  </p>
                  <span className="white absolute -left-10 h-20 w-20 rounded-full bg-[#4CA9EE] font-inikaBold text-5xl">
                    <div className="flex h-full w-full items-center justify-center text-white">
                      1
                    </div>
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="w-fit">
                <div className="relative m-5 flex h-64 w-96 items-center justify-center rounded-2xl bg-[#303334] xl:h-32 xl:w-72 lg:h-44 lg:w-96">
                  <p className="pl-15 pr-5 text-3xl leading-8 text-white xl:text-lg xl:leading-6 lg:text-lg">
                    {aboutUsResources.step2.English}
                  </p>
                  <span className="white absolute -left-10 h-20 w-20 rounded-full bg-[#4CA9EE] font-inikaBold text-5xl">
                    <div className="flex h-full w-full items-center justify-center text-white">
                      2
                    </div>
                  </span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="w-fit">
                <div className="relative m-5 flex h-64 w-96 items-center justify-center rounded-2xl bg-[#303334] xl:h-32 xl:w-72 lg:h-44 lg:w-96">
                  <p className="pl-15 pr-5 text-3xl leading-8 text-white xl:text-lg xl:leading-6 lg:text-lg">
                    {aboutUsResources.step3.English}
                  </p>
                  <span className="white absolute -left-10 h-20 w-20 rounded-full bg-[#4CA9EE] font-inikaBold text-5xl">
                    <div className="flex h-full w-full items-center justify-center text-white">
                      3
                    </div>
                  </span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="w-fit">
                <div className="relative m-5 flex h-64 w-96 items-center justify-center rounded-2xl bg-[#303334] xl:h-32 xl:w-72 lg:h-44 lg:w-96">
                  <p className="pl-15 pr-5 text-3xl leading-8 text-white xl:text-lg xl:leading-6 lg:text-lg">
                    {aboutUsResources.step4.English}
                  </p>
                  <span className="white absolute -left-10 h-20 w-20 rounded-full bg-[#4CA9EE] font-inikaBold text-5xl">
                    <div className="flex h-full w-full items-center justify-center text-white">
                      4
                    </div>
                  </span>
                </div>
              </div>

              {/* Card 5 */}
              <div className="w-fit">
                <div className="relative m-5 flex h-64 w-96 items-center justify-center rounded-2xl bg-[#303334] xl:h-32 xl:w-72 lg:h-44 lg:w-96">
                  <p className="pl-15 pr-5 text-3xl leading-8 text-white xl:text-lg xl:leading-6 lg:text-lg">
                    {aboutUsResources.step5.English}
                  </p>
                  <span className="white absolute -left-10 h-20 w-20 rounded-full bg-[#4CA9EE] font-inikaBold text-5xl">
                    <div className="flex h-full w-full items-center justify-center text-white">
                      5
                    </div>
                  </span>
                </div>
              </div>

              {/* Card 6 */}
              <div className="w-fit">
                <div className="relative m-5 flex h-64 w-96 items-center justify-center rounded-2xl bg-[#303334] xl:h-32 xl:w-72 lg:h-44 lg:w-96">
                  <p className="pl-15 pr-5 text-3xl leading-8 text-white xl:text-lg xl:leading-6 lg:text-lg">
                    {aboutUsResources.step6.English}
                  </p>
                  <span className="white absolute -left-10 h-20 w-20 rounded-full bg-[#4CA9EE] font-inikaBold text-5xl">
                    <div className="flex h-full w-full items-center justify-center text-white">
                      6
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default AboutUsPage;
