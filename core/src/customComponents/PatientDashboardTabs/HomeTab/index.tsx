import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ChatProps {
    doctorName: string;
    link: string;
}

const Chat: React.FC<ChatProps> = ({ doctorName, link }) => {
    return(
        <motion.a whileHover={{scale: 1.05}} className='bg-[#383838] rounded-lg flex flex-row justify-between m-1 p-6 mx-4'>
            <h1 className='text-white text-3xl font-bold'>{doctorName}</h1>
            <img src='/Icons/ChatBubblesIcon.svg' alt='Chat Icon' className='w-8 h-8'></img>
        </motion.a>
    )
}

interface AppointmentProps {
    doctorName: string;
    specialty: string;
    date: string;
    time: string;
}

const Appointment: React.FC<AppointmentProps> = ({ doctorName, specialty, date, time }) => {
    return(
        <motion.a whileHover={{scale: 1.05}} className='bg-[#383838] rounded-lg flex flex-col m-1 p-6 aspect-square w-52 h-52'>
            <h1 className='text-white text-3xl font-bold'>{doctorName}</h1>
            <h3 className='text-white text-xl font-semibold leading-tight mt-1'>{specialty}</h3>
            <h3 className='text-white mt-2'>{date}</h3>
            <h3 className='text-white'>{time}</h3>
        </motion.a>
    )
}

interface AppointmentTypeProps {
    type: string;
    icon: string;
}

const AppointmentType: React.FC<AppointmentTypeProps> = ({ type, icon }) => {
    return(
        <motion.a whileHover={{scale: 1.05}} className='bg-[#383838] rounded-lg flex items-center flex-col m-1 p-6 aspect-square h-36 w-36'>
            <img src={icon} alt={type} className='w-14 h-14'></img>
            <h1 className='text-white text-xl font-bold text-center leading-tight mt-1'>{type}</h1>
        </motion.a>
    )
}

const HomeTab = () => {
    const patientName = 'John Doe';
    const activeChats = [];

    return (
        <div className='bg-[#232627] w-full h-full p-12'>
            <h1 className='text-white text-5xl font-bold mb-8'>Welcome, <span>{patientName.split(' ')[0]}</span></h1>
            
            {/* This is the */}
            <div className='flex flex-row w-full space-x-4'>
                <div className='bg-[#141718] rounded-lg w-2/5 flex flex-col'>
                    <div className=''>
                        <h1 className='text-white text-3xl font-bold mt-4 mx-8'>Active Chats</h1>
                    </div>
                    <div className='flex flex-col my-4 space-y-4 overflow-y-scroll h-[100%]'>
                        <Chat doctorName='Dr. Murphy' link='#'></Chat>
                        <Chat doctorName='Dr. Larson' link='#'></Chat>
                        <Chat doctorName='Dr. Smith' link='#'></Chat>
                    </div>
                </div>
                <div className='flex flex-col w-3/5'>
                    <div className='bg-[#141718] rounded-lg'>
                        <div className=''>
                            <h1 className='text-white text-3xl font-bold mt-4 mx-8'>Upcomming Appointments</h1>
                        </div>
                        <div className='flex flex-row m-4 space-x-4 overflow-x-scroll h-64'>
                            <Appointment doctorName='Dr. Smith' specialty='Primary Care Provider' date='12/12/2021' time='12:00 PM'></Appointment>
                            <Appointment doctorName='Dr. Murphy' specialty='Cardiology' date='12/12/2021' time='12:00 PM'></Appointment>
                            <Appointment doctorName='Dr. Larson' specialty='Respiratory' date='12/12/2021' time='12:00 PM'></Appointment>
                        </div>
                    </div>
                    <div className='bg-[#141718] rounded-lg'>
                        <div className=''>
                            <h1 className='text-white text-3xl font-bold mt-4 mx-8'>Book an Appointment</h1>

                        </div>
                        <div className='flex flex-row m-4 space-x-4 overflow-x-scroll h-48'>
                            <AppointmentType type='PC Provider' icon='/Icons/DoctorIcon.svg'></AppointmentType>
                            <AppointmentType type='Cardiology' icon='/Icons/HeartIcon.svg'></AppointmentType>
                            <AppointmentType type='Respiratory' icon='/Icons/LungsIcon.svg'></AppointmentType>
                            <AppointmentType type='Eye Doctor' icon='/Icons/EyeIcon.svg'></AppointmentType>
                            <AppointmentType type='Dermatologist' icon='/Icons/SkinIcon.svg'></AppointmentType>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTab;