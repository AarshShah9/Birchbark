import React, { useEffect, useState } from "react";
import { api } from "~/utils/api";
import AppointmentsTable from "~/customComponents/AppointmentComponents/AppointmentsTable";
import PendingAppointmentRenderer from "~/customComponents/AppointmentComponents/PendingAppointmentRenderer";
import Loading from "~/customComponents/Loading";
import CreateAppointmentModal from "~/customComponents/AppointmentComponents/CreateAppointmentModal";

enum Status {
  Confirmed = "Confirmed",
  Pending = "Pending",
  Cancelled = "Cancelled",
  Stale = "Stale",
  Completed = "Completed",
}

// Outlining the appointmentData Types
export type appointmentData = {
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
}[];

const IndexPage: React.FC = () => {
  let { data, isError, isLoading, refetch } =
    api.appointment.getAllAppointments.useQuery();
  const [createAppointmentModal, setCreateAppointmentModal] = useState(false);
  const [appointmentData, setAppointmentData] = useState<appointmentData>([]);
  const [trigger, setTrigger] = useState(false);

  const refetchData = () => {
    console.log("Refetching data");
    refetch();
    setTrigger(!trigger);
  };

  useEffect(() => {
    // Check if the data is null
    if (data) {
      let appointmentData2: appointmentData = [];
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

        appointmentData2.push(appointment);
      });
      setAppointmentData(appointmentData2);
    }
  }, [data, trigger]);

  if (isLoading || isError) {
    return <Loading />;
  }

  return (
    <div className="flex h-full w-full flex-row rounded-md bg-[#232627]">
      <CreateAppointmentModal
        setCreateAppointmentModal={setCreateAppointmentModal}
        createAppointmentModal={createAppointmentModal}
      />

      {/* Main Panel */}
      <AppointmentsTable
        appointmentData={appointmentData}
        setCreateAppointmentModal={setCreateAppointmentModal}
      />

      {/* Side bar panel */}
      <div className="m-8 w-[550px] flex-initial rounded-md bg-[#141718] p-8 3xl:m-6 3xl:p-6">
        <h2 className="text-2xl font-bold">Pending Appointments</h2>
        <div className="max-h-[600px] overflow-auto">
          {appointmentData.length == 0 ? (
            <div className="my-8 rounded-lg bg-slate-700 p-4 text-center text-white">
              No appointments requested
            </div>
          ) : (
            <PendingAppointmentRenderer
              appointmentData={appointmentData}
              refetch={refetchData}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
