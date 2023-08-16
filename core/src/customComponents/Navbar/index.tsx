import React from 'react';
import { motion } from "framer-motion"


const Navbar: React.FC = () => {
  return (
    <nav className='w-[100%] h-28 px-32 bg-neutral-800' >
            <div className='h-full flex flex-row justify-between'>
                {/* LOGO */}
                <div className='h-full flex items-center justify-center'>
                    <img className='' alt='Symptom360 Logo' src='/images/BlueNavLogo.svg' />
                </div>

                {/* NAV ITEMS */}
                <div className='h-full flex items-center justify-center'>
                    <ul className='flex flex-row'>
                        <motion.a whileHover={{ scale: 1.2, color: '#0084FF' }} className='m-6 font-bold text-2xl' href="/CustomPages/HomePage">Home</motion.a>
                        <motion.a whileHover={{ scale: 1.2, color: '#0084FF' }} className='m-6 font-bold text-2xl' href="/CustomPages/AboutUsPage">About Us</motion.a>
                        <motion.a whileHover={{ scale: 1.2, color: '#0084FF' }} className='m-6 font-bold text-2xl' href="/CustomPages/PricingPage">Pricing</motion.a>
                        <motion.a whileHover={{ scale: 1.2, color: '#0084FF' }} className='m-6 font-bold text-2xl' href="/CustomPages/ContactUsPage">Contact Us</motion.a>
                    </ul>
                    <div className='h-full flex items-center justify-center ml-8'>
                        <motion.a 
                            whileHover={{ scale: 1.1, backgroundColor: '#045de9'}}
                            className='w-48 h-16 rounded-full flex justify-center items-center bg-[#045de9]' 
                            href='/sign-in'
                        >
                            <span className='text-center font-bold text-2xl'>
                                Login
                            </span>
                        </motion.a>
                    </div>
                </div>                    
            </div>
        </nav>
    );
}

export default Navbar;