import React, { useState, useEffect } from 'react';
import {motion } from 'framer-motion';

const ProfileTab = () => {
    
    const [editDetails, setEdit] = useState(true);
    const [emergencyDetails, setEmergencyDetails] = useState(true);

    return (
        <div className='bg-[#232627] w-full h-full flex'>
            {/* Details About me panel */}
            <div className='bg-[#141718] w-96 h-fit mx-10 p-8 rounded-lg flex flex-none flex-col'>
                <div className='flex flex-row items-center mb-4'>
                    <img src='/Icons/Profile2.svg' alt='Profile' className='w-14 h-14'></img>
                    <h2 className='text-3xl font-bold ml-4'>Details about me</h2>
                </div>
                <div className=''>
                    <div className='flex flex-col'>
                        <h2 className='text-2xl font-medium'>Preferred First Name</h2>
                        <h3 className='text-[#B7B7B7] text-xl '>John</h3>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='text-2xl font-medium'>Gender Identity</h2>
                        <h3 className='text-[#B7B7B7] text-xl '>Male</h3>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='text-2xl font-medium'>Sexual Orientation</h2>
                        <h3 className='text-[#B7B7B7] text-xl '>Straight</h3>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='text-2xl font-medium'>Race</h2>
                        <h3 className='text-[#B7B7B7] text-xl '>Asian</h3>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='text-2xl font-medium'>Ethnicity</h2>
                        <h3 className='text-[#B7B7B7] text-xl '>Non Hispanic or Latino</h3>
                    </div>
                </div>

                {/* Make it so that when you click this you can edit all the fields then save or cancel */}
                {editDetails ? 
                <motion.button 
                    onClick={()=>{setEdit(!editDetails)}} 
                    whileHover={{cursor: 'pointer', scale:1.05}} 
                    className='bg-[#232627] my-2 rounded-md flex items-center justify-center'
                >   
                    <div className='flex flex-row'>
                        <img src='/Icons/edit.svg' alt='Edit' className='w-8 h-8'></img>
                        <p className='underline text-[#4CA9EE] text-xl pl-1'>Edit</p>
                    </div>
                </motion.button>
                :
                <div 
                    className='my-2 flex flex-row items-center p-2 space-x-2'
                >
                    <motion.button
                        onClick={()=>{}} 
                        whileHover={{cursor: 'pointer', scale:1.05}} 
                        className='bg-[#4CA9EE] rounded-lg flex flex-row w-1/2 p-2'
                    >
                        <p className='text-white text-xl font-bold text-center pl-1'>Save</p>
                    </motion.button>
                    <motion.button
                        onClick={()=>{setEdit(!editDetails)}} 
                        whileHover={{cursor: 'pointer', scale:1.05}} 
                        className='bg-red-500 rounded-lg flex flex-row w-1/2 p-2'
                    >
                        <p className='text-white text-xl font-bold text-center pl-1'>Cancel</p>
                    </motion.button>
                    
                </div>
                }
            </div>

            {/* Emergency Contact Panel */}
            <div className='bg-[#141718] w-full mr-10 h-fit p-8 rounded-lg flex flex-col'>
                <div className='flex flex-row items-center mb-4'>
                    <img src='/Icons/Star.svg' alt='Emergency Contacts' className='w-14 h-14'></img>
                    <h2 className='text-3xl font-bold ml-4'>Emergency Contacts</h2>
                </div>
                <div className='flex flex-row'>
                    <div className='mx-2'>
                        <div className='flex flex-col'>
                            <h2 className='text-2xl font-medium'>Name</h2>
                            <h3 className='text-[#B7B7B7] text-xl '>Alice Jones</h3>
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='text-2xl font-medium'>Relation</h2>
                            <h3 className='text-[#B7B7B7] text-xl '>Mother</h3>
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='text-2xl font-medium'>Address</h2>
                            <h3 className='text-[#B7B7B7] text-xl '>682 Toronto Street...</h3>
                        </div>
                    </div>
                    <div className='mx-2'>
                        <div className='flex flex-col'>
                            <h2 className='text-2xl font-medium'>Email</h2>
                            <h3 className='text-[#B7B7B7] text-xl '>alice.jones@gmail.com</h3>
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='text-2xl font-medium'>Mobile Phone</h2>
                            <h3 className='text-[#B7B7B7] text-xl '>682-902-2344</h3>
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='text-2xl font-medium'>Home Phone</h2>
                            <h3 className='text-[#B7B7B7] text-xl '>682-902-2344</h3>
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='text-2xl font-medium'>Work Phone</h2>
                            <h3 className='text-[#B7B7B7] text-xl '>682-902-2344</h3>
                        </div>
                    </div>
                    
                </div>

                {/* Make it so that when you click this you can edit all the fields then save or cancel */}
                {emergencyDetails ? 
                <motion.button 
                    onClick={()=>{setEmergencyDetails(!emergencyDetails)}} 
                    whileHover={{cursor: 'pointer', scale:1.05}} 
                    className='bg-[#232627] my-2 rounded-md flex items-center justify-center'
                >   
                    <div className='flex flex-row'>
                        <img src='/Icons/edit.svg' alt='Edit' className='w-8 h-8'></img>
                        <p className='underline text-[#4CA9EE] text-xl pl-1'>Edit</p>
                    </div>
                </motion.button>
                :
                <div 
                    className='my-2 flex flex-row items-center p-2 space-x-2'
                >
                    <motion.button
                        onClick={()=>{}} 
                        whileHover={{cursor: 'pointer', scale:1.05}} 
                        className='bg-[#4CA9EE] rounded-lg flex flex-row w-1/2 p-2'
                    >
                        <p className='text-white text-xl font-bold text-center pl-1'>Save</p>
                    </motion.button>
                    <motion.button
                        onClick={()=>{setEmergencyDetails(!emergencyDetails)}} 
                        whileHover={{cursor: 'pointer', scale:1.05}} 
                        className='bg-red-500 rounded-lg flex flex-row w-1/2 p-2'
                    >
                        <p className='text-white text-xl font-bold text-center pl-1'>Cancel</p>
                    </motion.button>
                    
                </div>
                }
            </div> 
        </div>
    );
};

export default ProfileTab;