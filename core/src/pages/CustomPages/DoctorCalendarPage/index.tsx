import React from "react";
import Layout from "~/components/Layout";
import SchedulerWrapper from "~/components/SchedulerWrapper";
import PatientAppointmentRequestCard from "~/customComponents/PatientAppointmentRequestCard";

const IndexPage: React.FC = () => {
  let appointmentsData = [
    {
      patient: "Adam Johnson",
      patientPhoto: "/images/avatar.jpg",
      appointmentType: "Respiratory",
      date: "2021-08-10",
      time: "12:00 PM",
      duration: "30 Minutes",
    },
    {
      patient: "Amanda Cross",
      patientPhoto: "/images/avatar-1.jpg",
      appointmentType: "Cardiovascular",
      date: "2021-08-10",
      time: "2:00 PM",
      duration: "30 Minutes",
    },
    {
      patient: "Adam",
      patientPhoto: "/images/avatar-2.jpg",
      appointmentType: "Respiratory",
      date: "2021-08-12",
      time: "3:00 PM",
      duration: "30 Minutes",
    },
    {
      patient: "Adam Johnson",
      patientPhoto: "/images/avatar.jpg",
      appointmentType: "Respiratory",
      date: "2021-07-10",
      time: "12:00 PM",
      duration: "30 Minutes",
    },
    {
      patient: "Amanda Cross",
      patientPhoto: "/images/avatar-4.jpg",
      appointmentType: "Cardiovascular",
      date: "2021-08-11",
      time: "2:00 PM",
      duration: "30 Minutes",
    },
    {
      patient: "Adam",
      patientPhoto: "/images/avatar-3.jpg",
      appointmentType: "Respiratory",
      date: "2021-08-10",
      time: "3:00 PM",
      duration: "30 Minutes",
    },
    {
      patient: "Adam Johnson",
      patientPhoto: "/images/avatar.jpg",
      appointmentType: "Respiratory",
      date: "2021-08-10",
      time: "12:00 PM",
      duration: "30 Minutes",
    },
    {
      patient: "Amanda Cross",
      patientPhoto: "/images/avatar-5.jpg",
      appointmentType: "Cardiovascular",
      date: "2021-08-10",
      time: "2:00 PM",
      duration: "30 Minutes",
    },
    {
      patient: "Adam",
      patientPhoto: "/images/avatar-1.jpg",
      appointmentType: "Respiratory",
      date: "2021-08-10",
      time: "3:00 PM",
      duration: "30 Minutes",
    },
    {
      patient: "Adam Johnson",
      patientPhoto: "/images/avatar.jpg",
      appointmentType: "Respiratory",
      date: "2021-08-10",
      time: "12:00 PM",
      duration: "30 Minutes",
    },
    {
      patient: "Amanda Cross",
      patientPhoto: "/images/avatar-4.jpg",
      appointmentType: "Cardiovascular",
      date: "2021-08-10",
      time: "2:00 PM",
      duration: "30 Minutes",
    },
    {
      patient: "TEST",
      patientPhoto: "/images/avatar-3.jpg",
      appointmentType: "Respiratory",
      date: "2021-07-10",
      time: "3:00 PM",
      duration: "30 Minutes",
    },
  ];

  interface DateLineBreakProps {
    date: string;
  }

  const DateLineBreak: React.FC<DateLineBreakProps> = ({ date }) => {
    return (
      <div className="mt-4 flex flex-col font-bold">
        <div>
          <p>{date}</p>
        </div>
        <div className="h-[2px] w-full bg-white"></div>
      </div>
    );
  };
  // interface Appointment {
  //     patient: string;
  //     patientPhoto: string;
  //     appointmentType: string;
  //     date: string;
  //     time: string;
  //     duration: string;
  // }

  // interface AppointmentsListProps {
  //     appointmentsData: Appointment[];
  // }

  // const AppointmentsList: React.FC<AppointmentsListProps> = ({ appointmentsData }) => {
  //     // Group appointments by date
  //     const groupedAppointments: Record<string, Appointment[]> = {};
  //     appointmentsData.forEach(appointment => {
  //         const date = appointment.date;
  //         if (!groupedAppointments[date]) {
  //             groupedAppointments[date] = [];
  //         }
  //         groupedAppointments?[date].push(appointment);
  // });

  // Sort the appointments by date
  appointmentsData.sort((a, b) => {
    if (a.date > b.date) {
      return 1;
    }
    if (a.date < b.date) {
      return -1;
    }
    return 0;
  });

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
              <DateLineBreak date={"October 27th"} />
              {appointmentsData.length == 0 ? (
                <div className="my-8 rounded-lg bg-slate-700 p-4 text-center text-white">
                  No appointments requested
                </div>
              ) : (
                // TODO: Add a way to display the appointments so that each
                appointmentsData.map((appointment, index) => {
                  return (
                    <PatientAppointmentRequestCard
                      key={index}
                      patient={appointment.patient}
                      patientPhoto={appointment.patientPhoto}
                      appointmentType={appointment.appointmentType}
                      time={appointment.time}
                      duration={appointment.duration}
                      date={appointment.date}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
