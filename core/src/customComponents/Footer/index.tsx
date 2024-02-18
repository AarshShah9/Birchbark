import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <div>
      <footer className="h-full w-full bg-blue-400 text-white md:hidden">
        <div className="flex items-center justify-center">
          <div className="mt mx-32 flex flex-row justify-between pt-6 lg:mx-0 ">
            <div className="m-8">
              <h1 className="text-2xl font-bold">Company</h1>
              <div className="mb-4 mt-1 h-1 w-[100%] bg-white" />
              <ul className="flex flex-col">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  className="m-1"
                  href="/CustomPages/AboutUsPage"
                >
                  About Us
                </motion.a>
                <motion.a whileHover={{ scale: 1.1 }} className="m-1" href="#">
                  Career
                </motion.a>
              </ul>
            </div>
            <div className="m-8">
              <h1 className="text-2xl font-bold">Pricing</h1>
              <div className="mb-4 mt-1 h-1 w-[100%] bg-white" />
              <ul className="flex flex-col">
                {/* <motion.a whileHover={{ scale:1.1 }} className="m-1" href='#'>Pricing Overview</motion.a> */}
                {/* <motion.a whileHover={{ scale:1.1 }} className="m-1" href='#'>Coverage</motion.a> */}
                <motion.a whileHover={{ scale: 1.1 }} className="m-1" href="#">
                  Register
                </motion.a>
                <motion.a whileHover={{ scale: 1.1 }} className="m-1" href="#">
                  Sign in
                </motion.a>
              </ul>
            </div>
            <div className="m-8">
              <h1 className="text-2xl font-bold">Get Connected</h1>
              <div className="mb-4 mt-1 h-1 w-[100%] bg-white" />
              <ul className="flex flex-col">
                <motion.a whileHover={{ scale: 1.1 }} className="m-1" href="#">
                  Contact us
                </motion.a>
                <motion.a whileHover={{ scale: 1.1 }} className="m-1" href="#">
                  FAQ's
                </motion.a>
              </ul>
            </div>
            <div className="m-8">
              <h1 className="text-2xl font-bold">Socials</h1>
              <div className="mb-4 mt-1 h-1 w-[100%] bg-white" />
              <ul className="flex flex-col">
                <motion.a whileHover={{ scale: 1.1 }} className="m-1" href="#">
                  Twitter
                </motion.a>
                <motion.a whileHover={{ scale: 1.1 }} className="m-1" href="#">
                  Facebook
                </motion.a>
                <motion.a whileHover={{ scale: 1.1 }} className="m-1" href="#">
                  LinkedIn
                </motion.a>
                <motion.a whileHover={{ scale: 1.1 }} className="m-1" href="#">
                  Instagram
                </motion.a>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center py-6">
          &copy; 2023 Birchbark Health. All rights reserved.
        </div>
      </footer>
      <footer className="hidden h-full w-full flex-col bg-blue-400 md:flex">
        {/* Socials with icons TODO: decide if we want these here or in the format */}
        <div className="flex flex-row items-center justify-center">
          <ul className="mt-8">
            <motion.a href="https://linkedin.com" className="mx-4">
              <FontAwesomeIcon
                className="h-12 w-12 text-white"
                icon={faLinkedin}
              />
            </motion.a>
            <motion.a href="https://instagram.com" className="mx-4">
              <FontAwesomeIcon
                className="h-12 w-12 text-white"
                icon={faInstagram}
              />
            </motion.a>
            <motion.a href="https://facebook.com" className="mx-4">
              <FontAwesomeIcon
                className="h-12 w-12 text-white"
                icon={faFacebook}
              />
            </motion.a>
            <motion.a href="https://twitter.com" className="mx-4">
              <FontAwesomeIcon
                className="h-12 w-12 text-white"
                icon={faTwitter}
              />
            </motion.a>
          </ul>
        </div>
        <div className="flex items-center justify-center py-6 text-white">
          &copy; 2023 Birchbark Health. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
