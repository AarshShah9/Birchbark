import React from 'react';
import Navbar from '~/customComponents/Navbar';
import Footer from '~/customComponents/Footer'; 
import { motion } from "framer-motion";


const AboutUsPage: React.FC = () => {
  return (
    <div>
        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <div className='text-white'>
          <div className='px-48 py-24'>
            <h1 className='text-5xl text-center font-inikaBold'>Welcome to Symptom 360</h1>
            <p className='text-2xl text-center font-inikaRegular'>
              We talked to many First Nations Communities in Canada to understand what problems they have with virtual healthcare. So, we made a special website just for you to get healthcare online! What matters most
            </p>
          </div>

          <div className='flex items-center justify-center pt-32'>
            <div className='relative  w-full h-auto'>
              <div className='absolute top-0 h-auto'>

                {/* div with the cards */}
                <div className='flex items-center justify-center w-screen h-56  '>
                  <motion.div whileHover={{scale:1.1}}   className=' flex flex-col items-center justify-center h-96 w-[18%] md:w-64 bg-[#303334] shadow-xl rounded-2xl p-4 m-4'>
                    <div>
                      <img src='/HeartIcon.svg' alt='icon' className='w-12'/>
                    </div>
                    <h1 className='font-inikaBold text-5xl font-bold mb-4'>Trust</h1>
                    <p className='font-inikaRegular text-xl'>We are Symptom 360, a group of canadians proudly serving First Nations and Indigenous. We are here to connect you to doctors remotely and get you the help you need.</p>
                  </motion.div>

                  <motion.div whileHover={{scale:1.1}}  className=' flex flex-col items-center justify-center h-96 w-[18%] md:w-64 bg-[#303334] shadow-xl rounded-2xl p-4 m-4'>
                    <div>
                      <img src='/HandshakeIcon.svg' alt='icon' className='w-12'/>
                    </div>
                    <h1 className='font-inikaBold text-5xl font-bold mb-4'>Partnership</h1>
                    <p className='font-inikaRegular text-xl'>We are Symptom 360, a group of canadians proudly serving First Nations and Indigenous. We are here to connect you to doctors remotely and get you the help you need.</p>
                  </motion.div>

                  <motion.div whileHover={{scale:1.1}}  className=' flex flex-col items-center justify-center h-96 w-[18%] md:w-64 bg-[#303334] shadow-xl rounded-2xl p-4 m-4'>
                    <div>
                      <img src='/MapleLeafIcon.svg' alt='icon' className='w-12'/>
                    </div>
                    <h1 className='font-inikaBold text-5xl font-bold mb-4'>Culture</h1>
                    <p className='font-inikaRegular text-xl'>We are Symptom 360, a group of canadians proudly serving First Nations and Indigenous. We are here to connect you to doctors remotely and get you the help you need.</p>
                  </motion.div>
                </div>

              </div>
            </div>
          </div>
          <div className='w-full'>
            <img src='/whiteWave.svg' alt='a white wave graphic' className='w-full -z-1' />
            <div className='w-full h-[1000px] bg-white pt-64 flex justify-center border border-black'>
              <div className='flex flex-col items-center border border-red-500'>
                <h1 className='w-[70%] text-center flex justify-center border text-black text-5xl font-inikaBold'>
                  You choose how you want to talk to your healthcare team
                </h1>


                <div className='flex flex-col '>
                  <div className='flex flex-row mb-8'>
                    <div className='w-20 h-20 rounded-full bg-[#4CA9EE] flex justify-center items-center'>
                      <img src='/video-solid 1.svg' className=''></img>
                    </div>
                    <span className='flex justify-center items-center text-black text-3xl pl-8'>
                      Video: A video call where you can see your doctor face to face.
                    </span>
                  </div>

                  <div className='flex flex-row mb-8'>
                    <div className='w-20 h-20 rounded-full bg-[#4CA9EE] flex justify-center items-center'>
                      <img src='/video-solid 1.svg' className=''></img>
                    </div>
                    <span className='flex justify-center items-center text-black text-3xl pl-8'>
                      Video: A video call where you can see your doctor face to face.
                    </span>
                  </div>

                  <div className='flex flex-row mb-8'>
                    <div className='w-20 h-20 rounded-full bg-[#4CA9EE] flex justify-center items-center'>
                      <img src='/video-solid 1.svg' className=''></img>
                    </div>
                    <span className='flex justify-center items-center text-black text-3xl pl-8'>
                      Video: A video call where you can see your doctor face to face.
                    </span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
         
        </div>

        {/* FOOTER */}
        <Footer />
    </div>
  );
}

export default AboutUsPage;