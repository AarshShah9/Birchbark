import { clinicLandingResources1 } from "~/resources/clinic-landing1";
import { motion } from "framer-motion";
import React from "react";
import { useFormContext } from "react-hook-form";
import { formProps } from "~/pages/app/patient/patient-form";

const LandingPage1 = ({ next, language, setLanguage }: formProps) => {
  const { setValue } = useFormContext();

  const handleLandingPage1Click = (clicked: string): void => {
    if (clicked === "wellness") {
      setValue("clickedWellness", true);
      setValue("clickedChatWithDoctor", false);
      next();
      return;
    }
    if (clicked === "chatWithDoctor") {
      setValue("clickedChatWithDoctor", true);
      setValue("clickedWellness", false);
      next();
      return;
    }
  };

  return (
    <div className="min-h-screen w-full" id="chiefBackground">
      <div className="z-2 w-full">
        <div className="z-10 ml-12 flex h-[10vh] flex-initial p-6">
          <img
            className="h-full"
            alt="Birchbark Health Logo"
            src="/images/BirchbarkLogo3.svg"
          />
        </div>
        <div className="z-10 flex min-h-[90vh] flex-col items-center justify-center p-16 font-inter lg:p-8">
          <div
            className=" rounded-lg p-16 "
            style={{ backgroundColor: "rgba(150, 150, 150, 0.75)" }}
          >
            <motion.h1 
              className="mb-8 text-center text-7xl font-bold text-white md:text-4xl"
              whileHover={{ color: "#D5D5D5", scale: 1.05 }}  
            >
              {language === "Blackfoot"
                ? clinicLandingResources1.title.Blackfoot
                : clinicLandingResources1.title.English}
              <button
                className="text-sm font-light"
                onClick={() => {
                  if (language === "Blackfoot") {
                    setLanguage("English");
                  } else {
                    setLanguage("Blackfoot");
                  }
                }}
              >
                <img
                  src="/icons/ArrowSwitchIcon.svg"
                  alt="switch button"
                  className="h-6 w-6"
                />
              </button>
            </motion.h1>
            <h2 className="mb-8 text-center font-inter text-4xl text-white md:text-2xl">
              {clinicLandingResources1.greeting.English}
            </h2>
            <div className=" flex flex-wrap items-center justify-center gap-6">
              <motion.button
                id="clickedWellness"
                onClick={() => handleLandingPage1Click("wellness")}
                whileHover={{ scale: 1.05 }}
                className="flex h-64 w-64 flex-col items-center justify-center rounded-xl bg-[#303334] shadow-lg"
              >
                <h3 className="font-inikaRegular text-2xl text-white">
                  {clinicLandingResources1.content.English}
                </h3>
                <div className="h-38 w-38 rounded-full bg-[#4CA9EE] shadow-md">
                  <div>
                    <img
                      className="p-10 h-full w-full"
                      alt="Psychologist Icon"
                      src="/icons/BookIcon.svg"
                    />
                  </div>
                </div>
              </motion.button>
              <motion.button
                id="clickedChatWithDoctor"
                onClick={() => handleLandingPage1Click("chatWithDoctor")}
                whileHover={{ scale: 1.05 }}
                className="flex h-64 w-64 flex-col items-center justify-center rounded-xl bg-[#303334] shadow-lg"
              >
                <h3 className="text:white font-inikaRegular text-2xl text-white">
                  {clinicLandingResources1.appointment.English}
                </h3>
                <div className="h-38 w-38 rounded-full bg-[#4CA9EE] shadow-md">
                  <div>
                    <img
                      className="p-2"
                      alt="Doctor Icon"
                      src="/images/Tailfeather.png"
                    />
                  </div>
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage1;
