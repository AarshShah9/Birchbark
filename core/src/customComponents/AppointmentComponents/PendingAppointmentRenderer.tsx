// Component for the Pending appointment renderer
import React from "react";
import DateLineBreak from "~/customComponents/AppointmentComponents/DataLineBreak";
import PatientAppointmentRequestCard from "~/customComponents/PatientAppointmentRequestCard";
import { appointmentData } from "~/pages/app/calendar/DoctorTableView";

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

const PendingAppointmentRenderer = ({
  appointmentData,
  refetch,
}: {
  appointmentData: appointmentData;
  refetch: any;
}) => {
  let currentDate = "";

  return (
    <>
      {appointmentData
        .filter((appointment) => appointment.appointmentType === "Pending")
        .map((appointment, index) => {
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
                refetch={refetch}
              />
            </React.Fragment>
          );
        })}
    </>
  );
};

export default PendingAppointmentRenderer;
