import React from "react";
import Layout from "~/components/Layout";
import SchedulerWrapper from "~/components/SchedulerWrapper";
import PatientAppointmentRequestCard from "~/customComponents/PatientAppointmentRequestCard";
import appointmentsList from "~/data/appointments"; 
import { api } from "~/utils/api";



const IndexPage: React.FC = () => {
  const { data, error } = api.appointment.getAllAppointments.useQuery()
  if(error){
    console.log("TRPC CALL ERROR: " + error)
  }

  // Outlining the appointmentData Types
  let appointmentData:{ 
    patientId: number,
    patient: any, 
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

        // Creates the appointment object
        let appointment = {
          patientId:        currentAppointment?.patientId,
          patient:          currentAppointment?.patientId, // TODO: Need to make a call to get the patients name
          patientPhoto:     "/images/avatar.jpg", // TODO: Need to make a call to get the patients photo
          appointmentType:  currentAppointment?.subject,
          date:             currentAppointment?.startTime.getDay().toString() + "-" + currentAppointment?.startTime.getMonth().toString() + "-" + currentAppointment?.startTime.getFullYear().toString(),
          time:             displayTime,
          duration:         minutes.toString() + " Minutes",
        }

        // Adds the appointment to the appointmentData array to be displayed on frontend
        appointmentData.push(appointment);
      }
    });
  }

  // let appointmentsData1 = [
  //   {
  //     patient: "Adam Johnson",
  //     patientPhoto: "/images/avatar.jpg",
  //     appointmentType: "Respiratory",
  //     date: "2021-08-10",
  //     time: "12:00 PM",
  //     duration: "30 Minutes",
  //   }
  // ];

  interface DateLineBreakProps {
    date: string;
  }

  const DateLineBreak: React.FC<DateLineBreakProps> = ({ date }) => {
    return (
      <div className="mt-4 flex flex-col font-bold">
        <div>
          <p className="text-white">{date}</p>
        </div>
        <div className="h-[2px] w-full bg-white"></div>
      </div>
    );
  };

  const AppointmentRenderer: React.FC = () => {
    return (
      <>
        <DateLineBreak date={"November 12th"} />
        {appointmentData.map((appointment, index) => {
          return(
            <PatientAppointmentRequestCard
              key={index}
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
