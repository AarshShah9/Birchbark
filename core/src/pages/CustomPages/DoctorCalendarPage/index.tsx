import React from "react";
import Layout from "~/components/Layout";
import SchedulerWrapper from "~/components/SchedulerWrapper";
import PatientAppointmentRequestCard from "~/customComponents/PatientAppointmentRequestCard";
import appointmentsList from "~/data/appointments"; 
import { api } from "~/utils/api";



const IndexPage: React.FC = () => {
  // Gets the appointments from the database TODO: Might have to change this to only get pending appointments
  const { data, error } = api.appointment.getAllAppointments.useQuery()
  if(error){
    console.log("TRPC CALL ERROR: " + error)
  }

  // Outlining the appointmentData Types
  let appointmentData:{ 
    appointmentId: number,
    patientId: number,
    patient: string, 
    patientPhoto: string, 
    appointmentType: string, 
    date: string, 
    time:string, 
    duration:string,
  }[] = [];

  // Check if the data is null
  if(data){
    data.map((currentAppointment, index) => {
      if(currentAppointment?.statusM == "Pending"){
        

        // Calculates duration
        let startDate = currentAppointment?.startTime.valueOf()
        let endDate = currentAppointment?.endTime.valueOf()
        const durationInMilliseconds = endDate - startDate; // Find a way to get the duration of the appointment
        const minutes = durationInMilliseconds / 60000;
        let displayTime = currentAppointment?.startTime.getHours().toString() + ":" + currentAppointment?.startTime.getMinutes().toString();
        if (currentAppointment?.startTime.getMinutes() < 10){
          displayTime += "0"
        }

        // Adds AM or PM to the time
        if (currentAppointment?.startTime.getHours() > 12){
          displayTime += " PM"
        } else {
          displayTime += " AM"
        }
        let tempMonth = currentAppointment?.startTime.getMonth() + 1
        // Creates the appointment object
        let appointment = {
          appointmentId:    currentAppointment?.id,
          patientId:        currentAppointment?.patientId,
          patient:          currentAppointment?.patient.name, // TODO: Need to make a call to get the patients name
          patientPhoto:     "/images/avatar.jpg", // TODO: Need to make a call to get the patients photo
          appointmentType:  currentAppointment?.subject,
          date:             tempMonth.toString() + "/" + currentAppointment?.startTime.getDay().toString() + "/" + currentAppointment?.startTime.getFullYear().toString(),
          time:             displayTime,
          duration:         minutes.toString() + " Minutes",
        }

        // Adds the appointment to the appointmentData array to be displayed on frontend
        appointmentData.push(appointment);
      }
    });
  }

  interface DateLineBreakProps {
    date: string;
  }

  const DateLineBreak: React.FC<DateLineBreakProps> = ({ date }) => {
    return (
      <>
        <p className="mt-4 text-white font-bold">{date}</p>
        <hr className="h-[2px] w-full bg-white" />
      </>
    );
  };

  const AppointmentRenderer: React.FC = () => {
    return (
      <>
        <DateLineBreak date={"November xth"} />
        {appointmentData.map((appointment, index) => {
          return(
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
          );
        })}
      </>
    );
  }

  return (
    <Layout>
      <div className="flex h-full w-full flex-row 3xl:flex-col">
        <div className="w-full ">
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
    </Layout>
  );
};

export default IndexPage;
