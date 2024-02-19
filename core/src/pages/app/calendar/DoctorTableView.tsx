import React from "react";
import SchedulerWrapper from "src/customComponents/SchedulerWrapper";
import PatientAppointmentRequestCard from "~/customComponents/PatientAppointmentRequestCard";
import { api } from "~/utils/api";
import { motion } from "framer-motion";
import Modal from "../../components/Modal";

const MONTHS: Record<number, string> = {
    0: "January",
    1: "Febuary",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
};

// model Appointment {
//     id          Int      @id @default(autoincrement())
//     subject     String /// @encrypted
//     startTime   DateTime
//     endTime     DateTime
//     description String? /// @encrypted
//     isAllDay    Boolean  @default(false)
//     isReadOnly  Boolean  @default(false)
//     statusM     Status   @default(Pending)
//     doctorId    Int
//     patientId   Int
//     doctor      Doctor   @relation(fields: [doctorId], references: [id])
//     patient     Patient  @relation(fields: [patientId], references: [id])
  
//     @@index([doctorId])
//     @@index([patientId])
//   }

enum Status {
    Confirmed = 'Confirmed',
    Pending = 'Pending',
    Cancelled = 'Cancelled',
    Stale = 'Stale',
    Completed = 'Completed',
}

interface DateLineBreakProps {
    date: string;
}

const CreateAppointmentModal: React.FC = () => {
    return (
        <div>
            <h1>Modal</h1>
        </div>
    )
}

