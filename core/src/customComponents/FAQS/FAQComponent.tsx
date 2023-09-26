import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiPlusMedical, BiMinus } from "react-icons/bi";

interface FAQProps {
  faq: {
    question: string;
    answer: string;
  };
}

const FAQComponent: React.FC<FAQProps> = ({ faq }) => {
  const { question, answer } = faq;
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="my-8 flex w-[100%] flex-col items-center">
        <motion.button
          onClick={toggleDropdown}
          whileHover={{ scale: 1.03, color: "#e8e8e8" }}
          className="
                            flex
                            flex-row
                            py-0
                            text-left
                            text-[24px]
                            font-bold
                            "
        >
          <div className="mr-6 flex h-[26px] w-[26px] flex-col items-center justify-center">
            {!isOpen && <BiPlusMedical size="25px" />}
            {isOpen && <BiMinus size="25px" />}
          </div>
          {question}
        </motion.button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="ml-13 mt-4 w-[80%] flex-1 pb-5 text-[24px] font-light leading-7"
            initial={{
              opacity: 0,
              y: -40,
            }}
            animate={{
              opacity: 1,
              color: "white",
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -40,
            }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FAQComponent;
