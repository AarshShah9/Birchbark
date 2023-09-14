import React from 'react';
import Navbar from '~/customComponents/Navbar';
import Footer from '~/customComponents/Footer';
import { motion } from "framer-motion";

const HomePage: React.FC = () => {
  return (
    <div>
        {/* Navbar */}
        <Navbar />

        {/* Splashscreen/Hero */}
        <div className='w-[100%] pt-40 lg:pt-4 pb-32 lg:pb-2 px-32 lg:px-24 md:16 bg-[#141718]'>
            <div className='h-full flex items-center justify-center'>
                <div className='w-[80%] lg:w-[95%] h-[400px]'>
                    <div className='h-full flex justify-between '>
                        <div className='flex justify-center items-center w-full h-full '>
                            <div>
                                <div className=''>
                                    <motion.div initial={{x: -120}} animate={{x: 0}} transition={{duration: 0.3, ease:"easeIn"}} className='flex flex-row'>
                                        <motion.p className="text-white text-5xl lg:text-3xl font-medium">Specific </motion.p>
                                        <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay:0.2}} className="text-sky-500 text-5xl lg:text-3xl font-bold ">&nbsp;needs</motion.p>
                                    </motion.div>
                                    <motion.h3 initial={{x: -120}} animate={{x:0}} transition={{duration: 0.35,ease:"easeIn"}} className="text-white text-5xl lg:text-3xl font-medium ">require specific</motion.h3>
                                    <motion.h3 initial={{x: -120, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.4, ease:"easeIn"}} className="text-sky-500 text-5xl lg:text-3xl font-bold ">solutions</motion.h3>
                                </div>
                                <div>
                                <motion.a whileHover={{ scale: 1.1, backgroundColor: '#045de9'}} className='w-48 lg:w-36 h-14 lg:h-10 my-6 lg:my-4 rounded-full flex justify-center items-center bg-blue-500' href='/CustomPages/PricingPage'><span className='text-center font-bold text-2xl lg:text-xl text-white'>See Pricing</span></motion.a>
                                </div>
                            </div>
                        </div>
                        
                        <div className='flex sm:hidden justify-center items-center w-full h-full'>
                            <div className="w-[420px] h-[420px] lg:w-64 lg:h-64 md:w-48 md:h-48 bg-stone-700 rounded-full shadow flex justify-center items-center">
                                <img className='' alt='Bison Graphic' src='/images/Bison.svg' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Blue Waves */}
        <div className='w-full relative bg-[#141718] text-white'>
            <img className='md:h-full w-full md:aspect-[1/1] md:object-cover' alt='blue curved lines graphic' src='/images/BlueWaves.svg'></img>
            <div className='absolute inset-0 flex flex-col justify-center items-center m-32 xl:m-16 lg:m-4'>
                <p className='font-inikaBold text-white text-6xl 2xl:text-5xl xl:text-3xl  font-bold'>We're here for you</p>
                <div className='w-[25%] h-[5px] lg:h-[3px] my-4 lg:my-2 bg-white rounded-full'></div>
                <p className='font-inikaRegular text-4xl 2xl:text-2xl lg:text-xl font-medium text-center px-32 lg:px-12 lg:leading-tight'>We are proudly serving First Nations and Indigenous. We are here to connect you to doctors remotely and get you the help you need.</p>
            </div>
        </div>

        {/* Info Section */}
        <div className='flex flex-col p-32 bg-[#141718]'>
            {/* Section 1 */}
            <div className='flex justify-center text-white'>
                <div className='flex flex-row xl:flex-col-reverse'>
                    <div className='mx-20 sm:mx-4 flex-initial'>
                        <div className='flex flex-col justify-center h-full w-[450px] md:w-64'>
                            <h1 className='font-inikaBold text-5xl font-bold'>Who we are</h1>
                            <p className='font-inikaRegular text-xl'>We are Symptom 360, a group of canadians proudly serving First Nations and Indigenous. We are here to connect you to doctors remotely and get you the help you need.</p>
                        </div>
                    </div>
                    <div className='mx-20 sm:mx-4 w-96 h-96 md:w-64 md:h-64 flex-initial'>
                        <img className='aspect-[1/1]' src="/images/Wolf.svg" alt="wolf graphic" />
                    </div>
                </div>
            </div>

            {/* Section 2 */}
            <div className='flex justify-center text-white'>
                <div className='flex flex-row xl:flex-col'>
                    <div className='mx-20 sm:mx-4 w-96 h-96 md:w-64 md:h-64 flex-initial'>
                        <img className='aspect-[1/1]' src="/images/Bear.svg" alt="wolf graphic" />
                    </div>
                    <div className='mx-20 sm:mx-4 flex-initial'>
                        <div className='flex flex-col justify-center h-full w-[450px] md:w-64'>
                            <h1 className='font-inikaBold text-5xl font-bold'>Where we are</h1>
                            <p className='font-inikaRegular text-xl'>We are proudly serving First Nations and Indigenous. We are here to connect you to doctors remotely and get you the help you need.</p>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* Section 3 */}
            <div className='flex justify-center text-white'>
                <div className='flex flex-row xl:flex-col-reverse '>
                    <div className='mx-20 sm:mx-4 flex-initial '>
                        <div className='flex flex-col justify-center h-full w-[450px] md:w-64'>
                            <h1 className='font-inikaBold text-5xl font-bold'>How it works</h1>
                            <p className='font-inikaRegular text-xl'>Symptom 360 is a telecomunication service. We partner with doctors in order to get every patient the care that they need regardless of location.</p>
                        </div>
                    </div>
                    <div className=' mx-20 sm:mx-4 w-96 h-96 md:w-64 md:h-64 flex-initial'>
                        <img className='aspect-[1/1]' src="/images/Moose.svg" alt="wolf graphic" />
                    </div>
                </div>
            </div>
        </div>

        {/* Footer */}
        <Footer/>
    </div>
  );
};

export default HomePage;
