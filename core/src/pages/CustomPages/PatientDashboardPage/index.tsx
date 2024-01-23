import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

import TimeDisplay from '~/customComponents/TimeDisplay';
import HomeTab from '~/customComponents/PatientDashboardTabs/HomeTab';
import AppointmentsTab from '~/customComponents/PatientDashboardTabs/AppointmentTab';
import ProfileTab from '~/customComponents/PatientDashboardTabs/ProfileTab';
import WikiTab from '~/customComponents/PatientDashboardTabs/WikiTab';



const PatientDashboard: React.FC = () => {    

    const [currentTab, setCurrentTab] = useState("Home");
    const [input, setInput] = useState('');
    const [results, setResults] = useState([]);

    interface Tabs {
        tabName: string;
        tabLink: string;
        tabIcon: string;
    }
    
    const Tab: React.FC<Tabs> = ({ tabName, tabLink, tabIcon }) => {
        return(
            <a href='#' className='h-20 py-4 space-x-[22px] flex items-center justify-center bg-[#4CA9EE]'>
                <motion.div 
                    className='h-20 py-4 pl-6 flex items-center justify-start bg-[#141718] w-full'
                    whileHover={{ marginLeft: '6px', marginRight: '6px', color: '#4CA9EE' }}
                    onClick={() => setCurrentTab(tabLink)}
                >
                    <img src={tabIcon} alt='profile' className='w-10 h-10 mr-5'/>
                    <h1 className='text-white font-bold text-2xl'>{tabName}</h1>
                </motion.div>
            </a>
        )
    }

    // TODO: Change this to fetch data and sort/filter it on the backend
    const fetchData = (value: string) => {
        fetch("https://jsonplaceholder.typicode.com/users") // This is async
        .then((response) => response.json())
        .then((json) => {
            const results = json.filter((user) => {
                return( 
                    value && 
                    user && 
                    user.name && 
                    user.name.toLowerCase().includes(value.toLowerCase())
                )
            });
            setResults(results);
        });
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    };

    return (
        <div className='w-full bg-blue-500 flex flex-row'>
            
            {/* Left Side */}
            <div className='flex-none w-72 2xl:bg-blue-500 xl:bg-green-500 lg:bg-yellow-500 md:bg-orange-500 sm:bg-red-500 xs:bg-red-500  bg-[#141718]'>
                <a href='#'><img src={'/Logos/Logo.svg'} alt='logo' className=''/></a>
                
                {/* Background for nav items */}
                <div className=' flex flex-col'>
                    <Tab tabName='Home' tabLink="Home" tabIcon="/icons/HouseIcon.svg"></Tab>
                    <Tab tabName='Appointments' tabLink="Appointments" tabIcon="/icons/CalendarIcon.svg"></Tab>
                    <Tab tabName='Profile' tabLink="Profile" tabIcon="/icons/PersonIcon.svg"></Tab>
                    <Tab tabName='Wiki' tabLink="Wiki" tabIcon="/icons/BookIcon.svg"></Tab>
                </div>
            </div>

            {/* Right Side */}
            <div className='w-full flex flex-col'>
                {/* Top Bar */}
                <div className='bg-[#232627] py-8 px-10 flex justify-between flex-row'>
                    
                    <TimeDisplay />

                    {/* Search Bar */}
                    <div className='rounded-md relative w-[500px] h-fit '>
                        <div className='flex flex-row rounded-md'>
                            <input 
                                type='text' 
                                placeholder='Search' 
                                className='bg-white text-black w-full outline-none py-2 px-4 rounded-l-md'
                                value={input}
                                onChange={(e) => handleChange(e.target.value)}
                            ></input>
                            <motion.a 
                                className='bg-[#4CA9EE] flex items-center px-6 py-2 rounded-r-md'
                                href='#'    
                            >
                                <motion.span
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <img src='/Icons/SearchIcon.svg' alt='Search Icon' className='w-8 h-8'></img>
                                </motion.span>
                                
                            </motion.a>
                        </div>
                        
                        {results.length > 0 ? 
                        (
                            <div className='bg-white text-black font-bold absolute w-full rounded-md p-4 mt-2'>
                                {results.map((result) => (
                                    <div key={result}>
                                        <p>{result.name}</p>
                                    </div>
                                ))}
                            </div>
                        ):(
                            <div className='hidden'></div>
                        )}
                        
                    </div>

                    {/* Icon Buttons */}
                    <div className='flex flex-row space-x-4'>
                        <motion.a href='#' className='bg-white w-14 h-14 rounded-full' whileHover={{ scale: 1.1 }}>
                            <img src="/Icons/BellIcon.svg" alt="Bell" className="w-14 h-14 p-4"></img>
                        </motion.a>
                        <motion.a href='#' className='bg-[#4CA9EE] w-14 h-14 rounded-full' whileHover={{ scale: 1.1 }}>
                            <img src="/Icons/MailIcon.svg" alt="Mail" className="w-14 h-14 p-4"></img>
                        </motion.a>
                        <motion.a href='#' whileHover={{ scale: 1.1 }}>
                            <img src="/Icons/Profile.svg" alt="Profile" className="w-14 h-14"></img>
                        </motion.a>
                        
                    </div>
                </div>
                <div className='h-full'>
                    {
                        currentTab === "Home" ? (
                            <HomeTab></HomeTab>
                        ) : currentTab === "Appointments" ? (
                            <AppointmentsTab></AppointmentsTab>
                        ) : currentTab === "Profile" ? (
                            <ProfileTab></ProfileTab>
                        ) : currentTab === "Wiki" ? (
                            <WikiTab></WikiTab>
                        ) : (
                            <div>
                                
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );

};

export default PatientDashboard;
