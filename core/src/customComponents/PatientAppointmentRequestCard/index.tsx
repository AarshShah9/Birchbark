import React from 'react';
import { motion } from 'framer-motion';

interface Props {
    patient: string;
    patientPhoto: string;
    appointmentType: string;
    date: string;
    time: string;
    duration: string;
}

const PatientAppointmentRequestCard: React.FC<Props> = ({patient, patientPhoto, appointmentType, date, time, duration}:Props) => {
    return (
        <div className="bg-[#323337] rounded-xl flex flex-row justify-between text-white my-2">
            <div className='flex flex-row '>
                {/* Buttons Div */}
                <div className="flex flex-col justify-center items-center p-2">
                    <motion.button 
                        onClick={() => {}}
                        whileHover={{ scale: 0.9 }}
                        className='m-1 w-10 h-10 rounded-full hover:bg-[#505253] bg-[#6C7275] flex justify-center items-center'
                    >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" width="4" height="16" rx="2" fill="#323337"/><rect y="10" width="4" height="16" rx="2" transform="rotate(-90 0 10)" fill="#323337"/></svg>
                    </motion.button>
                    <motion.button 
                        onClick={() => {}}
                        whileHover={{ scale: 0.9 }}
                        className='m-1 w-10 h-10 rounded-full hover:bg-[#505253] bg-[#6C7275] flex justify-center items-center'
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_324_661)"><path d="M14.166 2.78332C15.4229 3.50904 16.4685 4.55043 17.1992 5.80441C17.9299 7.05839 18.3205 8.48147 18.3322 9.93277C18.3439 11.3841 17.9764 12.8133 17.266 14.0789C16.5557 15.3445 15.5271 16.4027 14.2821 17.1486C13.037 17.8945 11.6188 18.3023 10.1678 18.3317C8.71671 18.3611 7.28314 18.011 6.00898 17.316C4.73482 16.6211 3.66424 15.6054 2.90324 14.3696C2.14223 13.1337 1.71719 11.7206 1.67018 10.27L1.66602 9.99999L1.67018 9.72999C1.71685 8.29082 2.13564 6.88829 2.88572 5.65915C3.63579 4.43001 4.69156 3.4162 5.95009 2.71656C7.20862 2.01692 8.62697 1.65532 10.0669 1.66702C11.5067 1.67872 12.919 2.06332 14.166 2.78332ZM9.99935 4.99999C9.79524 5.00002 9.59823 5.07496 9.44571 5.21059C9.29318 5.34622 9.19573 5.53312 9.17185 5.73583L9.16602 5.83333V9.99999L9.17352 10.1092C9.19252 10.2537 9.24912 10.3908 9.33768 10.5067L9.41018 10.59L11.9102 13.09L11.9885 13.1583C12.1347 13.2717 12.3144 13.3333 12.4993 13.3333C12.6843 13.3333 12.864 13.2717 13.0102 13.1583L13.0885 13.0892L13.1577 13.0108C13.2711 12.8647 13.3326 12.685 13.3326 12.5C13.3326 12.315 13.2711 12.1353 13.1577 11.9892L13.0885 11.9108L10.8327 9.65416V5.83333L10.8268 5.73583C10.803 5.53312 10.7055 5.34622 10.553 5.21059C10.4005 5.07496 10.2035 5.00002 9.99935 4.99999Z" fill="#333333"/></g><defs><clipPath id="clip0_324_661"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>
                    </motion.button>
                </div>

                {/* Patient Info Div */}
                <div className="flex justify-center items-center">
                    <div className="flex flex-row">
                        <img className='rounded-full w-16' src={patientPhoto} alt={patient} />
                        <div className="m-2">
                            <div className="text-lg font-bold">{patient}</div>
                            <div className="text-md">{appointmentType}</div>
                        </div>
                    </div>
                </div>
            </div>
            

            {/* Date & Time Div */}
            <div className='flex flex-col justify-center mx-4'>
                <div className='text-right text-lg font-bold'>{time}</div>
                {/* <div className='text-right text-md'>{date}</div> */}
                <div className='text-right text-md'>{duration}</div>
            </div>
        </div>
    );
};

export default PatientAppointmentRequestCard;
