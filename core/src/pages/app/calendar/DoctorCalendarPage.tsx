import React from "react";
import SchedulerWrapper from "~/components/SchedulerWrapper";
import PatientAppointmentRequestCard from "~/customComponents/PatientAppointmentRequestCard";
import { api } from "~/utils/api";

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

const IndexPage: React.FC = () => {
  const { data, error } = api.appointment.getAllAppointments.useQuery();
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
    date: string;
    time: string;
    duration: number;
  }[] = [];

  // Check if the data is null
  if (data) {
    // Loops through all the appointments in db
    data.forEach((currentAppointment) => {
      if (currentAppointment?.statusM == "Pending") {
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

        // Creates the appointment object
        let appointment = {
          appointmentId: currentAppointment?.id,
          patientId: currentAppointment?.patientId,
          patient: currentAppointment?.patient.name,
          patientPhoto: "/images/avatar.jpg", // TODO: Need to make a call to get the patients photo
          appointmentType: currentAppointment?.subject,
          date:
            newMonth.toString() +
            "/" +
            currentAppointment?.startTime.getDate().toString() +
            "/" +
            currentAppointment?.startTime.getFullYear().toString(),
          time: displayTime,
          duration: minutes,
        };

        appointmentData.push(appointment);
      }
    });
  }

  interface DateLineBreakProps {
    date: string;
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

  // TODO: Need to either sort the appointments first by date, or fix to make appointments of same date render under same break point
  const AppointmentRenderer: React.FC = () => {
    let currentDate = "";
    return (
      <>
        {/* <DateLineBreak date={MONTHS[0]||''} /> */}
        {appointmentData.map((appointment, index) => {
          // Check if the Date has changed
          const isNewDate = appointment.date !== currentDate;
          currentDate = appointment.date;

          // Parse the date to a pretier display date
          let bits = appointment.date.split("/");
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
                date={appointment.date}
              />
            </React.Fragment>
          );
        })}
      </>
    );
  };

  return (
    <div className="flex h-full w-full flex-row 3xl:flex-col">
      <div className="w-full">
        {/* <CalendarWrapper /> */}
        <SchedulerWrapper />
      </div>
      {/* Right sidebar */}
      <div className="flex h-full w-[550px] flex-initial bg-[#141718]">
        <div className="m-4 ml-8 flex flex-col">
          <div className="h4 my-8 text-center text-white">
            Patient requested appointments
          </div>
          <div className="overflow-auto">
            {appointmentData.length == 0 ? (
              <div className="my-8 rounded-lg bg-slate-700 p-4 text-center text-white">
                No appointments requested
              </div>
            ) : (
              <AppointmentRenderer />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
