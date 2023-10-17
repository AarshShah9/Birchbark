import React from "react";
import Navbar from "~/customComponents/Navbar";
import Footer from "~/customComponents/Footer";
import { motion } from "framer-motion";
import { confirmationResources } from "../../../itlText/confirmation";

const Confirmation: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-[85vh] flex-col items-center justify-center bg-[#232627] p-16">
        <h1 className="mb-4 text-center font-inikaBold text-6xl">
          {confirmationResources.thankYou.English}
        </h1>
        <h2 className="text-center font-inikaRegular text-xl">
          {confirmationResources.getBackSoon.English}
        </h2>
        <motion.img
          className="m-10"
          whileHover={{
            rotate: 1.3,
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
            },
          }}
          alt="Confirmation Mail Graphic"
          src="/images/Confirmation.svg"
        />
        <motion.a
          className="font-inikaRegular text-xl underline"
          href="/"
          whileHover={{ scale: 1.02, color: "#a1a1a1" }}
          whileTap={{ scale: 0.97 }}
        >
          {confirmationResources.returnHomepage.English}
        </motion.a>
      </div>
      <Footer />
    </div>
  );
};

export default Confirmation;
