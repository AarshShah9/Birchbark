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
          <div className='flex justify-center items-center h-[40vh] '>
            <div className='w-[50%]'>
              <h1 className='text-5xl text-center font-inikaBold'>Welcome to Symptom 360</h1>
              <p className='text-2xl text-center font-inikaRegular'>
                We talked to many First Nations Communities in Canada to understand what problems they have with virtual healthcare. So, we made a special website just for you to get healthcare online! What matters most
              </p>
            </div>
            
          </div>

          <div className='flex items-center justify-center pt-32'>
            <div className='relative  w-full h-auto'>
              <div className='absolute top-0 h-auto'>

                {/* div with the cards */}
                <div className='flex items-center justify-center w-screen h-56  '>
                  <motion.div whileHover={{scale:1.1}}   className=' flex flex-col items-center justify-center h-96 w-[18%] md:w-64 bg-[#303334] shadow-xl rounded-2xl p-4 m-4'>
                    <div>
                      <img src='/icons/heart.svg' alt='icon' className='w-12'/>
                    </div>
                    <h1 className='font-inikaBold text-5xl font-bold mb-4'>Trust</h1>
                    <p className='font-inikaRegular text-xl'>We are Symptom 360, a group of canadians proudly serving First Nations and Indigenous. We are here to connect you to doctors remotely and get you the help you need.</p>
                  </motion.div>

                  <motion.div whileHover={{scale:1.1}}  className=' flex flex-col items-center justify-center h-96 w-[18%] md:w-64 bg-[#303334] shadow-xl rounded-2xl p-4 m-4'>
                    <div>
                      <img src='/icons/handshake.svg' alt='icon' className='w-12'/>
                    </div>
                    <h1 className='font-inikaBold text-5xl font-bold mb-4'>Partnership</h1>
                    <p className='font-inikaRegular text-xl'>We are Symptom 360, a group of canadians proudly serving First Nations and Indigenous. We are here to connect you to doctors remotely and get you the help you need.</p>
                  </motion.div>

                  <motion.div whileHover={{scale:1.1}}  className=' flex flex-col items-center justify-center h-96 w-[18%] md:w-64 bg-[#303334] shadow-xl rounded-2xl p-4 m-4'>
                    <div>
                      <img src='/icons/mapleLeaf.svg' alt='icon' className='w-12'/>
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
            <div className='w-full h-[850px] bg-white pt-64 flex justify-center ='>
              <div className='flex flex-col items-center '>
                <h1 className='w-[70%] text-center flex justify-center text-black text-5xl font-inikaBold pb-8'>
                  You choose how you want to talk to your healthcare team
                </h1>


                <div className='flex flex-col '>
                  <div className='flex flex-row mb-8'>
                    <div className='w-20 h-20 rounded-full bg-[#4CA9EE] flex justify-center items-center'>
                      <img src='/icons/video.svg' className=''></img>
                    </div>
                    <span className='flex justify-center items-center text-black text-3xl pl-8 font-medium'>
                      Video: A video call where you can see your doctor face to face.
                    </span>
                  </div>

                  <div className='flex flex-row mb-8'>
                    <div className='w-20 h-20 rounded-full bg-[#4CA9EE] flex justify-center items-center'>
                      <img src='/icons/phone.svg' className=''></img>
                    </div>
                    <span className='flex justify-center items-center text-black text-3xl pl-8 font-medium'>
                    Phone: Just call your doctor and talk about your health over the phone.
                    </span>
                  </div>

                  <div className='flex flex-row mb-8'>
                    <div className='w-20 h-20 rounded-full bg-[#4CA9EE] flex justify-center items-center'>
                      <img src='/icons/texts.svg' className=''></img>
                    </div>
                    <span className='flex justify-center items-center text-black text-3xl pl-8 font-medium'>
                    Text: If you are in a hurry, you can quickly send a text to your doctor.
                    </span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Section 1 */}
        <div className='w-full h-[1400px] flex justify-center'>
        <div className='px-48 py-24 border w-[50%]'>
            <h1 className='text-6xl text-center font-inikaBold mb-12'>How Symptom 360 works</h1>
            <div className='flex flex-col w-full h-full'>

              {/* CARD HOLDER */}
              <div className='flex flex-row justify-left w-full h-[80%]'>
                <div className='relative w-[60%] h-[90%] bg-[#303334] rounded-2xl flex justify-center items-center m-5'>
                  <p className='text-white text-2xl py-5 pl-15 leading-7'>
                  You will answer some easy questions about your health. This helps your doctor understand what is going on. Your answers go to your doctor in a really safe way.
                  </p>
                  <span className='w-20 h-20 bg-[#4CA9EE] rounded-full absolute -left-10 text-5xl white font-inikaBold'>
                    <div className='flex justify-center items-center w-full h-full'>
                      1
                    </div>
                  </span>
                </div>
              </div>

              {/* CARD HOLDER */}
              <div className='flex flex-row justify-right w-full h-[80%]'>
                <div className='relative w-[60%] h-[90%] bg-[#303334] rounded-2xl flex justify-center items-center m-5 ml-auto'>
                  <p className='text-white text-2xl py-5 pl-15 leading-7'>
                  You can pick a time to have a virtual meeting with your doctor using video, phone, or text. Your doctor will get a detailed report with your answers, which helps them understand your health status during the online visit.
                  </p>
                  <span className='w-20 h-20 bg-[#4CA9EE] rounded-full absolute -left-10 text-5xl white font-inikaBold'>
                    <div className='flex justify-center items-center w-full h-full'>
                      2
                    </div>
                  </span>
                </div>
              </div>

              {/* CARD HOLDER */}
              <div className='flex flex-row justify-left w-full h-[80%]'>
                <div className='relative w-[60%] h-[90%] bg-[#303334] rounded-2xl flex justify-center items-center m-5'>
                  <p className='text-white text-2xl py-5 pl-15 leading-7'>
                  We really want to make sure you get the best care possible, your health is important to us, and we are here to help you the whole way. If you have any questions, just let us know!
                  </p>
                  <span className='w-20 h-20 bg-[#4CA9EE] rounded-full absolute -left-10 text-5xl white font-inikaBold'>
                    <div className='flex justify-center items-center w-full h-full'>
                      3
                    </div>
                  </span>
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