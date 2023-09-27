import React from 'react';
import Navbar from '~/customComponents/Navbar';
import Footer from '~/customComponents/Footer';
import { motion } from "framer-motion";

const PricingPage: React.FC = () => {
  return (
    <div>
        <Navbar />
          <div className='w-full h-[1100px] text-white'>
            <div className='w-full h-96 flex flex-col justify-center items-center'>
              <h1 className='text-center text-5xl w-[70%] font-inikaBold'>Pricing Page</h1>
              <p className='text-center text-3xl w-[70%] font-inikaRegular'>We custom fit our pricing plans to our clients, to offer the perfect opportunity to grow</p>
            </div>


            <div className=' w-full h-fit flex justify-center'>
              <div className='w-[80%] flex flex-row h-fit justify-center border'>
                {/* Left Section */}
                <div className='mb-8 mx-4 h-auto flex items-end'>
                  <div className=' h-fit'>
                    <div>
                      <p className='text-xl'>M A J O R  F E A T U R E S</p>
                      <div className='w-full h-1 bg-white'></div>
                      <div className='flex flex-col'>
                        <div className='flex items-center text-xl w-auto h-9 m-[2.5px]'>Diagnostic Tool</div>
                        <div className='flex items-center text-xl w-auto h-9 m-[2.5px]'>Symptom360 AI Chatbot</div>
                        <div className='flex items-center text-xl w-auto h-9 m-[2.5px]'>Video + Chat Conferencing</div>
                        <div className='flex items-center text-xl w-auto h-9 m-[2.5px]'>Full Image Library</div>
                        <div className='flex items-center text-xl w-auto h-9 m-[2.5px]'>Access to Event Board</div>
                        <div className='flex items-center text-xl w-auto h-9 m-[2.5px]'>Custom Integrations</div>
                        <div className='flex items-center text-xl w-auto h-9 m-[2.5px]'>Total Patient Cap</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Section */}
                <div className='flex flex-row justify-center w-[65%] h-fit m-4'>

                  {/* Priicng Card */}
                  <div className='flex flex-col bg-[#303334] w-[270px] h-[fit] pb-[15px] mx-4 rounded-[16px]'>
                    <div className='flex flex-col mt-5 px-5 h-56'>
                      <div className='mb-2 font-bold text-[24px]'>Starter</div>
                      <div className='leading-tight text-[16px] h-22 '>The starter tier is for those who would like the basic access to our services with limited support.</div>
                      <div className=' mb-2 text-2xl'><span className='text-[40px] font-bold'>$800</span> <span className='text-[16px] text-[#BFBFBF]'>/ month</span></div>
                      <motion.a 
                        whileHover={{scale:1.1}}
                        href='' 
                        className='bg-[#4CA9EE] h-14 mb-2 rounded-[8px] text-center flex justify-center items-center font-bold text-xl'>Get Started</motion.a>
                    </div>
                    
                    <div className='flex flex-col px-5'>
                      <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-auto h-9 m-[2.5px] rounded-[8px]'>&#x2713;</div>
                      <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-auto h-9 m-[2.5px] rounded-[8px]'>&#x2713;</div>
                      <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-auto h-9 m-[2.5px] rounded-[8px]'>&#x2713;</div>
                      <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-auto h-9 m-[2.5px] rounded-[8px]'>&#x2713;</div>
                      <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-auto h-9 m-[2.5px] rounded-[8px]'></div>
                      <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-auto h-9 m-[2.5px] rounded-[8px]'></div>
                      <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-auto h-9 m-[2.5px] rounded-[8px]'>100</div>
                    </div>
                  </div>

                  {/* Priicng Card */}
                  <div className='flex flex-col bg-[#303334] w-[270px] h-[fit] pb-[15px] mx-4 rounded-[16px]'>
                    <div className='flex flex-col mt-5 px-5 h-56'>
                      <div className='mb-2 font-bold text-[24px]'>Pro</div>
                      <div className='leading-tight text-[16px] h-22 '>For those who would like even more features with even more support.</div>
                      <div className=' mb-2 text-2xl'><span className='text-[40px] font-bold'>$1200</span> <span className='text-[16px] text-[#BFBFBF]'>/ month</span></div>
                      <motion.a 
                        whileHover={{scale:1.1}}
                        href='' 
                        className='bg-[#4CA9EE] h-14 mb-2 rounded-[8px] text-center flex justify-center items-center font-bold text-xl'>Get Started</motion.a>
                    </div>
                    
                    <div className='flex flex-col px-5'>
                      <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-auto h-9 m-[2.5px] rounded-[8px]'>&#x2713;</div>
                      <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-auto h-9 m-[2.5px] rounded-[8px]'>&#x2713;</div>
                      <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-auto h-9 m-[2.5px] rounded-[8px]'>&#x2713;</div>
                      <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-auto h-9 m-[2.5px] rounded-[8px]'>&#x2713;</div>
                      <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-auto h-9 m-[2.5px] rounded-[8px]'>&#x2713;</div>
                      <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-auto h-9 m-[2.5px] rounded-[8px]'></div>
                      <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-auto h-9 m-[2.5px] rounded-[8px]'>1000</div>
                    </div>
                  </div>

                  {/* Priicng Card */}
                  <div className='flex flex-col bg-[#303334] w-[270px] h-[fit] pb-[15px] mx-4 rounded-[16px]'>
                    <div className='flex flex-col mt-5 px-5 h-56'>
                      <div className='mb-2 font-bold text-[24px]'>Request a quote</div>
                      <div className='leading-tight text-[16px] h-22 '>If you’re needs don’t fall into the other pricing plans, please contact us to request a quote below.</div>
                      <div className=' mb-2 text-2xl text-center '><span className='text-[16px] text-[#BFBFBF] text-center'>custom pricing</span></div>
                      <motion.a 
                        whileHover={{scale:1.1}}
                        href='' 
                        className='bg-[#4CA9EE] h-14 mb-2 rounded-[8px] text-center flex justify-center items-center font-bold text-xl'>Request a quote</motion.a>
                    </div>
                    
                    <div className='flex flex-col px-5'>
                      <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-auto h-9 m-[2.5px] rounded-[8px]'>&#x2713;</div>
                      <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-auto h-9 m-[2.5px] rounded-[8px]'>&#x2713;</div>
                      <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-auto h-9 m-[2.5px] rounded-[8px]'>&#x2713;</div>
                      <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-auto h-9 m-[2.5px] rounded-[8px]'>&#x2713;</div>
                      <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-auto h-9 m-[2.5px] rounded-[8px]'>&#x2713;</div>
                      <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-auto h-9 m-[2.5px] rounded-[8px]'>&#x2713;</div>
                      <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-auto h-9 m-[2.5px] rounded-[8px]'>By case</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <Footer />
    </div>
  );
}

export default PricingPage;