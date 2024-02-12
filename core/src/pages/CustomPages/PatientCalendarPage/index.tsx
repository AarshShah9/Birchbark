import App from "next/app";
import React from "react";
import Layout from "~/components/Layout";
import AppointmentTimeCard from "~/customComponents/AppointmentTimeCard";
import { api } from "~/utils/api";

const IndexPage: React.FC = () => {
  const { data, error } = api.appointment.getDoctorAvailability.useQuery();
  if (error) {
    console.log("TRPC CALL ERROR: " + error);
  }

  let dates: string[] = [];
  let times: string[] = [];
  const months: Record<number, string> = {
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

  if (data) {
    // Adding the dates to the array for the line break UI component
    data.forEach((item) => {
      dates.push(
        months[item.date.getMonth()] +
          "," +
          item.date.getDate().toString() +
          " " +
          item.date.getFullYear().toString()
      );
    });

    // Add the times in 30 minute appointment slots
    data.forEach((item) => {
      let startHour = item.startTime.getHours();
      let endHour = item.endTime.getHours();
      for (let i = startHour; i < endHour; i++) {
        times.push(i.toString() + ":00");
        times.push(i.toString() + ":30");
      }
    });
  }

  interface DateLineBreakProps {
    date: string;
  }

  const DateLineBreak: React.FC<DateLineBreakProps> = ({ date }) => {
    return (
      <div className="mt-4 flex w-[60%] flex-col px-32 font-bold">
        <div>
          <p className="text-black">{date}</p>
        </div>
        <div className="h-[2px] w-full bg-black"></div>
      </div>
    );
  };

  return (
    <Layout>
      <div className="h-full w-full bg-[#ffffff]">
        <div className="flex h-56 w-full flex-col items-center justify-center">
          <h2 className="h2 mx-32 text-center text-black">
            Schedule an Appointment with your doctor
          </h2>
          <p className="h6 mt-3 font-medium text-[#6C7275]">
            Chat with an experience doctor - and get the care you need
          </p>
        </div>
        <div className="flex w-full items-center justify-center">
          <div className="flex w-[60%] flex-col items-center justify-center ">
            {dates.map((date, index) => (
              <DateLineBreak date={date} key={index} />
            ))}
            {times.map((time, index) => (
              <AppointmentTimeCard time={time} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
