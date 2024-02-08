import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AppointmentTab = () => {
    const [UpcommingAppointmentsSelected, setUpcommingAppointmentsSelected] = useState(true);

    const dummyUpcommingAppointmentData = [
        
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
                {UpcommingAppointmentsSelected ? (
                    <div className='mt-8 flex flex-col border'>
                        {dummyUpcommingAppointmentData.length > 0 ? (
                            <table className='w-full'>
                                <thead>
                                    <tr>
                                        <th className='text-left pl-4 text-white'>Date</th>
                                        <th className='text-left pl-4 text-white'>Time</th>
                                        <th className='text-left pl-4 text-white'>Doctor</th>
                                        <th className='text-left pl-4 text-white'>Location</th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    {dummyUpcommingAppointmentData.map((appointment) => (
                                        <tr key={appointment.date} className='bg-[#2D2D2D]'>
                                            <td className='text-white py-4 pl-4'>{appointment.date}</td>
                                            <td className='text-white py-4 pl-4'>{appointment.time}</td>
                                            <td className='text-white py-4 pl-4'>{appointment.doctor}</td>
                                            <td className='text-white py-4 pl-4'>{appointment.clinic}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className='mt-8'>
                                <p className='text-white font-bold text-2xl'>No Appointments</p>
                                <p className='text-white'>You have no appointments scheduled</p>
                                <motion.a 
                                    href='#'
                                    className='bg-[#4CA9EE] text-white font-bold text-2xl px-12 py-4 rounded-md'
                                    whileHover={{ scale: 1.025 }}   
                                >
                                    Schedule an Appointment
                                </motion.a>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className='flex flex-col border border-red-500'>
                        <p className='text-white font-bold text-2xl'>No Appointments</p>
                        <p className='text-white'>You have no appointments scheduled</p>
                        <motion.a 
                            href='#'
                            className='bg-[#4CA9EE] text-white font-bold text-2xl px-12 py-4 rounded-md'
                            whileHover={{ scale: 1.025 }}   
                        >
                            Schedule an Appointment
                        </motion.a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AppointmentTab;