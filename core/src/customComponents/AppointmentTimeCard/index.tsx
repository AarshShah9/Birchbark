import React from 'react';
import { motion } from 'framer-motion';

interface Props {
    time: string;
}

const AppointmentTimeCard: React.FC<Props> = ({time}:Props) => {
    return(
        <motion.div 
            className='h6 bg-[#FEFEFE] border border-[#E8ECEF] text-black w-96 h-12 m-2 rounded-xl flex justify-between items-center'
            whileHover={{ 
                scale: 1.02,
                boxShadow: "0px 0px 16px 4px rgba(0, 0, 0, 0.04)",
            }}
            whileTap={{ scale: 0.98 }}
        >
            <span className='ml-3'>{time}</span>
            <img src='/icons/right-arrow.svg' alt='right arrow' className='mr-3' />
        </motion.div>
    )
}

export default AppointmentTimeCard;