const IndexPage: React.FC = () => {
    const { data, error } = api.appointment.getAllAppointments.useQuery();
    
    // Check if data is null
    if (error) {
        console.log("TRPC CALL ERROR: " + JSON.stringify(error));
    }

    // Outlining the appointmentData Types
    let appointmentData: {
        appointmentId: number;
        patientId: number;
        patient: string;
        patientPhoto: string;
        appointmentType: string;
        datePrint: string;
        startDate: Date;
        endDate: Date;
        time: string;
        duration: number;
    }[] = [];

    // Check if the data is null
    if (data) {
        // Loops through all the appointments in db
        data.forEach((currentAppointment) => {
            // Calculates duration
            let startDate = currentAppointment?.startTime.valueOf();
            let endDate = currentAppointment?.endTime.valueOf();
            const durationInMilliseconds = endDate - startDate; // Find a way to get the duration of the appointment
            const minutes = durationInMilliseconds / 60000;
            let displayTime =
                currentAppointment?.startTime.getUTCHours().toString() +
                ":" +
                currentAppointment?.startTime.getUTCMinutes().toString();

            // Adds a 0 to the time if the minutes are less than 10
            if (currentAppointment?.startTime.getMinutes() < 10) {
                displayTime += "0";
            }

            // Adds AM or PM to the time
            if (currentAppointment?.startTime.getUTCHours() > 12) {
                let bits = displayTime.split(":");
                let firstNum = (parseInt(bits[0] || "0") - 12).toString();
                displayTime = firstNum + ":" + bits[1];
                displayTime += " PM";
            } else {
                displayTime += " AM";
            }

            // Adds 1 to month because it starts at 0
            let newMonth = currentAppointment?.startTime.getMonth() + 1;
            let status = "";

            switch (currentAppointment?.statusM) {
                case "Confirmed":
                    status = "Confirmed";
                    break;
                case "Pending":
                    status = "Pending";
                    break;
                case "Cancelled":
                    status = "Cancelled";
                    break;
                case "Stale":
                    status = "Stale";
                    break;
                case "Completed":
                    status = "Completed";
                    break;
                default:
                    status = "Pending";
                    break;
            }

            // Creates the appointment object
            let appointment = {
                appointmentId: currentAppointment?.id,
                patientId: currentAppointment?.patientId,
                patient: currentAppointment?.patient.name,
                patientPhoto: "/images/avatar.jpg", // TODO: Need to make a call to get the patients photo
                appointmentType: currentAppointment?.statusM,
                datePrint:
                    newMonth.toString() +
                    "/" +
                    currentAppointment?.startTime.getDate().toString() +
                    "/" +
                    currentAppointment?.startTime.getFullYear().toString(),
                startDate: currentAppointment?.startTime,
                endDate: currentAppointment?.endTime,
                time: displayTime,
                duration: minutes,
            };

            appointmentData.push(appointment);
            
        });
    }
    
    // Component for the line break between dates
    const DateLineBreak: React.FC<DateLineBreakProps> = ({ date }) => {
        return (
        <>
            <p className="mt-4 font-bold text-white">{date}</p>
            <hr className="h-[2px] w-full bg-white" />
        </>
        );
    };
    
    // Component for the Pending appointment renderer
    const PendingAppointmentRenderer: React.FC = () => {
        let currentDate = "";

        return (
            <>
                {/* <DateLineBreak date={MONTHS[0]||''} /> */}
                {appointmentData.map((appointment, index) => {
                // Check if the Date has changed
                const isNewDate = appointment.datePrint !== currentDate;
                currentDate = appointment.datePrint;
        
                // Parse the date to a pretier display date
                let bits = appointment.datePrint.split("/");
                let curMonth = bits[0] || "";
                let curDay = bits[1];
                let curYear = bits[2];
                let displayString =
                    MONTHS[parseInt(curMonth) - 1] + " " + curDay + ", " + curYear;
        
                return (
                    <React.Fragment key={index}>
                    {/* Insert line break if the date has changed */}
                    {isNewDate && <DateLineBreak date={displayString} />}
        
                    {/* Render the appointment */}
                    <PatientAppointmentRequestCard
                        key={index}
                        appointmentId={appointment.appointmentId}
                        patientId={appointment.patientId}
                        patient={appointment.patient}
                        patientPhoto={appointment.patientPhoto}
                        appointmentType={appointment.appointmentType}
                        time={appointment.time}
                        duration={appointment.duration}
                        date={appointment.datePrint}
                    />
                    </React.Fragment>
                );
                })}
            </>
        );
    };

    const AppointmentsTable: React.FC = () => {
        const [currentTab, setCurrentTab] = React.useState("All");

        return (
            <div className="w-full flex flex-col bg-[#141718] rounded-md p-8 my-8 ml-8 ">
                <h2 className="text-2xl font-bold mb-2">
                    Appointments
                </h2>
                <div className="flex justify-between">
                    <div className="flex flex-row space-x-4">
                        <motion.button 
                            className={`${currentTab == "All" ? "bg-[#4CA9EE]" : "bg-[#232627]"} text-white font-bold rounded-sm py-2 px-6`}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => {setCurrentTab("All")}}
                        >
                            All
                        </motion.button>
                        <motion.button 
                            className={`${currentTab == "Upcoming" ? "bg-[#4CA9EE]" : "bg-[#232627]"} text-white font-bold rounded-sm py-2 px-6`}
                            whileHover={{ scale: 1.05}}
                            onClick={() => {setCurrentTab("Upcoming")}}
                        >
                            Upcoming
                        </motion.button>
                        <motion.button 
                            className={`${currentTab == "Completed" ? "bg-[#4CA9EE]" : "bg-[#232627]"} text-white font-bold rounded-sm py-2 px-6`}
                            whileHover={{ scale: 1.05}}
                            onClick={() => {setCurrentTab("Completed")}}
                        >
                            Completed
                        </motion.button>
                        <motion.button 
                            className={`${currentTab == "Pending" ? "bg-[#4CA9EE]" : "bg-[#232627]"} text-white font-bold rounded-sm py-2 px-6`}
                            whileHover={{ scale: 1.05}}
                            onClick={() => {setCurrentTab("Pending")}}
                        >
                            Pending
                        </motion.button>
                    </div>
                    <div>
                        <motion.button 
                            className={`bg-[#4CA9EE] text-white font-bold rounded-md py-3 px-6`}
                            whileHover={{ scale: 1.05}}
                            onClick={() => {console.log("Prompt Form Modal")}}
                        >
                            Create Appointment
                        </motion.button>
                    </div>
                </div>

                {/* Main table content */}
                <div className="overflow-auto">
                    <table className="w-full mt-8 table-auto border-separate border-spacing-y-1">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 text-left text-white">Patient</th>
                                <th className="py-2 px-4 text-left text-white">Type</th>
                                <th className="py-2 px-4 text-left text-white">Date</th>
                                <th className="py-2 px-4 text-left text-white">Time</th>
                                <th className="py-2 px-4 text-left text-white">Duration</th>
                                <th className="py-2 px-4 text-left text-white">Status</th>
                            </tr>
                        </thead>
                        { currentTab == "All" ?
                            <tbody>
                                {
                                appointmentData
                                    .map((appointment, index) => {
                                        return (
                                        <tr key={index} className="bg-[#323337]">
                                            <td className="py-2 px-4">{appointment.patient}</td>
                                            <td className="py-2 px-4">{appointment.appointmentType}</td>
                                            <td className="py-2 px-4">{appointment.datePrint}</td>
                                            <td className="py-2 px-4">{appointment.time}</td>
                                            <td className="py-2 px-4">{appointment.duration}</td>
                                            <td className="py-2 px-4">{appointment.appointmentType}</td>
                                        </tr>
                                        );
                                    })}
                            </tbody>
                        : currentTab == "Upcoming" ?
                            <tbody>
                                {appointmentData.filter(appointment => appointment.appointmentType === 'Confirmed').map((appointment, index) => {
                                    return (
                                        <tr key={index} className="bg-[#323337]">
                                            <td className="py-2 px-4">{appointment.patient}</td>
                                            <td className="py-2 px-4">{appointment.appointmentType}</td>
                                            <td className="py-2 px-4">{appointment.datePrint}</td>
                                            <td className="py-2 px-4">{appointment.time}</td>
                                            <td className="py-2 px-4">{appointment.duration}</td>
                                            <td className="py-2 px-4">{appointment.appointmentType}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        : currentTab == "Completed" ?
                            <tbody>
                                {appointmentData.filter(appointment => appointment.appointmentType === "Completed").map((appointment, index) => {
                                    return (
                                        <tr key={index} className="bg-[#323337]">
                                            <td className="py-2 px-4">{appointment.patient}</td>
                                            <td className="py-2 px-4">{appointment.appointmentType}</td>
                                            <td className="py-2 px-4">{appointment.datePrint}</td>
                                            <td className="py-2 px-4">{appointment.time}</td>
                                            <td className="py-2 px-4">{appointment.duration}</td>
                                            <td className="py-2 px-4">{appointment.appointmentType}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        : currentTab == "Pending" ?
                            <tbody>
                                {appointmentData.filter(appointment => appointment.appointmentType === "Pending").map((appointment, index) => {
                                    return (
                                        <tr key={index} className="bg-[#323337]">
                                            <td className="py-2 px-4">{appointment.patient}</td>
                                            <td className="py-2 px-4">{appointment.appointmentType}</td>
                                            <td className="py-2 px-4">{appointment.datePrint}</td>
                                            <td className="py-2 px-4">{appointment.time}</td>
                                            <td className="py-2 px-4">{appointment.duration}</td>
                                            <td className="py-2 px-4">{appointment.appointmentType}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        : <tbody></tbody>
                        }
                        
                    </table>
                </div>
            </div>
        )
    }

    return (
        <div className="flex h-full w-full flex-row rounded-md bg-[#232627]">
            
            {/* Main Panel */}
            <AppointmentsTable />

            {/* Side bar panel */}
            <div className="w-[550px] bg-[#141718] rounded-md p-8 m-8">
                <h2 className="text-2xl font-bold">
                    Pending Appointments
                </h2>
                <div className="overflow-auto">
                    {appointmentData.length == 0 ? (
                    <div className="my-8 rounded-lg bg-slate-700 p-4 text-center text-white">
                        No appointments requested
                    </div>
                    ) : (
                    <PendingAppointmentRenderer />
                    )}
                </div>
            </div>
        </div>
    );
};

export default IndexPage;