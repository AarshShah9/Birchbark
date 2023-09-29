import React from 'react';
import Navbar from '../../../customComponents/Navbar';
import Footer from '../../../customComponents/Footer'; 
import { motion } from "framer-motion";


const AboutUsPage: React.FC = () => {
  return (
    <div className='bg-[#232627]'>
        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <div className='text-white'>
          <div className='flex justify-center items-center md:pt-24 md:h-[35vh] h-[40vh] '>
            <div className='md:w-[85%] xl:w-[70%] w-[50%]'>
              <h1 className='md:pb-5 md:text-3xl text-5xl text-center font-inikaBold'>Welcome to Symptom 360</h1>
              <p className='md:text-xl text-2xl text-center font-inikaRegular'>
              Your health is important to us. We understand that it can sometimes be difficult to access healthcare on reserves. We partnered with the largest reserve in Canada, the Blood Tribe, to build a platform to provide you the virtual care you deserve.
              </p>
            </div>
          </div>

          <div className='flex items-center justify-center md:pb-16 md:pt-16 pt-32 '>
            <div className='md:block relative w-full h-auto  '>
              <div className='md:relative absolute top-0 h-auto '>

                {/* div with the cards */}
                <div className='flex md:flex-col flex-row items-center justify-center w-screen md:h-full h-56  '>
                  <motion.div whileHover={{scale:1.1}} className='flex flex-col items-center pt-6 lg:h-72 h-96 sm:w-60 md:w-96 lg:w-60 2xl:w-72 w-80 bg-[#303334] shadow-xl rounded-2xl p-4 m-4'>
                    <div>
                      <img src='/icons/heart.svg' alt='icon' className='lg:w-8 w-12'/>
                    </div>
                    <h1 className='font-inikaBold lg:text-3xl xl:text-4xl text-5xl font-bold mb-4'>Trust</h1>
                    <p className='font-inikaRegular lg:text-lg text-xl'>Trust is important in us. Our platform connects you with local doctors who are trusted members of your community.</p>
                  </motion.div>

                  <motion.div whileHover={{scale:1.1}} className='flex flex-col items-center pt-6 lg:h-72 h-96 sm:w-60 md:w-96 lg:w-60 2xl:w-72 w-80 bg-[#303334] shadow-xl rounded-2xl p-4 m-4'>
                    <div>
                      <img src='/icons/handshake.svg' alt='icon' className='lg:w-8 w-12'/>
                    </div>
                    <h1 className='font-inikaBold lg:text-3xl xl:text-4xl text-5xl font-bold mb-4'>Partnership</h1>
                    <p className='font-inikaRegular lg:text-lg text-xl'>This platform was built in partnership with the Blood Tribe to meet the specific needs of Indigenous Peoples in Canada.</p>
                  </motion.div>

                  <motion.div whileHover={{scale:1.1}} className='flex flex-col items-center pt-6 lg:h-72 h-96 sm:w-60 md:w-96 lg:w-60 2xl:w-72 w-80 bg-[#303334] shadow-xl rounded-2xl p-4 m-4'>
                    <div>
                      <img src='/icons/healingCircle.svg' alt='icon' className='lg:w-8 w-12'/>
                    </div>
                    <h1 className='font-inikaBold lg:text-3xl xl:text-4xl text-5xl font-bold mb-4'>Culture</h1>
                    <p className='font-inikaRegular lg:text-lg text-xl'>Through our website, you can connect with Elders and traditional healers in addition to doctors.</p>
                  </motion.div>
                </div>

              </div>
            </div>
          </div>


          <div className='w-full'>
            <img src='/whiteWave.svg' alt='a white wave graphic' className='w-full -z-1' />
            <div className='w-full h-full bg-white md:px-5 lg:pb-20 pb-40 md:pt-12 pt-64 flex justify-center'>
              <div className='flex flex-col items-center '>
                <h1 className='md:w-[90%] w-[70%] text-center flex justify-center text-black md:text-3xl text-5xl font-inikaBold pb-8'>
                  You choose how you want to talk to your healthcare team
                </h1>


                <div className='flex flex-col '>
                  <div className='flex flex-row mb-8 px-2'>
                    <div className='flex justify-center items-center'>
                      <div className='lg:w-12 lg:h-12 w-20 h-20 rounded-full bg-[#4CA9EE] flex justify-center items-center aspect-[1/1]'>
                        <img src='/icons/video.svg' className='aspect-[1/1] lg:w-8 lg:h-8 w-14 h-14'></img>
                      </div>
                    </div>
                    
                    <span className='flex items-center text-black md:text-lg lg:text-xl 2xl:text-2xl text-3xl pl-8 font-medium'>
                      Video: You and your doctor can see one-another while talking
                    </span>
                  </div>

                  <div className='flex flex-row mb-8 px-2'>
                    <div className='flex justify-center items-center'>
                      <div className='lg:w-12 lg:h-12 w-20 h-20 rounded-full bg-[#4CA9EE] flex justify-center items-center aspect-[1/1]'>
                        <img src='/icons/phone.svg' className='aspect-[1/1] lg:w-8 lg:h-8 w-14 h-14'></img>
                      </div>
                    </div>
                    
                    <span className='flex items-center text-black md:text-lg lg:text-xl 2xl:text-2xl text-3xl pl-8 font-medium'>
                      Phone: Just call your doctor and talk about your health over the phone.
                    </span>
                  </div>

                  <div className='flex flex-row mb-8 px-2'>
                    <div className='flex justify-center items-center'>
                      <div className='lg:w-12 lg:h-12 w-20 h-20 rounded-full bg-[#4CA9EE] flex justify-center items-center aspect-[1/1]'>
                        <img src='/icons/texts.svg' className='aspect-[1/1] lg:w-8 lg:h-8 w-14 h-14'></img>
                      </div>
                    </div>
                    
                    <span className='flex items-center text-black md:text-lg lg:text-xl 2xl:text-2xl text-3xl pl-8 font-medium'>
                      Text: If you are in a hurry, you can quickly send a text to your doctor.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 1 */}
        <div className='w-full h-auto md:mt-0 mt-40 md:pb-16 pb-40 flex justify-center bg-[#232627]'>
        <div className='py-24 md:w-full lg:w-[70%] xl:w-[65%] w-[75%]'>
            <h1 className='md:text-3xl 2xl:text-5xl text-6xl text-center text-white font-inikaBold mb-12'>How Symptom 360 works</h1>
            <div className='md:flex md:justify-center'>
              <div className='xl:pl-10 pl-48 flex flex-col  h-full'>

                {/* CARD HOLDER */}
                <div className='flex flex-row justify-left w-full h-[80%]'>
                  <div className='relative md:w-64 lg:w-80 xl:w-96 w-[480px] xl:h-64 sm:h-64 md:h-80 h-72 bg-[#303334] rounded-2xl flex justify-center items-center m-5'>
                    <p className='text-white sm:text-sm xl:text-lg text-2xl pr-5 pl-15 xl:leading-6 leading-7'>
                    You will answer some easy questions about your health. This helps your doctor understand what is going on. Your answers go to your doctor in a really safe way.
                    </p>
                    <span className='w-20 h-20 bg-[#4CA9EE] rounded-full absolute -left-10 text-5xl white font-inikaBold'>
                      <div className='flex justify-center items-center w-full h-full text-white'>
                        1
                      </div>
                    </span>
                  </div>
                </div>

                {/* CARD HOLDER */}
                <div className='flex flex-row justify-right w-full h-[80%]'>
                  <div className='relative md:w-64 xl:w-96 w-[480px] xl:h-64 sm:h-64 md:h-80 h-72 bg-[#303334] rounded-2xl flex justify-center items-center m-5 md:ml-5 ml-auto'>
                    <p className='text-white sm:text-sm xl:text-lg text-2xl pr-5 pl-15 xl:leading-6 leading-7'>
                    You can pick a time to have a virtual meeting with your doctor using video, phone, or text. Your doctor will get a detailed report with your answers, which helps them understand your health status during the online visit.
                    </p>
                    <span className='w-20 h-20 bg-[#4CA9EE] rounded-full absolute -left-10 text-5xl white font-inikaBold'>
                      <div className='flex justify-center items-center w-full h-full text-white'>
                        2
                      </div>
                    </span>
                  </div>
                </div>

                {/* CARD HOLDER */}
                <div className='flex flex-row justify-left w-full h-[80%]'>
                  <div className='relative md:w-64 lg:w-80 xl:w-96 w-[480px] xl:h-64 sm:h-64 md:h-80 h-72 bg-[#303334] rounded-2xl flex justify-center items-center m-5'>
                    <p className='text-white sm:text-sm xl:text-lg text-2xl pr-5 pl-15 xl:leading-6 leading-7'>
                    We really want to make sure you get the best care possible, your health is important to us, and we are here to help you the whole way. If you have any questions, just let us know!
                    </p>
                    <span className='w-20 h-20 bg-[#4CA9EE] rounded-full absolute -left-10 text-5xl white font-inikaBold'>
                      <div className='flex justify-center items-center w-full h-full text-white'>
                        3
                      </div>
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