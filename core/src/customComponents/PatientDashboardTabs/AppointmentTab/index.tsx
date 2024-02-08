import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


// TODO: Heres the list
// 1. Add Icons to table headers
// 2. Add a button to schedule an appointment
// 3. Make the table dynamic to work on ipad view


const AppointmentTab = () => {
    const [UpcommingAppointmentsSelected, setUpcommingAppointmentsSelected] = useState(true);

    // Upcomming Appointments
    type Appointment = {
        date: string;
        time: string;
        doctor: string;
        clinic: string;
    };
    
    const dummyUpcommingAppointmentData: Appointment[] = [
        {
            date: '10/10/2021',
            time: '10:00 AM',
            doctor: 'Dr. John Doe',
            clinic: '123 Main St.'
        },
        {
            date: '10/10/2021',
            time: '10:00 AM',
            doctor: 'Dr. John Doe',
            clinic: '123 Main St.'
        },
        {
            date: '10/10/2021',
            time: '10:00 AM',
            doctor: 'Dr. John Doe',
            clinic: '123 Main St.'
        }
    ];

    // Past Appointments
    type PastAppointment = {
        date: string;
        time: string;
        doctor: string;
        clinic: string;
    };

    const dummyPastAppointmentData: PastAppointment[] = [
        {
            date: '10/4/2020',
            time: '11:00 AM',
            doctor: 'Dr. John Doe',
            clinic: 'Eastview Clinic.'
        },
        {
            date: '10/17/2020',
            time: '4:00 AM',
            doctor: 'Dr. Adam Smith',
            clinic: 'Eastview Clinic.'
        },
        {
            date: '10/22/2019',
            time: '9:00 AM',
            doctor: 'Dr. Brown',
            clinic: 'Spruce heights.'
        }
    ];

    return (
        <div className='bg-[#232627] w-full h-full flex'>
            
            {/* appointments background */}
            <div className='bg-[#141718] w-full m-8 p-8 rounded-md'>
                <div className='flex space-x-2'>
                <motion.a 
                    href='#' 
                    className={`text-white font-bold text-2xl px-12 py-4 rounded-md`}
                    style={{ backgroundColor: UpcommingAppointmentsSelected ? '#4CA9EE' : '#505151' }}
                    onClick={() => setUpcommingAppointmentsSelected(true)}
                    whileHover={{ scale: 1.025 }}
                    animate={{ backgroundColor: UpcommingAppointmentsSelected ? '#4CA9EE' : '#505151' }}
                    transition={{ duration: 0.5 }}
                >
                    Upcomming Appointments
                </motion.a>
                <motion.a 
                    href='#' 
                    className={`text-white font-bold text-2xl px-12 py-4 rounded-md`}
                    style={{ backgroundColor: UpcommingAppointmentsSelected ? '#505151' : '#4CA9EE' }}
                    onClick={() => setUpcommingAppointmentsSelected(false)}
                    whileHover={{ scale: 1.025}}
                    animate={{ backgroundColor: UpcommingAppointmentsSelected ? '#505151' : '#4CA9EE' }}
                    transition={{ duration: 0.5 }}
                >
                    Past Appointments
                </motion.a>
                </div>

                {/* Render either the upcomming appointments or Past appointments table data */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {UpcommingAppointmentsSelected ? (
                        <div className='mt-8 flex flex-col'>
                            {dummyUpcommingAppointmentData.length > 0 ? (
                                <div>

                                    <div className='p-4 mb-4 flex flex-row justify-between'>
                                        <p className='text-white font-bold text-2xl'>Date</p>
                                        <p className='text-white font-bold text-2xl'>Time</p>
                                        <p className='text-white font-bold text-2xl'>Doctor</p>
                                        <p className='text-white font-bold text-2xl'>Clinic</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        {dummyUpcommingAppointmentData.map((appointment) => (
                                            <div key={appointment.date} className='bg-[#2D2D2D] rounded-md p-4 mb-4 flex flex-row justify-between'>
                                                <p className='text-white font-bold text-xl'>{appointment.date}</p>
                                                <p className='text-white font-bold text-xl'>{appointment.time}</p>
                                                <p className='text-white font-bold text-xl'>{appointment.doctor}</p>
                                                <p className='text-white font-bold text-xl'>{appointment.clinic}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className='mt-8 flex flex-col items-center '>
                                    <p className='text-white font-bold text-2xl'>No Appointments</p>
                                    <p className='text-white'>You have no appointments scheduled</p>
                                    <motion.a 
                                        href='#'
                                        className='bg-[#4CA9EE] text-white font-bold text-2xl px-12 py-4 mt-12 rounded-md'
                                        whileHover={{ scale: 1.025 }}   
                                    >
                                        Schedule an Appointment
                                    </motion.a>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className='mt-8 flex flex-col'>
                            {dummyPastAppointmentData.length > 0 ? (
                                <div>

                                    <div className='p-4 mb-4 flex flex-row justify-between'>
                                        <p className='text-white font-bold text-2xl'>Date</p>
                                        <p className='text-white font-bold text-2xl'>Time</p>
                                        <p className='text-white font-bold text-2xl'>Doctor</p>
                                        <p className='text-white font-bold text-2xl'>Clinic</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        {dummyPastAppointmentData.map((appointment) => (
                                            <div key={appointment.date} className='bg-[#2D2D2D] rounded-md p-4 mb-4 flex flex-row justify-between'>
                                                <p className='text-white font-bold text-xl'>{appointment.date}</p>
                                                <p className='text-white font-bold text-xl'>{appointment.time}</p>
                                                <p className='text-white font-bold text-xl'>{appointment.doctor}</p>
                                                <p className='text-white font-bold text-xl'>{appointment.clinic}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className='mt-8 flex flex-col items-center '>
                                    <p className='text-white font-bold text-2xl'>No Appointments</p>
                                    <p className='text-white'>You have no past appointments</p>
                                    <motion.a 
                                        href='#'
                                        className='bg-[#4CA9EE] text-white font-bold text-2xl px-12 py-4 mt-12 rounded-md'
                                        whileHover={{ scale: 1.025 }}   
                                    >
                                        Schedule an Appointment
                                    </motion.a>
                                </div>
                            )}
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default AppointmentTab;