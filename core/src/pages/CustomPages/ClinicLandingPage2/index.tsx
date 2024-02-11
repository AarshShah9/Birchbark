import React from "react";
import { motion } from "framer-motion";
import { clinicLandingResources } from "~/resources/clinic-landing";

const ClinicLanding2: React.FC = () => {
  return (
    <div className="bg-[#232627]">
      <div className="ml-12 flex h-[10vh] flex-initial p-6">
        <img
          className="h-full"
          alt="Birchbark Health Logo"
          src="/images/BirchbarkLogo3.svg"
        />
      </div>
      <div className="flex min-h-[90vh] flex-col items-center justify-center p-16 font-inter lg:p-8">
        <h1 className="mb-8 text-center text-7xl font-bold md:text-4xl">
          {clinicLandingResources.title.English}
        </h1>
        <h2 className="mb-8 text-center font-inter text-4xl md:text-2xl">
          {clinicLandingResources.subtitle.English}
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex h-64 w-64 flex-col items-center justify-center rounded-xl bg-[#303334] shadow-lg"
          >
            <h3 className="font-inikaRegular text-2xl">
              {clinicLandingResources.psychologist.English}
            </h3>
            <div className="h-38 w-38 rounded-full bg-[#4CA9EE] shadow-md">
              <a href="/CustomPages/ClinicLandingPage2">
                <img
                  className="p-6"
                  alt="Psychologist Icon"
                  src="/images/brain.svg"
                />
              </a>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex h-64 w-64 flex-col items-center justify-center rounded-xl bg-[#303334] shadow-lg"
          >
            <h3 className="font-inikaRegular text-2xl">
              {clinicLandingResources.doctor.English}
            </h3>
            <div className="h-38 w-38 rounded-full bg-[#4CA9EE] shadow-md">
              <a href="/CustomPages/ClinicLandingPage2">
                <img
                  className="p-6"
                  alt="Doctor Icon"
                  src="/images/doctor.svg"
                />
              </a>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex h-64 w-64 flex-col items-center justify-center rounded-xl bg-[#303334] shadow-lg"
          >
            <h3 className="font-inikaRegular text-2xl">
              {clinicLandingResources.councillor.English}
            </h3>
            <div className="h-38 w-38 rounded-full bg-[#4CA9EE] shadow-md">
              <a href="/CustomPages/ClinicLandingPage2">
                <img
                  className="p-6"
                  alt="Councillor Icon"
                  src="/images/clipboard.svg"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClinicLanding2;
