import React from "react";
import Navbar from "~/customComponents/Navbar";
import Footer from "~/customComponents/Footer";
import { motion } from "framer-motion";
import { pricingResources } from "~/resources/pricing";

const PricingPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="h-fit w-full bg-[#232627] py-10 text-white ">
        <div className="my-24 flex h-fit w-full flex-col items-center justify-center">
          <h1 className="w-[70%] text-center font-inikaBold text-5xl">
            {pricingResources.title.English}
          </h1>
          <p className="w-[70%] text-center font-inikaRegular text-3xl">
            {pricingResources.fitPlans.English}
          </p>
        </div>

        <div className=" flex h-fit w-full justify-center">
          <div className="flex h-fit w-[80%] flex-row justify-center 2xl:w-[100%] xl:hidden  ">
            {/* Left Section */}
            <div className="mx-4 mb-8 flex h-auto w-[220px] items-end justify-center 2xl:w-[510px]   ">
              <div className=" h-fit ">
                <div>
                  <p className="text-xl">
                    {pricingResources.majorFeatures.English}
                  </p>
                  <div className="h-1 w-full bg-white"></div>
                  <div className="flex flex-col">
                    <div className="my-[2.5px] flex h-9 w-auto items-center text-xl">
                      {pricingResources.tool.English}
                    </div>
                    <div className="my-[2.5px] flex h-9 w-auto items-center text-xl">
                      {pricingResources.chatbot.English}
                    </div>
                    <div className="my-[2.5px] flex h-9 w-auto items-center text-xl">
                      {pricingResources.conferencing.English}
                    </div>
                    <div className="my-[2.5px] flex h-9 w-auto items-center text-xl">
                      {pricingResources.library.English}
                    </div>
                    <div className="my-[2.5px] flex h-9 w-auto items-center text-xl">
                      {pricingResources.access.English}
                    </div>
                    <div className="my-[2.5px] flex h-9 w-auto items-center text-xl">
                      {pricingResources.custom.English}
                    </div>
                    <div className="my-[2.5px] flex h-9 w-auto items-center text-xl">
                      {pricingResources.patientCap.English}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="m-4 flex h-fit w-[75%] flex-row justify-center 2xl:w-[95%]  ">
              {/* Pricng Card 1 */}
              <div className="mx-4 flex h-[600px] w-[270px] flex-col justify-between rounded-[16px] bg-[#303334] pb-[15px]">
                <div className="mt-5 flex h-56 flex-col px-5">
                  <div className="mb-2 text-[24px] font-bold">
                    {pricingResources.starter.English}
                  </div>
                  <div className="h-22 text-[16px] leading-tight ">
                    {pricingResources.starterDescription.English}
                  </div>
                </div>

                <div className="px-5 pb-5">
                  <div className=" mb-2 text-2xl">
                    <span className="text-[40px] font-bold">
                      {pricingResources.starterPrice.English}
                    </span>{" "}
                    <span className="text-[16px] text-[#BFBFBF]">
                      {pricingResources.month.English}
                    </span>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="/create-organization?plan=starter"
                    className="mb-2 flex h-14 items-center justify-center rounded-[8px] bg-[#4CA9EE] text-center text-xl font-bold"
                  >
                    {pricingResources.getStarted.English}
                  </motion.a>
                </div>

                <div className="flex flex-col px-5">
                  <div className="m-[2.5px] flex h-9 w-auto items-center justify-center rounded-[8px] bg-[#282828] text-xl font-bold">
                    &#x2713;
                  </div>
                  <div className="m-[2.5px] flex h-9 w-auto items-center justify-center rounded-[8px] bg-[#282828] text-xl font-bold">
                    &#x2713;
                  </div>
                  <div className="m-[2.5px] flex h-9 w-auto items-center justify-center rounded-[8px] bg-[#282828] text-xl font-bold">
                    &#x2713;
                  </div>
                  <div className="m-[2.5px] flex h-9 w-auto items-center justify-center rounded-[8px] bg-[#282828] text-xl font-bold">
                    &#x2713;
                  </div>
                  <div className="m-[2.5px] flex h-9 w-auto items-center justify-center rounded-[8px] bg-[#282828] text-xl font-bold"></div>
                  <div className="m-[2.5px] flex h-9 w-auto items-center justify-center rounded-[8px] bg-[#282828] text-xl font-bold"></div>
                  <div className="m-[2.5px] flex h-9 w-auto items-center justify-center rounded-[8px] bg-[#282828] text-xl font-bold">
                    100
                  </div>
                </div>
              </div>

              {/* Pricng Card 2 */}
              <div className="mx-4 flex h-[600px] w-[270px] flex-col justify-between rounded-[16px] bg-[#303334] pb-[15px]">
                <div className="mt-5 flex h-56 flex-col px-5">
                  <div className="mb-2 text-[24px] font-bold">
                    {pricingResources.pro.English}
                  </div>
                  <div className="h-22 text-[16px] leading-tight ">
                    {pricingResources.proDescription.English}
                  </div>
                </div>

                <div className="px-5 pb-5">
                  <div className=" mb-2 text-2xl">
                    <span className="text-[40px] font-bold">
                      {pricingResources.proPrice.English}
                    </span>{" "}
                    <span className="text-[16px] text-[#BFBFBF]">
                      {pricingResources.month.English}
                    </span>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href=""
                    className="mb-2 flex h-14 items-center justify-center rounded-[8px] bg-[#4CA9EE] text-center text-xl font-bold"
                  >
                    {pricingResources.getStarted.English}
                  </motion.a>
                </div>

                <div className="flex flex-col px-5">
                  <div className="m-[2.5px] flex h-9 w-auto items-center justify-center rounded-[8px] bg-[#282828] text-xl font-bold">
                    &#x2713;
                  </div>
                  <div className="m-[2.5px] flex h-9 w-auto items-center justify-center rounded-[8px] bg-[#282828] text-xl font-bold">
                    &#x2713;
                  </div>
                  <div className="m-[2.5px] flex h-9 w-auto items-center justify-center rounded-[8px] bg-[#282828] text-xl font-bold">
                    &#x2713;
                  </div>
                  <div className="m-[2.5px] flex h-9 w-auto items-center justify-center rounded-[8px] bg-[#282828] text-xl font-bold">
                    &#x2713;
                  </div>
                  <div className="m-[2.5px] flex h-9 w-auto items-center justify-center rounded-[8px] bg-[#282828] text-xl font-bold">
                    &#x2713;
                  </div>
                  <div className="m-[2.5px] flex h-9 w-auto items-center justify-center rounded-[8px] bg-[#282828] text-xl font-bold"></div>
                  <div className="m-[2.5px] flex h-9 w-auto items-center justify-center rounded-[8px] bg-[#282828] text-xl font-bold">
                    1000
                  </div>
                </div>
              </div>

              {/* Pricng Card 3 */}
              <div className="mx-4 flex h-[600px] w-[270px] flex-col justify-between rounded-[16px] bg-[#303334] pb-[15px]">
                <div className="mt-5 flex h-56 flex-col px-5">
                  <div className="mb-2 text-[24px] font-bold">
                    {pricingResources.requestQuote.English}
                  </div>
                  <div className="h-22 text-[16px] leading-tight ">
                    {pricingResources.requestQuoteDescription.English}
                  </div>
                </div>

                <div className="px-5 pb-5">
                  <div className=" mb-2 text-center text-2xl ">
                    <span className="text-center text-[16px] text-[#BFBFBF]">
                      {pricingResources.custPrice.English}
                    </span>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href=""
                    className="mb-2 flex h-14 items-center justify-center rounded-[8px] bg-[#4CA9EE] text-center text-xl font-bold"
                  >
                    {pricingResources.requestQuote.English}
                  </motion.a>
                </div>

                <div className="flex flex-col px-5">
                  <div className="m-[2.5px] flex h-9 w-auto items-center justify-center rounded-[8px] bg-[#282828] text-xl font-bold">
                    &#x2713;
                  </div>
                  <div className="m-[2.5px] flex h-9 w-auto items-center justify-center rounded-[8px] bg-[#282828] text-xl font-bold">
                    &#x2713;
                  </div>
                  <div className="m-[2.5px] flex h-9 w-auto items-center justify-center rounded-[8px] bg-[#282828] text-xl font-bold">
                    &#x2713;
                  </div>
                  <div className="m-[2.5px] flex h-9 w-auto items-center justify-center rounded-[8px] bg-[#282828] text-xl font-bold">
                    &#x2713;
                  </div>
                  <div className="m-[2.5px] flex h-9 w-auto items-center justify-center rounded-[8px] bg-[#282828] text-xl font-bold">
                    &#x2713;
                  </div>
                  <div className="m-[2.5px] flex h-9 w-auto items-center justify-center rounded-[8px] bg-[#282828] text-xl font-bold">
                    &#x2713;
                  </div>
                  <div className="m-[2.5px] flex h-9 w-auto items-center justify-center rounded-[8px] bg-[#282828] text-xl font-bold">
                    By case
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LG breakpoint  */}
          <div className="hidden h-fit w-full justify-center xl:flex">
            <div className="flex h-fit flex-wrap justify-center">
              {/* Card 1*/}
              <div className="m-2 flex h-[640px] w-80 flex-col rounded-[16px] bg-[#303334]  sm:w-72">
                <div className="mt-5 flex h-32 flex-col px-5">
                  <div className="mb-2 text-[24px] font-bold">
                    {pricingResources.starter.English}
                  </div>
                  <div className="h-22 text-[16px] leading-tight ">
                    {pricingResources.starterDescription.English}
                  </div>
                </div>

                <div className="flex h-32 flex-col px-5 pb-5">
                  <div className=" mb-2 h-16 text-2xl">
                    <span className="text-[40px] font-bold">
                      {pricingResources.starterPrice.English}
                    </span>{" "}
                    <span className="text-[16px] text-[#BFBFBF]">
                      {pricingResources.month.English}
                    </span>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href=""
                    className="mb-2 flex h-14 items-center justify-center rounded-[8px] bg-[#4CA9EE] text-center text-xl font-bold"
                  >
                    {pricingResources.getStarted.English}
                  </motion.a>
                </div>

                <div className="flex flex-col px-5">
                  <div className="justify-left flex flex-row items-start ">
                    <div className="m-[2.5px] flex h-10 w-10 items-center justify-center rounded-full bg-[#282828] text-xl font-bold">
                      &#x2713;
                    </div>
                    <span className="ml-3 flex h-full items-center text-xl">
                      {" "}
                      {pricingResources.tool.English}{" "}
                    </span>
                  </div>
                  <div className="justify-left flex flex-row items-start ">
                    <div className="m-[2.5px] flex h-10 w-10 items-center justify-center rounded-full bg-[#282828] text-xl font-bold">
                      &#x2713;
                    </div>
                    <span className="ml-3 flex h-full items-center text-xl">
                      {" "}
                      {pricingResources.chatbot.English}{" "}
                    </span>
                  </div>
                  <div className="justify-left flex flex-row items-start">
                    <div className="m-[2.5px] flex h-10 w-10 items-center justify-center rounded-full bg-[#282828] text-xl font-bold">
                      &#x2713;
                    </div>
                    <span className="ml-3 flex h-full items-center text-xl">
                      {" "}
                      {pricingResources.conferencing.English}{" "}
                    </span>
                  </div>
                  <div className="justify-left flex flex-row items-start ">
                    <div className="m-[2.5px] flex h-10 w-10 items-center justify-center rounded-full bg-[#282828] text-xl font-bold">
                      &#x2713;
                    </div>
                    <span className="ml-3 flex h-full items-center text-xl">
                      {" "}
                      {pricingResources.library.English}{" "}
                    </span>
                  </div>
                  <div className="justify-left flex flex-row items-start ">
                    <div className="m-[2.5px] flex h-10 w-10 items-center justify-center rounded-full bg-[#282828] text-xl font-bold">
                      &#x2713;
                    </div>
                    <span className="ml-3 flex h-full items-center text-xl">
                      {" "}
                      100 {pricingResources.patientCap.English}{" "}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2*/}
              <div className="m-2 flex h-[640px] w-80 flex-col rounded-[16px] bg-[#303334]  sm:w-72">
                <div className="mt-5 flex h-32 flex-col px-5">
                  <div className="mb-2 text-[24px] font-bold">
                    {pricingResources.pro.English}
                  </div>
                  <div className="h-22 text-[16px] leading-tight ">
                    {pricingResources.proDescription.English}
                  </div>
                </div>

                <div className="flex h-32 flex-col px-5 pb-5">
                  <div className=" mb-2 h-16 text-2xl">
                    <span className="text-[40px] font-bold">
                      {pricingResources.proPrice.English}
                    </span>{" "}
                    <span className="text-[16px] text-[#BFBFBF]">
                      {pricingResources.month.English}
                    </span>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href=""
                    className="mb-2 flex h-14 items-center justify-center rounded-[8px] bg-[#4CA9EE] text-center text-xl font-bold"
                  >
                    {pricingResources.getStarted.English}
                  </motion.a>
                </div>

                <div className="flex flex-col px-5">
                  <div className="justify-left flex flex-row items-start ">
                    <div className="m-[2.5px] flex h-10 w-10 items-center justify-center rounded-full bg-[#282828] text-xl font-bold">
                      &#x2713;
                    </div>
                    <span className="ml-3 flex h-full items-center text-xl">
                      {" "}
                      {pricingResources.tool.English}{" "}
                    </span>
                  </div>
                  <div className="justify-left flex flex-row items-start ">
                    <div className="m-[2.5px] flex h-10 w-10 items-center justify-center rounded-full bg-[#282828] text-xl font-bold">
                      &#x2713;
                    </div>
                    <span className="ml-3 flex h-full items-center text-xl">
                      {" "}
                      {pricingResources.chatbot.English}{" "}
                    </span>
                  </div>
                  <div className="justify-left flex flex-row items-start">
                    <div className="m-[2.5px] flex h-10 w-10 items-center justify-center rounded-full bg-[#282828] text-xl font-bold">
                      &#x2713;
                    </div>
                    <span className="ml-3 flex h-full items-center text-xl">
                      {" "}
                      {pricingResources.conferencing.English}{" "}
                    </span>
                  </div>
                  <div className="justify-left flex flex-row items-start ">
                    <div className="m-[2.5px] flex h-10 w-10 items-center justify-center rounded-full bg-[#282828] text-xl font-bold">
                      &#x2713;
                    </div>
                    <span className="ml-3 flex h-full items-center text-xl">
                      {" "}
                      {pricingResources.library.English}{" "}
                    </span>
                  </div>
                  <div className="justify-left flex flex-row items-start ">
                    <div className="m-[2.5px] flex h-10 w-10 items-center justify-center rounded-full bg-[#282828] text-xl font-bold">
                      &#x2713;
                    </div>
                    <span className="ml-3 flex h-full items-center text-xl">
                      {" "}
                      {pricingResources.access.English}{" "}
                    </span>
                  </div>
                  <div className="justify-left flex flex-row items-start ">
                    <div className="m-[2.5px] flex h-10 w-10 items-center justify-center rounded-full bg-[#282828] text-xl font-bold">
                      &#x2713;
                    </div>
                    <span className="ml-3 flex h-full items-center text-xl">
                      {" "}
                      1000 {pricingResources.patientCap.English}{" "}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 3*/}
              <div className="m-2 flex h-[640px] w-80 flex-col rounded-[16px] bg-[#303334]  sm:w-72">
                <div className="mt-5 flex h-32 flex-col px-5">
                  <div className="mb-2 text-[24px] font-bold">
                    {pricingResources.requestQuote.English}
                  </div>
                  <div className="h-22 text-[16px] leading-tight ">
                    {pricingResources.requestQuoteDescription.English}
                  </div>
                </div>

                <div className="flex h-32 flex-col px-5 pb-5">
                  <div className="mb-2 flex h-16 justify-center text-2xl">
                    <span className="text-[16px] text-[#BFBFBF]">
                      {pricingResources.custPrice.English}
                    </span>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    href=""
                    className="mb-2 flex h-14 items-center justify-center rounded-[8px] bg-[#4CA9EE] text-center text-xl font-bold"
                  >
                    {pricingResources.requestQuote.English}
                  </motion.a>
                </div>

                <div className="flex flex-col px-5">
                  <div className="justify-left flex flex-row items-start ">
                    <div className="m-[2.5px] flex h-10 w-10 items-center justify-center rounded-full bg-[#282828] text-xl font-bold">
                      &#x2713;
                    </div>
                    <span className="ml-3 flex h-full items-center text-xl">
                      {" "}
                      {pricingResources.tool.English}{" "}
                    </span>
                  </div>
                  <div className="justify-left flex flex-row items-start ">
                    <div className="m-[2.5px] flex h-10 w-10 items-center justify-center rounded-full bg-[#282828] text-xl font-bold">
                      &#x2713;
                    </div>
                    <span className="ml-3 flex h-full items-center text-xl">
                      {" "}
                      {pricingResources.chatbot.English}{" "}
                    </span>
                  </div>
                  <div className="justify-left flex flex-row items-start">
                    <div className="m-[2.5px] flex h-10 w-10 items-center justify-center rounded-full bg-[#282828] text-xl font-bold">
                      &#x2713;
                    </div>
                    <span className="ml-3 flex h-full items-center text-xl">
                      {" "}
                      {pricingResources.conferencing.English}{" "}
                    </span>
                  </div>
                  <div className="justify-left flex flex-row items-start ">
                    <div className="m-[2.5px] flex h-10 w-10 items-center justify-center rounded-full bg-[#282828] text-xl font-bold">
                      &#x2713;
                    </div>
                    <span className="ml-3 flex h-full items-center text-xl">
                      {" "}
                      {pricingResources.library.English}{" "}
                    </span>
                  </div>
                  <div className="justify-left flex flex-row items-start ">
                    <div className="m-[2.5px] flex h-10 w-10 items-center justify-center rounded-full bg-[#282828] text-xl font-bold">
                      &#x2713;
                    </div>
                    <span className="ml-3 flex h-full items-center text-xl">
                      {" "}
                      {pricingResources.access.English}{" "}
                    </span>
                  </div>
                  <div className="justify-left flex flex-row items-start ">
                    <div className="m-[2.5px] flex h-10 w-10 items-center justify-center rounded-full bg-[#282828] text-xl font-bold">
                      &#x2713;
                    </div>
                    <span className="ml-3 flex h-full items-center text-xl">
                      {" "}
                      {pricingResources.custom.English}{" "}
                    </span>
                  </div>
                  <div className="justify-left flex flex-row items-start ">
                    <div className="m-[2.5px] flex h-10 w-10 items-center justify-center rounded-full bg-[#282828] text-xl font-bold">
                      &#x2713;
                    </div>
                    <span className="ml-3 flex h-full items-center text-xl">
                      {" "}
                      1000 {pricingResources.patientCap.English}{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;
