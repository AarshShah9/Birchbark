import React from "react";
import Navbar from "~/customComponents/Navbar";
import Footer from "~/customComponents/Footer";
import { motion } from "framer-motion";

const Confirmation: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="flex h-[85vh] flex-col items-center justify-center bg-[#232627] p-16">
        <h1 className="mb-4 text-center font-inikaBold text-6xl">Thank You</h1>
        <h2 className="text-center font-inikaRegular text-xl">
          We'll get back to you soon!
        </h2>
        <motion.img
          className="m-10"
          whileHover={{
            rotate: 1.2,
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
          href="/CustomPages/HomePage"
          whileHover={{ scale: 1.02, color: "#a1a1a1" }}
          whileTap={{ scale: 0.97 }}
        >
          Return to homepage
        </motion.a>
      </div>
      <Footer />
    </div>
  );
};

export default Confirmation;
