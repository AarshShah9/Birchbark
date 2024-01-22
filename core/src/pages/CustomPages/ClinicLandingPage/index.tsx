import React from "react";
import { motion } from "framer-motion";
import { clinicLandingResources1 } from "~/resources/clinic-landing1";
import { useState } from "react";

const ClinicLandingPage: React.FC = () => {
  const [language, setLanguage] = useState("English");
  return (
    <div className="h-screen w-screen bg-[#232627]">
      <div className="absolute top-0 z-1 h-screen w-screen">
        <img
          src="/images/ChiefMountain3.svg"
          alt="Chief Mountain"
          className="relative h-screen w-auto object-cover object-center"
        />
      </div>
      <div className="absolute z-2 w-screen">
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
            <h1 className="mb-8 text-center text-7xl font-bold md:text-4xl">
              {language === "Blackfoot"
                ? clinicLandingResources1.title.Blackfoot
                : clinicLandingResources1.title.English}
              <button
                className="text-sm font-light"
                onClick={() => {
                  if (language === "Blackfoot") setLanguage("English");
                  else setLanguage("Blackfoot");
                  console.log(language);
                }}
              >
                <img
                  src="/icons/ArrowSwitchIcon.svg"
                  alt="switch button"
                  className="h-6 w-6"
                />
              </button>
            </h1>
            <h2 className="mb-8 text-center font-inter text-4xl md:text-2xl">
              {clinicLandingResources1.greeting.English}
            </h2>
            <div className=" flex flex-wrap items-center justify-center gap-6">
              <motion.a
                href="/CustomPages/ClinicLandingPage2"
                whileHover={{ scale: 1.05 }}
                className="flex h-64 w-64 flex-col items-center justify-center rounded-xl bg-[#303334] shadow-lg"
              >
                <h3 className="font-inikaRegular text-2xl">
                  {clinicLandingResources1.content.English}
                </h3>
                <div className="h-38 w-38 rounded-full bg-[#4CA9EE] shadow-md">
                  <div>
                    <img
                      className="p-6"
                      alt="Psychologist Icon"
                      src="/images/BookIcon.svg"
                    />
                  </div>
                </div>
              </motion.a>
              <motion.a
                href="/CustomPages/ClinicLandingPage2"
                whileHover={{ scale: 1.05 }}
                className="flex h-64 w-64 flex-col items-center justify-center rounded-xl bg-[#303334] shadow-lg"
              >
                <h3 className="font-inikaRegular text-2xl">
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
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicLandingPage;
