import React from 'react';
import { motion } from 'framer-motion';
import Modal from '../../components/Modal';
import { Dialog } from '@headlessui/react'
import { useState } from 'react';

interface Props {
    time: string;
}

// appointmentPatient from root.ts

const AppointmentTimeCard: React.FC<Props> = ({time}:Props) => {
    const [confirmModalState, setConfirmModalState] = useState(false);

    const ConfirmModal = () => {
        return (
            <Modal
                visible={confirmModalState}
                onClose={() => setConfirmModalState(false)}
                className="w-full h-full flex justify-center items-center"
            >
                {/* <Dialog.Overlay /> */}
                <Dialog.Title className={"px-20 pt-8 font-bold"}>Are you sure you want to confirm this appointment time?</Dialog.Title>
                <Dialog.Description className={"px-20 pt-2 pb-8"}>
                    <div className='flex flex-row justify-between'>
                        <div className="flex justify-center items-center">
                            <div className="flex flex-row">
                                <div className="my-2 mx-2">
                                    <div className="text-lg font-bold">{time}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog.Description>
                <div className='flex justify-center items-center'>
                    <motion.button 
                        whileHover={{ scale: 0.9 }}
                        className='m-1 p-4 w-28 h-12 rounded-full bg-[#4CA9EE] flex justify-center items-center'
                        onClick={() => setConfirmModalState(false)}
                    >Continue</motion.button>
                    <motion.button 
                        whileHover={{ scale: 0.9 }}
                        className='m-1 p-4 w-28 h-12 rounded-full bg-red-500 flex justify-center items-center'
                        onClick={() => setConfirmModalState(false)}
                    >Cancel</motion.button>
                </div>
            </Modal>
        );
    };

    return(
        <motion.div 
            className='h6 bg-[#FEFEFE] border border-[#E8ECEF] text-black w-96 h-12 m-2 rounded-xl flex justify-between items-center'
            whileHover={{ 
                scale: 1.02,
                boxShadow: "0px 0px 16px 4px rgba(0, 0, 0, 0.04)",
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {setConfirmModalState(true)}}
        >
            <ConfirmModal/>
            <span className='ml-3'>{time}</span>
            <img src='/icons/right-arrow.svg' alt='right arrow' className='mr-3' />
        </motion.div>
    )
}

export default AppointmentTimeCard;
