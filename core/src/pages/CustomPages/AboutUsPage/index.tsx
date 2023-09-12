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
        <div>
          <div className='px-48 py-24'>
            <h1 className='text-5xl text-center font-inikaBold'>Welcome to Symptom 360</h1>
            <p className='text-2xl text-center font-inikaRegular'>
              We talked to many First Nations Communities in Canada to understand what problems they have with virtual healthcare. So, we made a special website just for you to get healthcare online! What matters most
            </p>
          </div>
          <div className='flex items-center justify-center'>
            <div className='flex flex-row items-center'>
                <div className='flex flex-col justify-center h-full w-[450px] md:w-64 bg-gray-900 rounded-2xl p-4'>
                  <div>
                    {/* put icon here */}
                  </div>
                  <h1 className='font-inikaBold text-5xl font-bold'>Trust</h1>
                  <p className='font-inikaRegular text-xl'>We are Symptom 360, a group of canadians proudly serving First Nations and Indigenous. We are here to connect you to doctors remotely and get you the help you need.</p>
                </div>

                <div className='flex flex-col justify-center h-full w-[450px] md:w-64 bg-gray-900 rounded-2xl p-4'>
                  <div>
                    {/* put icon here */}
                  </div>
                  <h1 className='font-inikaBold text-5xl font-bold'>Partnership</h1>
                  <p className='font-inikaRegular text-xl'>We are Symptom 360, a group of canadians proudly serving First Nations and Indigenous. We are here to connect you to doctors remotely and get you the help you need.</p>
                </div>

                <div className='flex flex-col justify-center h-full w-[450px] md:w-64 bg-gray-900 rounded-2xl p-4'>
                  <div>
                    {/* put icon here */}
                  </div>
                  <h1 className='font-inikaBold text-5xl font-bold'>Culture</h1>
                  <p className='font-inikaRegular text-xl'>We are Symptom 360, a group of canadians proudly serving First Nations and Indigenous. We are here to connect you to doctors remotely and get you the help you need.</p>
                </div>
            </div>
          </div>
          <div className='w-full'>
            <img src='/whiteWave.svg' alt='a white wave graphic' className='w-full' />
            <div className='w-full h-[500px] bg-white '>

            </div>
          </div>
         
        </div>

        {/* FOOTER */}
        <Footer />
    </div>
  );
}

export default AboutUsPage;