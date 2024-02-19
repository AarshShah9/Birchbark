import React, { SetStateAction } from "react";
import { motion } from "framer-motion";
import { appointmentData } from "~/pages/app/calendar/DoctorTableView";

const AppointmentsTable = ({
  appointmentData,
  setCreateAppointmentModal,
}: {
  appointmentData: appointmentData;
  setCreateAppointmentModal: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const [currentTab, setCurrentTab] = React.useState("All");

  return (
    <div className="my-8 ml-8 flex w-full flex-col rounded-md bg-[#141718] p-8 3xl:my-6 3xl:ml-6 3xl:p-6">
      <h2 className="mb-2 text-2xl font-bold">Appointments</h2>
      <div className="flex justify-between">
        <div className="flex flex-row space-x-4">
          <motion.button
            className={`${
              currentTab == "All" ? "bg-[#4CA9EE]" : "bg-[#232627]"
            } text-md rounded-sm px-6 py-2 font-bold text-white 3xl:px-3 3xl:text-sm`}
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              setCurrentTab("All");
            }}
          >
            All
          </motion.button>
          <motion.button
            className={`${
              currentTab == "Upcoming" ? "bg-[#4CA9EE]" : "bg-[#232627]"
            } text-md rounded-sm px-6 py-2 font-bold text-white 3xl:px-3 3xl:text-sm`}
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              setCurrentTab("Upcoming");
            }}
          >
            Upcoming
          </motion.button>
          <motion.button
            className={`${
              currentTab == "Completed" ? "bg-[#4CA9EE]" : "bg-[#232627]"
            } text-md rounded-sm px-6 py-2 font-bold text-white 3xl:px-3 3xl:text-sm`}
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              setCurrentTab("Completed");
            }}
          >
            Completed
          </motion.button>
          <motion.button
            className={`${
              currentTab == "Pending" ? "bg-[#4CA9EE]" : "bg-[#232627]"
            } text-md rounded-sm px-6 py-2 font-bold text-white 3xl:px-3 3xl:text-sm`}
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              setCurrentTab("Pending");
            }}
          >
            Pending
          </motion.button>
        </div>
        <div>
          <motion.button
            className={`text-md rounded-md bg-[#4CA9EE] px-6 py-2 font-bold text-white 3xl:px-3 3xl:text-sm`}
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              setCreateAppointmentModal(true);
            }}
          >
            New Appointment
          </motion.button>
        </div>
      </div>

      {/* Main table content */}
      <div className="overflow-auto">
        <table className="mt-8 w-full table-auto border-separate border-spacing-y-1">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-white">Patient</th>
              <th className="px-4 py-2 text-left text-white">Type</th>
              <th className="px-4 py-2 text-left text-white">Date</th>
              <th className="px-4 py-2 text-left text-white">Time</th>
              <th className="px-4 py-2 text-left text-white">Duration</th>
              <th className="px-4 py-2 text-left text-white">Status</th>
            </tr>
          </thead>
          {currentTab == "All" ? (
            <tbody>
              {appointmentData.map((appointment, index) => {
                return (
                  <tr key={index} className="bg-[#323337]">
                    <td className="px-4 py-2">{appointment.patient}</td>
                    <td className="px-4 py-2">{appointment.appointmentType}</td>
                    <td className="px-4 py-2">{appointment.datePrint}</td>
                    <td className="px-4 py-2">{appointment.time}</td>
                    <td className="px-4 py-2">{appointment.duration}</td>
                    <td className="px-4 py-2">{appointment.appointmentType}</td>
                  </tr>
                );
              })}
            </tbody>
          ) : currentTab == "Upcoming" ? (
            <tbody>
              {appointmentData
                .filter(
                  (appointment) => appointment.appointmentType === "Confirmed"
                )
                .map((appointment, index) => {
                  return (
                    <tr key={index} className="bg-[#323337]">
                      <td className="px-4 py-2">{appointment.patient}</td>
                      <td className="px-4 py-2">
                        {appointment.appointmentType}
                      </td>
                      <td className="px-4 py-2">{appointment.datePrint}</td>
                      <td className="px-4 py-2">{appointment.time}</td>
                      <td className="px-4 py-2">{appointment.duration}</td>
                      <td className="px-4 py-2">
                        {appointment.appointmentType}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          ) : currentTab == "Completed" ? (
            <tbody>
              {appointmentData
                .filter(
                  (appointment) => appointment.appointmentType === "Completed"
                )
                .map((appointment, index) => {
                  return (
                    <tr key={index} className="bg-[#323337]">
                      <td className="px-4 py-2">{appointment.patient}</td>
                      <td className="px-4 py-2">
                        {appointment.appointmentType}
                      </td>
                      <td className="px-4 py-2">{appointment.datePrint}</td>
                      <td className="px-4 py-2">{appointment.time}</td>
                      <td className="px-4 py-2">{appointment.duration}</td>
                      <td className="px-4 py-2">
                        {appointment.appointmentType}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          ) : currentTab == "Pending" ? (
            <tbody>
              {appointmentData
                .filter(
                  (appointment) => appointment.appointmentType === "Pending"
                )
                .map((appointment, index) => {
                  return (
                    <tr key={index} className="bg-[#323337]">
                      <td className="px-4 py-2">{appointment.patient}</td>
                      <td className="px-4 py-2">
                        {appointment.appointmentType}
                      </td>
                      <td className="px-4 py-2">{appointment.datePrint}</td>
                      <td className="px-4 py-2">{appointment.time}</td>
                      <td className="px-4 py-2">{appointment.duration}</td>
                      <td className="px-4 py-2">
                        {appointment.appointmentType}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          ) : (
            <tbody></tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default AppointmentsTable;
