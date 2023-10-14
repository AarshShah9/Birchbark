import App from 'next/app';
import React from 'react';
import Layout from "~/components/Layout";
import AppointmentTimeCard from '~/customComponents/AppointmentTimeCard';

const IndexPage: React.FC = () => {

    // These will be available appointment times
    const times = [
        "12:00 PM",
        "12:30 PM",
        "1:00 PM",
        "1:30 PM",
        "2:00 PM",
        "2:30 PM"
    ]

    return (
        <Layout>
            <div className='w-full h-full bg-[#ffffff]'>
                <div className='w-full h-56 flex flex-col justify-center items-center'>
                    <h2 className='h2 mx-32 text-black text-center'>Schedule an Appointment with your doctor</h2>
                    <p className='h6 text-[#6C7275] font-medium mt-3'>Chat with an experience doctor - and get the care you need</p>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <div className='w-[60%] flex flex-col justify-center items-center '>
                        {times.map((time, index) => (
                            <AppointmentTimeCard time={time} key={index} />
                        ))}
                    </div>
                </div>
                
            </div>
        </Layout>
    );
};

export default IndexPage;
