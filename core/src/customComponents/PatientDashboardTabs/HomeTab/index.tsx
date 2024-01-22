import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HomeTab = () => {
    const patientName = 'John Doe';
    const activeChats = [];

    return (
        <div className='bg-[#232627] w-full h-full p-12'>
            <h1 className='text-5xl font-bold'>Welcome, <span>{patientName.split(' ')[0]}</span></h1>
            
            {/* This is the */}
            <div className='flex flex-row w-full h-full space-x-4'>
                <div className='bg-[#141718] rounded-lg w-2/5 h-[95%]'>
                    <div className=''>
                        <h1 className='text-3xl font-bold mt-4 mx-8'>Active Chats</h1>
                    </div>
                    <div className='flex flex-col my-4 space-y-4'>
                        <motion.a whileHover={{scale: 1.05}} className='bg-[#383838] rounded-lg flex flex-row justify-between p-6 mx-4'>
                            <h1 className='text-3xl font-bold'>Dr. Sanders</h1>
                            <img src='/Icons/ChatBubblesIcon.svg' alt='Chat Icon' className='w-8 h-8'></img>
                        </motion.a>
                        <motion.a whileHover={{scale: 1.05}} className='bg-[#383838] rounded-lg flex flex-row justify-between p-6 mx-4'>
                            <h1 className='text-3xl font-bold'>Dr. Sanders</h1>
                            <img src='/Icons/ChatBubblesIcon.svg' alt='Chat Icon' className='w-8 h-8'></img>
                        </motion.a>
                    </div>
                </div>
                <div className='flex flex-col w-3/5'>
                    <div className='bg-[#141718] rounded-lg'>
                        <div className=''>
                            <h1 className='text-3xl font-bold mt-4 mx-8'>Upcomming Appointments</h1>
                        </div>
                        <div className='flex flex-row m-4 space-x-4'>
                            <motion.a href='#' whileHover={{scale: 1.05}} className='bg-[#383838] rounded-lg flex flex-col p-6 aspect-square w-64'>
                                <h1 className='text-3xl font-bold'>Dr. Murphy</h1>
                                <h3 className='text-xl font-semibold'>Cardiology</h3>
                                <h3>12/12/2021</h3>
                                <h3>12:00 PM</h3>
                            </motion.a>
                            <motion.a href='#' whileHover={{scale: 1.05}} className='bg-[#383838] rounded-lg flex flex-col p-6 aspect-square w-64'>
                                <h1 className='text-3xl font-bold'>Dr. Larson</h1>
                                <h3 className='text-xl font-semibold'>Respiratory</h3>
                                <h3>12/13/2021</h3>
                                <h3>4:00 PM</h3>
                            </motion.a>
                            
                        </div>
                    </div>
                    <div className='bg-[#141718] rounded-lg'>
                        <div className=''>
                            <h1 className='text-3xl font-bold mt-4 mx-8'>Book an Appointment</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTab;