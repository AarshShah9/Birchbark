import React from 'react';
import Navbar from '~/customComponents/Navbar';
import Footer from '~/customComponents/Footer';
import { motion } from "framer-motion"

const HomePage: React.FC = () => {
  return (
    <div>
        {/* Navbar */}
        <Navbar />

        {/* Splashscreen/Hero */}
        <div className='w-[100%] h-[700px] px-32'>
            <div className='h-full flex items-center justify-center'>
                <div className='w-[80%] h-[400px]'>
                    <div className='h-full flex justify-between'>
                        <div className='flex justify-center items-center w-full h-full '>
                            <div>
                                <div className=''>
                                    <motion.div initial={{x: -120}} animate={{x: 0}} transition={{duration: 0.3, ease:"easeIn"}} className='flex flex-row'>
                                        <motion.p  className="text-white text-5xl font-medium">Specific </motion.p>
                                        <motion.p initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay:0.2}} className="text-sky-500 text-5xl font-bold ">&nbsp;needs</motion.p>
                                    </motion.div>
                                    <motion.h3 initial={{x: -120}} animate={{x:0}} transition={{duration: 0.35,ease:"easeIn"}} className="text-white text-5xl font-medium ">require specific</motion.h3>
                                    <motion.h3 initial={{x: -120, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.4, ease:"easeIn"}} className="text-sky-500 text-5xl font-bold ">solutions</motion.h3>
                                </div>
                                <div>
                                <motion.a whileHover={{ scale: 1.1, backgroundColor: '#045de9'}} className='w-48 h-14 my-6 rounded-full flex justify-center items-center bg-blue-500' href='/CustomPages/PricingPage'><span className='text-center font-bold text-2xl'>See Pricing</span></motion.a>
                                </div>
                            </div>
                        </div>
                        
                        <div className='flex justify-center items-center w-full h-full'>
                            <div className="w-[420px] h-[420px] bg-stone-700 rounded-full shadow flex justify-center items-center">
                                <img className='' alt='Bison Graphic' src='/images/Bison.svg' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Blue Waves */}
        <div className='w-[100%] h-[1000px] relative'>
            <img className='w-full h-full' alt='blue curved lines graphic' src='/images/BlueWaves.svg'></img>
            
            <div className='absolute inset-0 flex flex-col justify-center items-center m-32'>
                <h1 className='font-inikaBold text-white text-6xl font-bold'>We're here for you</h1>
                <div className='w-[300px] h-[5px] my-4 bg-white rounded-full'></div>
                <p className='font-inikaRegular text-4xl font-medium text-center px-32'>We are proudly serving Canadian First Nations and Native Canadian people. We are here to connect you to doctors remotely and get you the help you need.</p>
            </div>
        </div>

        {/* Info Section */}
        <div className='flex flex-col m-32'>
            {/* Section 1 */}
            <div className='flex justify-center'>
                <div className='flex'>
                    <div className=' mx-20 flex items-center h-full'>
                        <div>
                            <h1 className='font-inikaBold text-5xl font-bold'>Who we are</h1>
                            <p className='w-[450px] font-inikaRegular text-xl'>We are Symptom 360, a group of canadians proudly serving Canadian First Nations and Native Canadian people. We are here to connect you to doctors remotely and get you the help you need.</p>
                        </div>
                    </div>
                    <div className=' mx-20'>
                        <img className='w-96 h-96' src="/images/Wolf.svg" alt="wolf graphic" />
                    </div>
                </div>
            </div>

            {/* Section 2 */}
            <div className='flex justify-center'>
                <div className='flex'>
                    <div className=' mx-20'>
                        <img className='w-96 h-96' src="/images/Bear.svg" alt="wolf graphic" />
                    </div>
                    <div className=' mx-20 flex items-center h-full'>
                        <div>
                            <h1 className='font-inikaBold text-5xl font-bold'>Where we are</h1>
                            <p className='w-[450px] font-inikaRegular text-xl'>We are proudly serving Canadian First Nations and Native Canadian people. We are here to connect you to doctors remotely and get you the help you need.</p>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* Section 3 */}
            <div className='flex justify-center'>
                <div className='flex'>
                    <div className=' mx-20 flex items-center h-full'>
                        <div>
                            <h1 className='font-inikaBold text-5xl font-bold'>How it works</h1>
                            <p className='w-[450px] font-inikaRegular text-xl'>Symptom 360 is a telecomunication service. We partner with doctors in order to get every patient the care that they need regardless of location.</p>
                        </div>
                    </div>
                    <div className=' mx-20'>
                        <img className='w-96 h-96' src="/images/Moose.svg" alt="wolf graphic" />
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
