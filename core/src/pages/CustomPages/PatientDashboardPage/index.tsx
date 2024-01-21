import React from 'react';

const PatientDashboard: React.FC = () => {

    return (
        <div className='w-full h-screen bg-blue-500'>
            <div className='w-1/6 2xl:w-1/4 sm:w-1/3 h-screen bg-[#141718]'>
                <a href='#'><img src={'/Logos/Logo.svg'} alt='logo' className=''/></a>
                
                {/* Background for nav items */}
                <div className='bg-gray-500'>
                    <a href='#' className='flex items-center justify-start p-4 space-x-2'>
                        <img src={'/icons/HomeIcon.svg'} alt='home' className='w-6 h-6'/>
                        <span className='text-white font-bold'>Dashboard</span>
                    </a>
                    <a href='#' className='flex items-center justify-start p-4 space-x-2'>
                        <img src={'/icons/CalendarIcon.svg'} alt='appointments' className='w-6 h-6'/>
                        <span className='text-white font-bold'>Calendar</span>
                    </a>
                    <a href='#' className='flex items-center justify-start p-4 space-x-2'>
                        <img src={'/icons/PersonIcon.svg'} alt='profile' className='w-6 h-6'/>
                        <span className='text-white font-bold'>Chat</span>
                    </a>
                    <a href='#' className='flex items-center justify-start p-4 space-x-2'>
                        <img src={'/icons/BookIcon.svg'} alt='wiki' className='w-6 h-6'/>
                        <span className='text-white font-bold'>Content</span>
                    </a>
                </div>
            </div>
            <div>Right side</div>
        </div>
    );

};

export default PatientDashboard;
