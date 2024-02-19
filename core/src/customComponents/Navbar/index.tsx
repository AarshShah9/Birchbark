import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="bg-[#141718] text-white">
      <nav className="h-28 w-[100%] bg-neutral-800 px-32 text-white 2xl:px-8 xl:px-4 lg:px-4 md:hidden">
        <div className="flex h-full flex-row justify-between text-white">
          {/* LOGO */}
          <div className="flex h-full flex-initial items-center justify-center">
            <img
              className="h-[40%]"
              alt="Birchbark Health Logo"
              src="/images/BirchbarkLogo3.svg"
            />
          </div>

          {/* NAV ITEMS */}
          <div className="flex h-full items-center justify-center text-white">
            <ul className="flex flex-row text-white">
              <motion.a
                whileHover={{ scale: 1.2, color: "#0084FF" }}
                className=" m-6 text-xl font-bold text-white lg:m-4 lg:text-lg"
                href="/"
              >
                Home
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: "#0084FF" }}
                className=" m-6 text-xl font-bold text-white lg:m-4 lg:text-lg"
                href="/about-us"
              >
                About Us
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: "#0084FF" }}
                className=" m-6 text-xl font-bold text-white lg:m-4 lg:text-lg"
                href="/contact-us"
              >
                Contact Us
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: "#0084FF" }}
                className=" m-6 text-xl font-bold text-white lg:m-4 lg:text-lg"
                href="/organization-selection"
              >
                Organization
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: "#0084FF" }}
                className=" m-6 text-xl font-bold text-white lg:m-4 lg:text-lg"
                href="/wiki"
              >
                Wiki
              </motion.a>
            </ul>
            <div className="ml-8 flex h-full items-center justify-center lg:ml-4">
              <motion.a
                whileHover={{ scale: 1.1, backgroundColor: "#045de9" }}
                className="flex h-16 w-48 items-center justify-center rounded-full bg-[#4CA9EE] lg:h-12 lg:w-32"
                href="/sign-in"
              >
                <span className="text-center text-xl font-bold">Login</span>
              </motion.a>
            </div>
          </div>
        </div>
      </nav>
      <nav className="hidden h-24 w-[100%] bg-neutral-800 px-12 md:flex sm:px-8">
        <div className="flex h-full w-full flex-row justify-between">
          {/* LOGO */}
          <div className="flex h-full flex-initial items-center justify-center">
            <img
              className="aspect-[22/7] h-[60%]"
              alt="Symptom360 Logo"
              src="/images/BlueNavLogo.svg"
            />
          </div>
          <button onClick={toggleMenu}>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -200, zIndex: -1 }}
            animate={{ opacity: 1, y: 0, zIndex: 1 }}
            exit={{ opacity: 0, y: -200, zIndex: -1 }}
            transition={{ duration: 0.2 }}
            className="hidden flex-col items-center bg-transparent p-4 md:flex "
          >
            <motion.ul
              className="space-y-2"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <motion.a
                  whileHover={{ scale: 1.2, color: "#0084FF" }}
                  className="m-6 text-xl font-bold lg:m-4 lg:text-lg"
                  href="/CustomPages/HomePage"
                >
                  Home
                </motion.a>
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <motion.a
                  whileHover={{ scale: 1.2, color: "#0084FF" }}
                  className="m-6 text-xl font-bold lg:m-4 lg:text-lg"
                  href="/CustomPages/AboutUsPage"
                >
                  About Us
                </motion.a>
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <motion.a
                  whileHover={{ scale: 1.2, color: "#0084FF" }}
                  className="m-6 text-xl font-bold lg:m-4 lg:text-lg"
                  href="/CustomPages/PricingPage"
                >
                  Pricing
                </motion.a>
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <motion.a
                  whileHover={{ scale: 1.2, color: "#0084FF" }}
                  className=" m-6 text-xl font-bold text-white lg:m-4 lg:text-lg"
                  href="/organization-selection"
                >
                  Organization
                </motion.a>
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <motion.a
                  whileHover={{ scale: 1.2, color: "#0084FF" }}
                  className="m-6 text-xl font-bold lg:m-4 lg:text-lg"
                  href="/CustomPages/ContactUsPage"
                >
                  Contact Us
                </motion.a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
