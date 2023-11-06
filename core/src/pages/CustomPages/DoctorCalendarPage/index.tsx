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
            date: '2021-08-12',
            time: '3:00 PM',
            duration: '30 Minutes'
        },
        {
            patient: 'Adam Johnson',
            patientPhoto: '/images/avatar.jpg',
            appointmentType: 'Respiratory',
            date: '2021-07-10',
            time: '12:00 PM',
            duration: '30 Minutes'
        },
        {
            patient: 'Amanda Cross',
            patientPhoto: '/images/avatar-4.jpg',
            appointmentType: 'Cardiovascular',
            date: '2021-08-11',
            time: '2:00 PM',
            duration: '30 Minutes'
        },
        {
            patient: 'Adam',
            patientPhoto: '/images/avatar-3.jpg',
            appointmentType: 'Respiratory',
            date: '2021-08-10',
            time: '3:00 PM',
            duration: '30 Minutes'
        },
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
            patientPhoto: '/images/avatar-5.jpg',
            appointmentType: 'Cardiovascular',
            date: '2021-08-10',
            time: '2:00 PM',
            duration: '30 Minutes'
        },
        {
            patient: 'Adam',
            patientPhoto: '/images/avatar-1.jpg',
            appointmentType: 'Respiratory',
            date: '2021-08-10',
            time: '3:00 PM',
            duration: '30 Minutes'
        },
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
            patientPhoto: '/images/avatar-4.jpg',
            appointmentType: 'Cardiovascular',
            date: '2021-08-10',
            time: '2:00 PM',
            duration: '30 Minutes'
        },
        {
            patient: 'TEST',
            patientPhoto: '/images/avatar-3.jpg',
            appointmentType: 'Respiratory',
            date: '2021-07-10',
            time: '3:00 PM',
            duration: '30 Minutes'
        }
    ]
    
    interface DateLineBreakProps {
        date: string;
    }

    const DateLineBreak: React.FC<DateLineBreakProps> = ({ date }) => {
        return (
            <div className='flex flex-col font-bold mt-4'>
                <div><p>{date}</p></div>
                <div className='w-full h-[2px] bg-white'></div>
            </div>
        )
    }
    // interface Appointment {
    //     patient: string;
    //     patientPhoto: string;
    //     appointmentType: string;
    //     date: string;
    //     time: string;
    //     duration: string;
    // }
      
    // interface AppointmentsListProps {
    //     appointmentsData: Appointment[];
    // }
      
    // const AppointmentsList: React.FC<AppointmentsListProps> = ({ appointmentsData }) => {
    //     // Group appointments by date
    //     const groupedAppointments: Record<string, Appointment[]> = {};
    //     appointmentsData.forEach(appointment => {
    //         const date = appointment.date;
    //         if (!groupedAppointments[date]) {
    //             groupedAppointments[date] = [];
    //         }
    //         groupedAppointments?[date].push(appointment);
    // });
      

    // Sort the appointments by date
    appointmentsData.sort((a, b) => {
        if (a.date > b.date) {
            return 1;
        }
        if (a.date < b.date) {
            return -1;
        }
        return 0;
    })
    
      
    

    return (
        <Layout>
            <div className='flex flex-row 3xl:flex-col w-full h-full'>
                <div className='w-full '>
                    {/* <CalendarWrapper /> */}
                    <SchedulerWrapper/>
                    
                </div>
                {/* Right sidebar */}
                <div className='bg-[#141718] flex-initial w-[550px] h-full flex'>
                    <div className='flex flex-col ml-8 m-4'>
                        <div className='h4 text-white text-center my-8'>
                            Patient requested appointments
                        </div>
                        <div className='overflow-auto'>
                            <DateLineBreak date={"October 27th"}/>
                            {appointmentsData.length == 0 
                                ? 
                                <div className='text-white text-center p-4 my-8 bg-slate-700 rounded-lg'>
                                    No appointments requested
                                </div>
                                :
                                
                                // TODO: Add a way to display the appointments so that each
                                appointmentsData.map((appointment, index) => {
                                    return (
                                        
                                        <PatientAppointmentRequestCard
                                            key={index}
                                            patient={appointment.patient} 
                                            patientPhoto={appointment.patientPhoto}
                                            appointmentType={appointment.appointmentType}
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
