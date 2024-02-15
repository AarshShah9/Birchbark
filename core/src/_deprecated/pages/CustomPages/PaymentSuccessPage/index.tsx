import React from "react";
import Navbar from "~/customComponents/Navbar";
import Footer from "~/customComponents/Footer";
import { motion } from "framer-motion";
import { BsFillBox2HeartFill } from "react-icons/bs";
import { paymentSuccessResources } from "~/resources/payment-success";

const PaymentSuccess: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-[90vh] flex-col items-center justify-center bg-[#232627] p-16">
        <h1 className="mb-4 text-center font-inikaBold text-6xl">
          {paymentSuccessResources.thankYou.English}
        </h1>
        <motion.div
          className="m-10"
          whileHover={{
            scale: 1.1,
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
          {paymentSuccessResources.orderPlaced.English}
        </h2>
        <motion.a
          className="font-inikaRegular text-xl underline"
          href="/"
          whileHover={{ scale: 1.02, color: "#a1a1a1" }}
          whileTap={{ scale: 0.97 }}
        >
          {paymentSuccessResources.returnHomepage.English}
        </motion.a>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentSuccess;
