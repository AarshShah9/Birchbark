import React from "react";
import { motion } from "framer-motion";

interface ChatProps {
  doctorName: string;
  link: string;
}

const Chat: React.FC<ChatProps> = ({ doctorName, link }) => {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      className="m-1 mx-4 flex flex-row justify-between rounded-lg bg-[#383838] p-6"
    >
      <h1 className="text-3xl font-bold text-white">{doctorName}</h1>
      <img
        src="/Icons/ChatBubblesIcon.svg"
        alt="Chat Icon"
        className="h-8 w-8"
      ></img>
    </motion.a>
  );
};

interface AppointmentProps {
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
}

const Appointment: React.FC<AppointmentProps> = ({
  doctorName,
  specialty,
  date,
  time,
}) => {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      className="m-1 flex aspect-square h-52 w-52 flex-col rounded-lg bg-[#383838] p-6"
    >
      <h1 className="text-3xl font-bold text-white">{doctorName}</h1>
      <h3 className="mt-1 text-xl font-semibold leading-tight text-white">
        {specialty}
      </h3>
      <h3 className="mt-2 text-white">{date}</h3>
      <h3 className="text-white">{time}</h3>
    </motion.a>
  );
};

interface AppointmentTypeProps {
  type: string;
  icon: string;
}

const AppointmentType: React.FC<AppointmentTypeProps> = ({ type, icon }) => {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      href="#"
      className="m-1 flex aspect-square h-36 w-36 flex-col items-center rounded-lg bg-[#383838] p-6"
    >
      <img src={icon} alt={type} className="h-14 w-14"></img>
      <h1 className="mt-1 text-center text-xl font-bold leading-tight text-white">
        {type}
      </h1>
    </motion.a>
  );
};

const HomeTab = () => {
  const patientName = "John Doe";
  const activeChats = [];

  return (
    <div className="h-full w-full bg-[#232627] p-12 xl:h-max">
      <h1 className="mb-8 text-5xl font-bold text-white">
        Welcome, <span>{patientName.split(" ")[0]}</span>
      </h1>

      {/* This is the */}
      <div className="flex w-full flex-row space-x-4 xl:flex-col xl:space-x-0 xl:space-y-4">
        <div className="flex w-2/5 flex-col rounded-lg bg-[#141718] xl:w-full">
          <div className="">
            <h1 className="mx-8 mt-4 text-3xl font-bold text-white">
              Active Chats
            </h1>
          </div>
          <div className="my-4 flex h-[100%] flex-col space-y-4 overflow-y-scroll">
            <Chat doctorName="Dr. Murphy" link="#"></Chat>
            <Chat doctorName="Dr. Larson" link="#"></Chat>
            <Chat doctorName="Dr. Smith" link="#"></Chat>
          </div>
        </div>

        <div className="flex w-3/5 flex-col space-y-4 xl:w-full">
          <div className="rounded-lg bg-[#141718]">
            <div className="">
              <h1 className="mx-8 mt-4 text-3xl font-bold text-white">
                Upcoming Appointments
              </h1>
            </div>
            <div className="m-4 flex h-64 flex-row space-x-4 overflow-x-scroll">
              <Appointment
                doctorName="Dr. Smith"
                specialty="Primary Care Provider"
                date="12/12/2021"
                time="12:00 PM"
              ></Appointment>
              <Appointment
                doctorName="Dr. Murphy"
                specialty="Cardiology"
                date="12/12/2021"
                time="12:00 PM"
              ></Appointment>
              <Appointment
                doctorName="Dr. Larson"
                specialty="Respiratory"
                date="12/12/2021"
                time="12:00 PM"
              ></Appointment>
            </div>
          </div>
          <div className="rounded-lg bg-[#141718]">
            <div className="">
              <h1 className="mx-8 mt-4 text-3xl font-bold text-white">
                Book an Appointment
              </h1>
            </div>
            <div className="m-4 flex h-48 flex-row space-x-4 overflow-x-scroll">
              <AppointmentType
                type="Doctor"
                icon="/Icons/DoctorIcon.svg"
              ></AppointmentType>
              {/* <AppointmentType type='Cardiology' icon='/Icons/HeartIcon.svg'></AppointmentType> */}
              {/* <AppointmentType type='Respiratory' icon='/Icons/LungsIcon.svg'></AppointmentType> */}
              {/* <AppointmentType type='Eye Doctor' icon='/Icons/EyeIcon.svg'></AppointmentType> */}
              {/* <AppointmentType type='Dermatologist' icon='/Icons/SkinIcon.svg'></AppointmentType> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTab;
