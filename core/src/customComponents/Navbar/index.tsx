import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion"

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    useEffect(() => {
        const closeMenuOnResize = () => {
            if (window.innerWidth >= 768) {
            setIsOpen(false);
            }
        };

    window.addEventListener('resize', closeMenuOnResize);

    return () => {
        window.removeEventListener('resize', closeMenuOnResize);
        };
    }, []);
  

    return (
        <div className='bg-[#141718] text-white'>
            <nav className='md:hidden w-[100%] h-28 px-32 lg:px-16 bg-neutral-800 text-white' >
                <div className='h-full flex flex-row justify-between text-white'>
                    {/* LOGO */}
                    <div className='flex-initial h-full flex items-center justify-center'>
                        <img className='aspect-[22/7]' alt='Symptom360 Logo' src='/images/BlueNavLogo.svg' />
                    </div>

                    {/* NAV ITEMS */}
                    <div className='h-full flex items-center justify-center text-white'>
                        <ul className='flex flex-row text-white'>
                            <motion.a whileHover={{ scale: 1.2, color: '#0084FF' }} className=' text-white m-6 lg:m-4 font-bold text-2xl lg:text-lg' href="/CustomPages/HomePage">Home</motion.a>
                            <motion.a whileHover={{ scale: 1.2, color: '#0084FF' }} className=' text-white m-6 lg:m-4 font-bold text-2xl lg:text-lg' href="/CustomPages/AboutUsPage">About Us</motion.a>
                            <motion.a whileHover={{ scale: 1.2, color: '#0084FF' }} className=' text-white m-6 lg:m-4 font-bold text-2xl lg:text-lg' href="/CustomPages/PricingPage">Pricing</motion.a>
                            <motion.a whileHover={{ scale: 1.2, color: '#0084FF' }} className=' text-white m-6 lg:m-4 font-bold text-2xl lg:text-lg' href="/CustomPages/ContactUsPage">Contact Us</motion.a>
                        </ul>
                        <div className='h-full flex items-center justify-center ml-8'>
                            <motion.a 
                                whileHover={{ scale: 1.1, backgroundColor: '#045de9'}}
                                className='w-48 lg:w-32 h-16 lg:h-12 rounded-full flex justify-center items-center bg-blue-500' 
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
            <nav className='hidden md:flex w-[100%] h-24 px-12 sm:px-8 bg-neutral-800' >
                <div className='h-full w-full flex flex-row justify-between'>
                    {/* LOGO */}
                    <div className='flex-initial h-full flex items-center justify-center'>
                        <img className='aspect-[22/7] h-[60%]' alt='Symptom360 Logo' src='/images/BlueNavLogo.svg' />
                    </div>
                    <button onClick={toggleMenu}>
                        <svg
                            className="w-6 h-6"
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
                    className="p-4 flex flex-col items-center bg-transparent "
                >
                    <motion.ul
                        className="space-y-2"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } },
                        }}
                    >
                        <motion.li variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}>
                            <motion.a whileHover={{ scale: 1.2, color: '#0084FF' }} className='m-6 lg:m-4 font-bold text-2xl lg:text-lg' href="/CustomPages/HomePage">Home</motion.a>
                        </motion.li>
                        <motion.li variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}>
                            <motion.a whileHover={{ scale: 1.2, color: '#0084FF' }} className='m-6 lg:m-4 font-bold text-2xl lg:text-lg' href="/CustomPages/AboutUsPage">About Us</motion.a>
                        </motion.li>
                        <motion.li variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}>
                            <motion.a whileHover={{ scale: 1.2, color: '#0084FF' }} className='m-6 lg:m-4 font-bold text-2xl lg:text-lg' href="/CustomPages/PricingPage">Pricing</motion.a>
                        </motion.li>
                        <motion.li variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}>
                            <motion.a whileHover={{ scale: 1.2, color: '#0084FF' }} className='m-6 lg:m-4 font-bold text-2xl lg:text-lg' href="/CustomPages/ContactUsPage">Contact Us</motion.a>
                        </motion.li>
                    </motion.ul>
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    );
}

export default Navbar;