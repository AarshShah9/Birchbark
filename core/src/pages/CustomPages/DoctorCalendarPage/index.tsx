import React from 'react';
import Layout from "~/components/Layout";
import SchedulerWrapper from '~/components/SchedulerWrapper';
import PatientAppointmentRequestCard from '~/customComponents/PatientAppointmentRequestCard';

const IndexPage: React.FC = () => {

    let appointmentsData = [
        {
            patient: 'Adam Johnson',
            patientPhoto: '/images/avatar.jpg',
            appointmentType: 'Respiratory',
            date: '2021-08-10',
            time: '12:00 PM',
            duration: '30 Minutes'
        },
        {
            patient: 'Amanda Cross',
            patientPhoto: '/images/avatar-1.jpg',
            appointmentType: 'Cardiovascular',
            date: '2021-08-10',
            time: '2:00 PM',
            duration: '30 Minutes'
        },
        {
            patient: 'Adam',
            patientPhoto: '/images/avatar-2.jpg',
            appointmentType: 'Respiratory',
            date: '2021-08-10',
            time: '3:00 PM',
            duration: '30 Minutes'
        }
    ]
    
    return (
        <Layout>
            <div className='flex w-full h-full'>
                <div className='flex w-full h-full'>
                    {/* <CalendarWrapper /> */}
                    <SchedulerWrapper/>
                    
                </div>
                <div className='bg-[#141718] flex-initial w-[550px] h-full flex'>
                    <div className='flex flex-col ml-8 m-4'>
                        <div className='h4 text-white text-center my-8'>
                            Patient requested appointments
                        </div>

                        {/* This is where all the appointments go: */}
                        <div>
                            {appointmentsData.length == 0 
                                ? 
                                <div className='text-white text-center p-4 my-8 bg-slate-700 rounded-lg'>
                                    No appointments requested
                                </div>
                                :
                                appointmentsData.map((appointment, index) => {
                                    return (
                                        <PatientAppointmentRequestCard 
                                            key={index}
                                            patient={appointment.patient} 
                                            patientPhoto={appointment.patientPhoto}
                                            appointmentType={appointment.appointmentType}
                                            date={appointment.date}
                                            time={appointment.time}
                                            duration={appointment.duration}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            
        </Layout>
    );
};

export default IndexPage;
