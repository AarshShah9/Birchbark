import React from 'react';
import { motion } from "framer-motion";

const CreateOrganizationPage = () => {
    return (
        <div className='bg-[#232627] text-white w-full flex flex-col items-center'>
            <div className='lg:w-[95%] w-[80%] my-8 flex flex-row justify-between items-center'>
                <div className='lg:m-3 m-8 lg:text-3xl text-4xl font-bold h-14 w-full flex-initial'>Create Organization</div>
                <div>
                    <motion.a 
                        href='/' 
                        className='lg:m-3 m-8 lg:w-32 w-40 lg:h-11 h-14 bg-blue-500 flex justify-center items-center font-bold lg:text-xl text-2xl rounded-full'
                        whileHover={{ scale: 1.05 }}
                    >
                        Back
                    </motion.a>
                </div>
            </div>
            <div className='bg-[#303334] h-fit lg:w-[95%]  w-[80%] flex flex-col rounded-xl py-20 mb-24'>
                <div className=''>
                    <form className='flex flex-col justify-center items-center'>
                        <label className='lg:text-2xl text-4xl font-bold mt-8 mb-6 text-center'>Organization Details</label>
                        <input className='bg-[#232627] h-14 w-[80%] text-white lg:text-xl text-2xl font-medium rounded-xl border-2 p-4 mb-8' type='text' placeholder='Organization Name' />
                        <input className='bg-[#232627] h-14 w-[80%] text-white lg:text-xl text-2xl font-medium rounded-xl border-2 p-4 mb-8' type='text' placeholder='Organization Phone' />
                        <input className='bg-[#232627] h-14 w-[80%] text-white lg:text-xl text-2xl font-medium rounded-xl border-2 p-4 mb-8' type='text' placeholder='Organization Website' />
                        <input className='bg-[#232627] h-14 w-[80%] text-white lg:text-xl text-2xl font-medium rounded-xl border-2 p-4 mb-8' type='text' placeholder='Organization Email' />
                        <input className='bg-[#232627] h-14 w-[80%] text-white lg:text-xl text-2xl font-medium rounded-xl border-2 p-4 mb-8' type='text' placeholder='Organization Website' />
                        <input className='bg-[#232627] h-14 w-[80%] text-white lg:text-xl text-2xl font-medium rounded-xl border-2 p-4 mb-8' type='text' placeholder='Organization Doctor' />
                        <input className='bg-[#232627] h-14 w-[80%] text-white lg:text-xl text-2xl font-medium rounded-xl border-2 p-4 mb-8' type='text' placeholder='Organization Patients' />

                        <label className='lg:text-2xl text-4xl font-bold mt-8 mb-6 text-center'>Organization Address Information</label>
                        <input className='bg-[#232627] h-14 w-[80%] text-white lg:text-xl text-2xl font-medium rounded-xl border-2 p-4 mb-8' type='text' placeholder='Address' />
                        <input className='bg-[#232627] h-14 w-[80%] text-white lg:text-xl text-2xl font-medium rounded-xl border-2 p-4 mb-8' type='text' placeholder='Apt' />
                        <input className='bg-[#232627] h-14 w-[80%] text-white lg:text-xl text-2xl font-medium rounded-xl border-2 p-4 mb-8' type='text' placeholder='City' />
                        <input className='bg-[#232627] h-14 w-[80%] text-white lg:text-xl text-2xl font-medium rounded-xl border-2 p-4 mb-8' type='text' placeholder='Province' />
                        {/* <input className='bg-[#232627] h-14 w-[80%] text-white lg:text-xl text-2xl font-medium rounded-xl border-2 p-4 mb-8' type='text' placeholder='Country' /> */}
                        <input className='bg-[#232627] h-14 w-[80%] text-white lg:text-xl text-2xl font-medium rounded-xl border-2 mb-8 p-4' type='text' placeholder='Postal Code' />

                        <motion.a 
                            href='/' 
                            className='bg-blue-500 lg:h-12 h-14 w-[60%] flex justify-center items-center font-bold text-2xl rounded-full'
                            whileHover={{ scale: 1.05 }}
                        >Create</motion.a>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateOrganizationPage;