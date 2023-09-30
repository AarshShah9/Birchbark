import React from "react";
import Navbar from "~/customComponents/Navbar";
import Footer from "~/customComponents/Footer";
import { motion } from "framer-motion";
import { BsFillBox2HeartFill } from "react-icons/bs";

const Confirmation: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-[90vh] flex-col items-center justify-center bg-[#232627] p-16">
        <h1 className="mb-4 text-center font-inikaBold text-6xl">
          Thank You For Your Purchase!
        </h1>
        <motion.div
          className="m-10"
          whileHover={{
            rotate: 1.2,
            transition: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
            },
          }}
        >
          <BsFillBox2HeartFill size="200px" />
        </motion.div>
        <h2 className="mb-4 text-center font-inikaRegular text-3xl">
          We really appreciate your support! Your order has been placed and will
          be processed shortly. Please check your email for payment details.
        </h2>
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
