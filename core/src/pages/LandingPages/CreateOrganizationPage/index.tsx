import React from 'react';
import { motion } from "framer-motion";

const CreateOrganizationPage = () => {
    return (
        <div className='bg-[#232627] text-white w-full flex flex-col items-center'>
            <div className='lg:w-[95%] w-[80%]  my-8 flex flex-row justify-between items-center '>
                <motion.a 
                    href='/' 
                    className='lg:m-3 m-8 lg:w-32 w-40 lg:h-11 h-14 bg-blue-500 flex justify-center items-center font-bold lg:text-xl text-2xl rounded-full'
                    whileHover={{ scale: 1.05 }}
                >
                    Back
                </motion.a>
            </div>
            <div className='h-fit lg:w-[95%]  w-[80%] flex flex-col rounded-xl py-20 mb-24 '>
                <div>
                    <h1 className='lg:text-5xl text-6xl font-bold text-center mb-8'>Create Organization</h1>
                    <p className='text-lg text-center mb-20' >This is the admin account you will have to manage all of your patients, schedule appointments, approve appoitnments, etc.</p>
                </div>
                <div className=''>
                    <form className='flex flex-col justify-center items-center'>
                        <label className='lg:text-2xl text-3xl font-bold mt-8 mb-6 text-center'>Organization Details</label>
                        <input className='bg-[#ffffff] h-14 w-[80%] text-black lg:text-xl text-2xl font-medium rounded-xl border p-4 mb-8' type='text' placeholder='Organization Name' />
                        <input className='bg-[#ffffff] h-14 w-[80%] text-black lg:text-xl text-2xl font-medium rounded-xl border p-4 mb-8' type='text' placeholder='Organization Phone' />
                        <input className='bg-[#ffffff] h-14 w-[80%] text-black lg:text-xl text-2xl font-medium rounded-xl border p-4 mb-8' type='text' placeholder='Organization Website' />
                        <input className='bg-[#ffffff] h-14 w-[80%] text-black lg:text-xl text-2xl font-medium rounded-xl border p-4 mb-8' type='text' placeholder='Organization Email' />
                        <input className='bg-[#ffffff] h-14 w-[80%] text-black lg:text-xl text-2xl font-medium rounded-xl border p-4 mb-8' type='text' placeholder='Organization Website' />
                        <input className='bg-[#ffffff] h-14 w-[80%] text-black lg:text-xl text-2xl font-medium rounded-xl border p-4 mb-8' type='text' placeholder='Organization Doctor' />
                        <input className='bg-[#ffffff] h-14 w-[80%] text-black lg:text-xl text-2xl font-medium rounded-xl border p-4 mb-8' type='text' placeholder='Organization Patients' />

                        <label className='lg:text-2xl text-3xl font-bold mt-8 mb-6 text-center'>Organization Address Information</label>
                        <input className='bg-[#ffffff] h-14 w-[80%] text-black lg:text-xl text-2xl font-medium rounded-xl border p-4 mb-8' type='text' placeholder='Address' />
                        <input className='bg-[#ffffff] h-14 w-[80%] text-black lg:text-xl text-2xl font-medium rounded-xl border p-4 mb-8' type='text' placeholder='Apt' />
                        <input className='bg-[#ffffff] h-14 w-[80%] text-black lg:text-xl text-2xl font-medium rounded-xl border p-4 mb-8' type='text' placeholder='City' />
                        <input className='bg-[#ffffff] h-14 w-[80%] text-black lg:text-xl text-2xl font-medium rounded-xl border p-4 mb-8' type='text' placeholder='Province' />
                        <input className='bg-[#ffffff] h-14 w-[80%] text-black lg:text-xl text-2xl font-medium rounded-xl border mb-8 p-4' type='text' placeholder='Postal Code' />

                        <motion.a 
                            href='/' 
                            className='bg-blue-500 lg:h-12 h-14 w-64 flex justify-center items-center font-bold text-2xl rounded-full'
                            whileHover={{ scale: 1.05 }}
                        >Create</motion.a>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateOrganizationPage;