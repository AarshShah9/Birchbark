import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { api } from "~/utils/api";

// TODO: Heres the list
// 1. Add Icons to table headers
// 2. Add a button to schedule an appointment
// 3. Make the table dynamic to work on ipad view

// Upcoming Appointments
type Appointment = {
  date: string;
  time: string;
  doctor: string;
  clinic: string;
};

const AppointmentTab = () => {
  const [UpcomingAppointmentsSelected, setUpcomingAppointmentsSelected] =
    useState(true);

  const { data } = api.appointmentPatient.getAllUpcomingAppointments.useQuery();
  const oldPatient = api.appointmentPatient.getAllOldAppointments.useQuery();

  return (
    <div className="flex h-full w-full bg-[#232627] ">
      {/* appointments background */}
      <div className="m-8 w-full rounded-md bg-[#141718] p-8">
        <div className="flex space-x-2">
          <motion.a
            href="#"
            className={`rounded-md px-12 py-4 text-center text-2xl font-bold text-white xl:w-1/2 xl:px-6 xl:py-1 xl:text-[13px]`}
            style={{
              backgroundColor: UpcomingAppointmentsSelected
                ? "#4CA9EE"
                : "#505151",
            }}
            onClick={() => setUpcomingAppointmentsSelected(true)}
            whileHover={{ scale: 1.025 }}
            animate={{
              backgroundColor: UpcomingAppointmentsSelected
                ? "#4CA9EE"
                : "#505151",
            }}
            transition={{ duration: 0.5 }}
          >
            Upcoming Appointments
          </motion.a>
          <motion.a
            href="#"
            className={`rounded-md px-12 py-4 text-center text-2xl font-bold text-white xl:w-1/2 xl:px-6 xl:py-1 xl:text-[13px]`}
            style={{
              backgroundColor: UpcomingAppointmentsSelected
                ? "#505151"
                : "#4CA9EE",
            }}
            onClick={() => setUpcomingAppointmentsSelected(false)}
            whileHover={{ scale: 1.025 }}
            animate={{
              backgroundColor: UpcomingAppointmentsSelected
                ? "#505151"
                : "#4CA9EE",
            }}
            transition={{ duration: 0.5 }}
          >
            Past Appointments
          </motion.a>
        </div>

        {/* Render either the upcoming appointments or Past appointments table data */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {UpcomingAppointmentsSelected && (
            <div className="mt-8 flex flex-col xl:mt-4">
              {data?.appointments?.length ?? 0 > 0 ? (
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
                    {data?.appointments.map((appointment, i) => (
                      <div
                        key={i}
                        className="mb-4 flex flex-row justify-between rounded-md bg-[#2D2D2D] p-4"
                      >
                        <p className="text-xl font-bold text-white xl:text-sm xl:font-medium">
                          {appointment.startTime.toLocaleDateString("en-US")}
                        </p>
                        <p className="text-xl font-bold text-white xl:text-sm xl:font-medium">
                          {appointment.startTime.toLocaleTimeString("en-US")}
                        </p>
                        <p className="text-xl font-bold text-white xl:text-sm xl:font-medium">
                          {data?.doctor.name}
                        </p>
                        <p className="text-xl font-bold text-white xl:text-sm xl:font-medium">
                          {data?.Organization?.name}
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
          )}
          {!UpcomingAppointmentsSelected && (
            <div className="mt-8 flex flex-col xl:mt-4">
              {oldPatient?.data?.appointments?.length ?? 0 > 0 ? (
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
                    {oldPatient?.data?.appointments.map((appointment, i) => (
                      <div
                        key={i}
                        className="mb-4 flex flex-row justify-between rounded-md bg-[#2D2D2D] p-4"
                      >
                        <p className="text-xl font-bold text-white xl:text-sm xl:font-medium">
                          {appointment.startTime.toLocaleDateString("en-US")}
                        </p>
                        <p className="text-xl font-bold text-white xl:text-sm xl:font-medium">
                          {appointment.startTime.toLocaleTimeString("en-US")}
                        </p>
                        <p className="text-xl font-bold text-white xl:text-sm xl:font-medium">
                          {oldPatient?.data?.doctor.name}
                        </p>
                        <p className="text-xl font-bold text-white xl:text-sm xl:font-medium">
                          {oldPatient?.data?.Organization?.name}
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
