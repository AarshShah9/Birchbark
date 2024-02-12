import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// TODO: Heres the list
// 1. Add Icons to table headers
// 2. Add a button to schedule an appointment
// 3. Make the table dynamic to work on ipad view

const AppointmentTab = () => {
  const [UpcommingAppointmentsSelected, setUpcommingAppointmentsSelected] =
    useState(true);

  // Upcomming Appointments
  type Appointment = {
    date: string;
    time: string;
    doctor: string;
    clinic: string;
  };

  const dummyUpcommingAppointmentData: Appointment[] = [
    {
      date: "10/10/2021",
      time: "10:00 AM",
      doctor: "Dr. John Doe",
      clinic: "123 Main St.",
    },
    {
      date: "10/10/2021",
      time: "10:00 AM",
      doctor: "Dr. John Doe",
      clinic: "123 Main St.",
    },
    {
      date: "10/10/2021",
      time: "10:00 AM",
      doctor: "Dr. John Doe",
      clinic: "123 Main St.",
    },
  ];

  // Past Appointments
  type PastAppointment = {
    date: string;
    time: string;
    doctor: string;
    clinic: string;
  };

  const dummyPastAppointmentData: PastAppointment[] = [
    {
      date: "10/4/2020",
      time: "11:00 AM",
      doctor: "Dr. John Doe",
      clinic: "Eastview Clinic.",
    },
    {
      date: "10/17/2020",
      time: "4:00 AM",
      doctor: "Dr. Adam Smith",
      clinic: "Eastview Clinic.",
    },
    {
      date: "10/22/2019",
      time: "9:00 AM",
      doctor: "Dr. Brown",
      clinic: "Spruce heights.",
    },
  ];

  return (
    <div className="flex h-full w-full bg-[#232627] ">
      {/* appointments background */}
      <div className="m-8 w-full rounded-md bg-[#141718] p-8">
        <div className="flex space-x-2">
          <motion.a
            href="#"
            className={`rounded-md px-12 py-4 text-center text-2xl font-bold text-white xl:w-1/2 xl:px-6 xl:py-1 xl:text-[13px]`}
            style={{
              backgroundColor: UpcommingAppointmentsSelected
                ? "#4CA9EE"
                : "#505151",
            }}
            onClick={() => setUpcommingAppointmentsSelected(true)}
            whileHover={{ scale: 1.025 }}
            animate={{
              backgroundColor: UpcommingAppointmentsSelected
                ? "#4CA9EE"
                : "#505151",
            }}
            transition={{ duration: 0.5 }}
          >
            Upcomming Appointments
          </motion.a>
          <motion.a
            href="#"
            className={`rounded-md px-12 py-4 text-center text-2xl font-bold text-white xl:w-1/2 xl:px-6 xl:py-1 xl:text-[13px]`}
            style={{
              backgroundColor: UpcommingAppointmentsSelected
                ? "#505151"
                : "#4CA9EE",
            }}
            onClick={() => setUpcommingAppointmentsSelected(false)}
            whileHover={{ scale: 1.025 }}
            animate={{
              backgroundColor: UpcommingAppointmentsSelected
                ? "#505151"
                : "#4CA9EE",
            }}
            transition={{ duration: 0.5 }}
          >
            Past Appointments
          </motion.a>
        </div>

        {/* Render either the upcomming appointments or Past appointments table data */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {UpcommingAppointmentsSelected ? (
            <div className="mt-8 flex flex-col xl:mt-4">
              {dummyUpcommingAppointmentData.length > 0 ? (
                <div className="flex flex-col">
                  <div className="mb-4 flex flex-row justify-between p-4">
                    <p className="text-2xl font-bold text-white xl:text-xl">
                      Date
                    </p>
                    <p className="text-2xl font-bold text-white xl:text-xl">
                      Time
                    </p>
                    <p className="text-2xl font-bold text-white xl:text-xl">
                      Doctor
                    </p>
                    <p className="text-2xl font-bold text-white xl:text-xl">
                      Clinic
                    </p>
                  </div>
                  <div className="flex flex-col ">
                    {dummyUpcommingAppointmentData.map((appointment) => (
                      <div
                        key={appointment.date}
                        className="mb-4 flex flex-row justify-between rounded-md bg-[#2D2D2D] p-4"
                      >
                        <p className="text-xl font-bold text-white xl:text-sm xl:font-medium">
                          {appointment.date}
                        </p>
                        <p className="text-xl font-bold text-white xl:text-sm xl:font-medium">
                          {appointment.time}
                        </p>
                        <p className="text-xl font-bold text-white xl:text-sm xl:font-medium">
                          {appointment.doctor}
                        </p>
                        <p className="text-xl font-bold text-white xl:text-sm xl:font-medium">
                          {appointment.clinic}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="mt-8 flex flex-col items-center ">
                  <p className="text-2xl font-bold text-white">
                    No Appointments
                  </p>
                  <p className="text-white">
                    You have no appointments scheduled
                  </p>
                  <motion.a
                    href="#"
                    className="mt-12 rounded-md bg-[#4CA9EE] px-12 py-4 text-2xl font-bold text-white"
                    whileHover={{ scale: 1.025 }}
                  >
                    Schedule an Appointment
                  </motion.a>
                </div>
              )}
            </div>
          ) : (
            <div className="mt-8 flex flex-col xl:mt-4">
              {dummyPastAppointmentData.length > 0 ? (
                <div>
                  <div className="mb-4 flex flex-row justify-between p-4">
                    <p className="text-2xl font-bold text-white xl:text-xl">
                      Date
                    </p>
                    <p className="text-2xl font-bold text-white xl:text-xl">
                      Time
                    </p>
                    <p className="text-2xl font-bold text-white xl:text-xl">
                      Doctor
                    </p>
                    <p className="text-2xl font-bold text-white xl:text-xl">
                      Clinic
                    </p>
                  </div>
                  <div className="flex flex-col">
                    {dummyPastAppointmentData.map((appointment) => (
                      <div
                        key={appointment.date}
                        className="mb-4 flex flex-row justify-between rounded-md bg-[#2D2D2D] p-4"
                      >
                        <p className="text-xl font-bold text-white xl:text-sm xl:font-medium">
                          {appointment.date}
                        </p>
                        <p className="text-xl font-bold text-white xl:text-sm xl:font-medium">
                          {appointment.time}
                        </p>
                        <p className="text-xl font-bold text-white xl:text-sm xl:font-medium">
                          {appointment.doctor}
                        </p>
                        <p className="text-xl font-bold text-white xl:text-sm xl:font-medium">
                          {appointment.clinic}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="mt-8 flex flex-col items-center ">
                  <p className="text-2xl font-bold text-white">
                    No Appointments
                  </p>
                  <p className="text-white">You have no past appointments</p>
                  <motion.a
                    href="#"
                    className="mt-12 rounded-md bg-[#4CA9EE] px-12 py-4 text-2xl font-bold text-white"
                    whileHover={{ scale: 1.025 }}
                  >
                    Schedule an Appointment
                  </motion.a>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AppointmentTab;
