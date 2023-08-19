import React from 'react';
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';


const Footer: React.FC = () => {
  return (
    <div>
        <footer className='md:hidden w-full h-full bg-blue-400 '>
            <div className='flex items-center justify-center'>
                <div className='mx-32 mt flex flex-row justify-between pt-6 '>
                    <div className='m-8'>
                        <h1 className='text-2xl font-bold'>Company</h1>
                        <div className='h-1 w-[100%] bg-white mt-1 mb-4'/>
                        <ul className='flex flex-col'>
                            <motion.a whileHover={{ fontWeight: 'bold' }} className="m-1" href='/CustomPages/AboutUsPage'>About Us</motion.a>
                            <motion.a whileHover={{ fontWeight: 'bold' }} className="m-1" href='#'>Career</motion.a>
                        </ul>
                    </div>
                    <div className='m-8'>
                        <h1 className='text-2xl font-bold'>Pricing</h1>
                        <div className='h-1 w-[100%] bg-white mt-1 mb-4'/>
                        <ul className='flex flex-col'>
                            <motion.a whileHover={{ fontWeight: 'bold' }} className="m-1" href='#'>Pricing Overview</motion.a>
                            <motion.a whileHover={{ fontWeight: 'bold' }} className="m-1" href='#'>Coverage</motion.a>
                            <motion.a whileHover={{ fontWeight: 'bold' }} className="m-1" href='#'>Register</motion.a>
                            <motion.a whileHover={{ fontWeight: 'bold' }} className="m-1" href='#'>Sign in</motion.a>
                        </ul>
                    </div>
                    <div className='m-8'>
                        <h1 className='text-2xl font-bold'>Get Connected</h1>
                        <div className='h-1 w-[100%] bg-white mt-1 mb-4'/>
                        <ul className='flex flex-col'>
                            <motion.a whileHover={{ fontWeight: 'bold' }} className="m-1" href='#'>Contact us</motion.a>
                            <motion.a whileHover={{ fontWeight: 'bold' }} className="m-1" href='#'>FAQ's</motion.a>
                        </ul>
                    </div>
                    <div className='m-8'>
                        <h1 className='text-2xl font-bold'>Socials</h1>
                        <div className='h-1 w-[100%] bg-white mt-1 mb-4'/>
                        <ul className='flex flex-col'>
                            <motion.a whileHover={{ fontWeight: 'bold' }} className="m-1" href='#'>Twitter</motion.a>
                            <motion.a whileHover={{ fontWeight: 'bold' }} className="m-1" href='#'>Facebook</motion.a>
                            <motion.a whileHover={{ fontWeight: 'bold' }} className="m-1" href='#'>LinkedIn</motion.a>
                            <motion.a whileHover={{ fontWeight: 'bold' }} className="m-1" href='#'>Instagram</motion.a>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center py-6'>
                &copy; 2023 Symptom 360. All rights reserved.
            </div>
        </footer>
        <footer className='hidden md:flex flex-col w-full h-full bg-blue-400'>
            {/* Socials with icons TODO: decide if we want these here or in the format */}
            <div className='flex flex-row items-center justify-center'>
                <ul className='mt-8'>
                    <motion.a href='https://linkedin.com' className='mx-4'>
                        <FontAwesomeIcon className="w-12 h-12" icon={faLinkedin}/>
                    </motion.a>
                    <motion.a href='https://instagram.com' className='mx-4'>
                        <FontAwesomeIcon className="w-12 h-12" icon={faInstagram}/>
                    </motion.a>
                    <motion.a href='https://facebook.com' className='mx-4'>
                        <FontAwesomeIcon className="w-12 h-12" icon={faFacebook}/>
                    </motion.a>
                    <motion.a href='https://twitter.com' className='mx-4'>
                        <FontAwesomeIcon className="w-12 h-12" icon={faTwitter}/>
                    </motion.a>
                </ul>
            </div>
            <div className='flex justify-center items-center py-6'>
                &copy; 2023 Symptom 360. All rights reserved.
            </div>

        </footer>
    </div>
  );
}

export default Footer;