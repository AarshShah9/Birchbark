import React, { useState } from "react";
import { motion } from "framer-motion";
import { clinicLandingResources } from "../../../itlText/clinic-landing";

const Questionnaire: React.FC = () => {
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
            whileTap={{ scale: 0.98 }}
            className="flex h-64 w-64 flex-col items-center justify-center rounded-xl bg-[#303334] shadow-lg"
          >
            <h3 className="font-inikaRegular text-2xl">
              {clinicLandingResources.psychologist.English}
            </h3>
            <img
              className="h-38 w-38 rounded-full shadow-md"
              alt="Psychologist Icon"
              src="/images/psychologist.svg"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="flex h-64 w-64 flex-col items-center justify-center rounded-xl bg-[#303334] shadow-lg"
          >
            <h3 className="font-inikaRegular text-2xl">
              {clinicLandingResources.doctor.English}
            </h3>
            <img
              className="h-38 w-38 rounded-full shadow-md"
              alt="Doctor Icon"
              src="/images/doctor.svg"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="flex h-64 w-64 flex-col items-center justify-center rounded-xl bg-[#303334] shadow-lg"
          >
            <h3 className="font-inikaRegular text-2xl">
              {clinicLandingResources.councillor.English}
            </h3>
            <img
              className="h-38 w-38 rounded-full shadow-md"
              alt="Councillor Icon"
              src="/images/councillor.svg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
