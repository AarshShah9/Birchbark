import React from 'react';
import Navbar from '~/customComponents/Navbar';
import Footer from '~/customComponents/Footer';
import { motion } from "framer-motion";

const PricingPage: React.FC = () => {
  return (
    <div>
        <Navbar />
          <div className='w-full h-fit py-10 text-white bg-[#232627] '>

            <div className='w-full h-fit my-24 flex flex-col justify-center items-center'>
              <h1 className='text-center text-5xl w-[70%] font-inikaBold'>Pricing Page</h1>
              <p className='text-center text-3xl w-[70%] font-inikaRegular'>We custom fit our pricing plans to our clients, to offer the perfect opportunity to grow</p>
            </div>


            <div className=' w-full h-fit flex justify-center'>
              <div className='flex xl:hidden 2xl:w-[100%] w-[80%] flex-row h-fit justify-center  '>
                {/* Left Section */}
                <div className='mb-8 mx-4 h-auto 2xl:w-[510px] w-[220px] flex items-end justify-center   '>
                  <div className=' h-fit '>
                    <div>
                      <p className='text-xl'>M A J O R  F E A T U R E S</p>
                      <div className='w-full h-1 bg-white'></div>
                      <div className='flex flex-col'>
                        <div className='flex items-center text-xl w-auto h-9 my-[2.5px]'>Diagnostic Tool</div>
                        <div className='flex items-center text-xl w-auto h-9 my-[2.5px]'>Symptom360 AI Chatbot</div>
                        <div className='flex items-center text-xl w-auto h-9 my-[2.5px]'>Video + Chat Conferencing</div>
                        <div className='flex items-center text-xl w-auto h-9 my-[2.5px]'>Full Image Library</div>
                        <div className='flex items-center text-xl w-auto h-9 my-[2.5px]'>Access to Event Board</div>
                        <div className='flex items-center text-xl w-auto h-9 my-[2.5px]'>Custom Integrations</div>
                        <div className='flex items-center text-xl w-auto h-9 my-[2.5px]'>Total Patient Cap</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Section */}
                <div className='flex flex-row justify-center w-[75%] 2xl:w-[95%] h-fit m-4  '>

                  {/* Pricng Card 1 */}
                  <div className='flex flex-col justify-between bg-[#303334] w-[270px] h-[600px] pb-[15px] mx-4 rounded-[16px]'>
                    <div className='flex flex-col mt-5 px-5 h-56'>
                      <div className='mb-2 font-bold text-[24px]'>Starter</div>
                      <div className='leading-tight text-[16px] h-22 '>The starter tier is for those who would like the basic access to our services with limited support.</div>
                    </div>
                    
                    <div className='px-5 pb-5'>
                      <div className=' mb-2 text-2xl'><span className='text-[40px] font-bold'>$800</span> <span className='text-[16px] text-[#BFBFBF]'>/ month</span></div>
                      <motion.a 
                        whileHover={{scale:1.1}}
                        href='' 
                        className='bg-[#4CA9EE] h-14 mb-2 rounded-[8px] text-center flex justify-center items-center font-bold text-xl'
                      >
                          Get Started
                      </motion.a>
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

                  {/* Pricng Card 2 */}
                  <div className='flex flex-col justify-between bg-[#303334] w-[270px] h-[600px] pb-[15px] mx-4 rounded-[16px]'>
                    <div className='flex flex-col mt-5 px-5 h-56'>
                      <div className='mb-2 font-bold text-[24px]'>Pro</div>
                      <div className='leading-tight text-[16px] h-22 '>For those who would like even more features with even more support.</div>
                    </div>
                    
                    <div className='px-5 pb-5'>
                      <div className=' mb-2 text-2xl'><span className='text-[40px] font-bold'>$1200</span> <span className='text-[16px] text-[#BFBFBF]'>/ month</span></div>
                      <motion.a 
                        whileHover={{scale:1.1}}
                        href='' 
                        className='bg-[#4CA9EE] h-14 mb-2 rounded-[8px] text-center flex justify-center items-center font-bold text-xl'
                      >
                          Get Started
                      </motion.a>
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

                  {/* Pricng Card 3 */}
                  <div className='flex flex-col justify-between bg-[#303334] w-[270px] h-[600px] pb-[15px] mx-4 rounded-[16px]'>
                    <div className='flex flex-col mt-5 px-5 h-56'>
                      <div className='mb-2 font-bold text-[24px]'>Request a quote</div>
                      <div className='leading-tight text-[16px] h-22 '>If you’re needs don’t fall into the other pricing plans, please contact us to request a quote below.</div>
                    </div>
                    
                    <div className='px-5 pb-5'>
                      <div className=' mb-2 text-2xl text-center '><span className='text-[16px] text-[#BFBFBF] text-center'>custom pricing</span></div>
                      <motion.a 
                        whileHover={{scale:1.1}}
                        href='' 
                        className='bg-[#4CA9EE] h-14 mb-2 rounded-[8px] text-center flex justify-center items-center font-bold text-xl'
                      >
                          Request a quote
                      </motion.a>
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

              {/* LG breakpoint  */}
              <div className='hidden xl:flex w-full h-fit justify-center'>
                <div className='flex justify-center flex-wrap h-fit'>


                  {/* Card 1*/}
                  <div className='m-2 flex sm:w-72 w-80 h-[640px] rounded-[16px] bg-[#303334]  flex-col'>
                    <div className='flex flex-col mt-5 px-5 h-32'>
                      <div className='mb-2 font-bold text-[24px]'>Starter</div>
                      <div className='leading-tight text-[16px] h-22 '>The starter tier is for those who would like the basic access to our services with limited support.</div>
                    </div>
                    
                    <div className='px-5 pb-5 flex flex-col h-32'>
                      <div className=' mb-2 text-2xl h-16'>
                        <span className='text-[40px] font-bold'>$800</span> <span className='text-[16px] text-[#BFBFBF]'>/ month</span>
                      </div>
                      <motion.a 
                        whileHover={{scale:1.1}}
                        href='' 
                        className='bg-[#4CA9EE] h-14 mb-2 rounded-[8px] text-center flex justify-center items-center font-bold text-xl'
                      >
                          Get Started
                      </motion.a>
                    </div>

                    <div className='flex flex-col px-5'>
                      <div className='flex flex-row justify-left items-start '>
                        <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-10 h-10 m-[2.5px] rounded-full'>&#x2713;</div>
                        <span className='text-xl h-full flex items-center ml-3'> Diagnostic Tool </span>
                      </div>
                      <div className='flex flex-row justify-left items-start '>
                        <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-10 h-10 m-[2.5px] rounded-full'>&#x2713;</div>
                        <span className='text-xl h-full flex items-center ml-3'> Symptom360 AI Chatbot </span>
                      </div>
                      <div className='flex flex-row justify-left items-start'>
                        <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-10 h-10 m-[2.5px] rounded-full'>&#x2713;</div>
                        <span className='text-xl h-full flex items-center ml-3'> Video + Chat Conferencing </span>
                      </div>
                      <div className='flex flex-row justify-left items-start '>
                        <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-10 h-10 m-[2.5px] rounded-full'>&#x2713;</div>
                        <span className='text-xl h-full flex items-center ml-3'> Full Image Library </span>
                      </div>
                      <div className='flex flex-row justify-left items-start '>
                        <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-10 h-10 m-[2.5px] rounded-full'>&#x2713;</div>
                        <span className='text-xl h-full flex items-center ml-3'> 100 Total Patient Cap </span>
                      </div>
                    </div>
                  </div>


                  {/* Card 2*/}
                  <div className='m-2 flex sm:w-72 w-80 h-[640px] rounded-[16px] bg-[#303334]  flex-col'>
                    <div className='flex flex-col mt-5 px-5 h-32'>
                      <div className='mb-2 font-bold text-[24px]'>Pro</div>
                      <div className='leading-tight text-[16px] h-22 '>For those who would like even more features with even more support.</div>
                    </div>
                    
                    <div className='px-5 pb-5 flex flex-col h-32'>
                      <div className=' mb-2 text-2xl h-16'>
                        <span className='text-[40px] font-bold'>$1200</span> <span className='text-[16px] text-[#BFBFBF]'>/ month</span>
                      </div>
                      <motion.a 
                        whileHover={{scale:1.1}}
                        href='' 
                        className='bg-[#4CA9EE] h-14 mb-2 rounded-[8px] text-center flex justify-center items-center font-bold text-xl'
                      >
                          Get Started
                      </motion.a>
                    </div>

                    <div className='flex flex-col px-5'>
                      <div className='flex flex-row justify-left items-start '>
                        <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-10 h-10 m-[2.5px] rounded-full'>&#x2713;</div>
                        <span className='text-xl h-full flex items-center ml-3'> Diagnostic Tool </span>
                      </div>
                      <div className='flex flex-row justify-left items-start '>
                        <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-10 h-10 m-[2.5px] rounded-full'>&#x2713;</div>
                        <span className='text-xl h-full flex items-center ml-3'> Symptom360 AI Chatbot </span>
                      </div>
                      <div className='flex flex-row justify-left items-start'>
                        <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-10 h-10 m-[2.5px] rounded-full'>&#x2713;</div>
                        <span className='text-xl h-full flex items-center ml-3'> Video + Chat Conferencing </span>
                      </div>
                      <div className='flex flex-row justify-left items-start '>
                        <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-10 h-10 m-[2.5px] rounded-full'>&#x2713;</div>
                        <span className='text-xl h-full flex items-center ml-3'> Full Image Library </span>
                      </div>
                      <div className='flex flex-row justify-left items-start '>
                        <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-10 h-10 m-[2.5px] rounded-full'>&#x2713;</div>
                        <span className='text-xl h-full flex items-center ml-3'> Access to Event Board </span>
                      </div>
                      <div className='flex flex-row justify-left items-start '>
                        <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-10 h-10 m-[2.5px] rounded-full'>&#x2713;</div>
                        <span className='text-xl h-full flex items-center ml-3'> 1000 Total Patient Cap </span>
                      </div>
                    </div>
                  </div>


                  {/* Card 3*/}
                  <div className='m-2 flex sm:w-72 w-80 h-[640px] rounded-[16px] bg-[#303334]  flex-col'>
                    <div className='flex flex-col mt-5 px-5 h-32'>
                      <div className='mb-2 font-bold text-[24px]'>Request a quote</div>
                      <div className='leading-tight text-[16px] h-22 '>If you’re needs don’t fall into the other pricing plans, please contact us to request a quote below.</div>
                    </div>
                    
                    <div className='px-5 pb-5 flex flex-col h-32'>
                      <div className='mb-2 text-2xl h-16 flex justify-center'>
                        <span className='text-[16px] text-[#BFBFBF]'>custom pricing</span>
                      </div>
                      <motion.a 
                        whileHover={{scale:1.1}}
                        href='' 
                        className='bg-[#4CA9EE] h-14 mb-2 rounded-[8px] text-center flex justify-center items-center font-bold text-xl'
                      >
                          Request a quote
                      </motion.a>
                    </div>

                    <div className='flex flex-col px-5'>
                      <div className='flex flex-row justify-left items-start '>
                        <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-10 h-10 m-[2.5px] rounded-full'>&#x2713;</div>
                        <span className='text-xl h-full flex items-center ml-3'> Diagnostic Tool </span>
                      </div>
                      <div className='flex flex-row justify-left items-start '>
                        <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-10 h-10 m-[2.5px] rounded-full'>&#x2713;</div>
                        <span className='text-xl h-full flex items-center ml-3'> Symptom360 AI Chatbot </span>
                      </div>
                      <div className='flex flex-row justify-left items-start'>
                        <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-10 h-10 m-[2.5px] rounded-full'>&#x2713;</div>
                        <span className='text-xl h-full flex items-center ml-3'> Video + Chat Conferencing </span>
                      </div>
                      <div className='flex flex-row justify-left items-start '>
                        <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-10 h-10 m-[2.5px] rounded-full'>&#x2713;</div>
                        <span className='text-xl h-full flex items-center ml-3'> Full Image Library </span>
                      </div>
                      <div className='flex flex-row justify-left items-start '>
                        <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-10 h-10 m-[2.5px] rounded-full'>&#x2713;</div>
                        <span className='text-xl h-full flex items-center ml-3'> Access to Event Board </span>
                      </div>
                      <div className='flex flex-row justify-left items-start '>
                        <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-10 h-10 m-[2.5px] rounded-full'>&#x2713;</div>
                        <span className='text-xl h-full flex items-center ml-3'> Custom Integrations </span>
                      </div>
                      <div className='flex flex-row justify-left items-start '>
                        <div className='flex justify-center items-center text-xl font-bold bg-[#282828] w-10 h-10 m-[2.5px] rounded-full'>&#x2713;</div>
                        <span className='text-xl h-full flex items-center ml-3'> 1000 Total Patient Cap </span>
                      </div>
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