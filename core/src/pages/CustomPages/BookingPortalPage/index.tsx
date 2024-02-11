import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Modal from "~/components/Modal";

const Booking: React.FC = () => {
  // Initialize timeslots
  const initTimeslots = [
    {
      day: new Date(),
      times: [new Date()],
    },
  ];

  // States
  const [visibleSlot, setVisibleSlot] = useState<boolean>(false);
  const [curDay, setCurDay] = useState<Date>(new Date());
  const [curTime, setCurTime] = useState<string>("");
  const [timeslots, setTimeslots] = useState<typeof initTimeslots>([]);

  // Function to handle clicked time
  function handleClickedTime(day: Date, time: Date) {
    setCurDay(day);
    const formattedTime = time.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setCurTime(formattedTime);
    setVisibleSlot(true);
  }

  // Function to handle clicking yes on modal
  function handleConfirm() {
    setVisibleSlot(false);
  }

  // Function to handle clicking no or closing on modal
  function handleCancel() {
    setVisibleSlot(false);
    setCurTime("");
    setCurDay(new Date());
  }

  // Function to get day of week
  function getDayOfWeek() {
    const dayOfWeek = curDay.getDay();
    return isNaN(dayOfWeek)
      ? null
      : [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ][dayOfWeek];
  }

  function formatDateString(): string {
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const dayOfWeek = weekdays[curDay.getDay()];
    const month = months[curDay.getMonth()];
    const dayOfMonth = curDay.getDate();
    const year = curDay.getFullYear();

    return `${dayOfWeek} ${month}, ${dayOfMonth}, ${year}`;
  }

  // Function to handle changing start date off the calendar
  function handleStartDate(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.id === "calendar" && e.target.value) {
      const selectedDate = new Date(e.target.value);
      const adjustedDate = new Date(
        Date.UTC(
          selectedDate.getFullYear(),
          selectedDate.getMonth(),
          selectedDate.getDate()
        )
      );
      setCurDay(adjustedDate);
    } else if (e.target.id === "calendar" && !e.target.value) {
      setCurDay(new Date());
    }
  }

  // Function to handle submit
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (curTime === "") {
      alert("Please select a time");
    } else {
      const ampm = curTime.split(" ")[1];
      const timeSplit = curTime.split(":");
      const hours = parseInt(timeSplit[0] ?? "0");
      const minutes = parseInt(timeSplit[1] ?? "0");

      if (ampm === "PM" && hours !== 12) {
        // Convert PM hours to 24-hour format
        curDay.setHours(hours + 12);
      } else if (ampm === "AM" && hours === 12) {
        // Handle 12 AM
        curDay.setHours(0);
      } else {
        // For AM hours and PM hours when it's already 12 PM
        curDay.setHours(hours);
      }

      // Set minutes and seconds
      curDay.setMinutes(minutes);
      curDay.setSeconds(0);

      alert(curDay);
    }
  };

  function generateDateTimes(startTime: Date, endTime: Date): Date[] {
    const dateTimes: Date[] = [];

    // Set the start time to 11:00 AM
    startTime.setHours(11, 0, 0, 0);

    // Iterate until the end time is reached
    while (startTime < endTime) {
      const newDateTime = new Date(startTime.getTime());
      dateTimes.push(newDateTime);

      // Increment the time by 30 minutes
      startTime.setMinutes(startTime.getMinutes() + 30);
    }
    console.log(dateTimes);

    return dateTimes;
  }

  // Use effect to update timeslots
  React.useEffect(() => {
    const date = new Date(curDay);
    // Get the start availablity time
    const startTime = new Date();
    const endTime = new Date();
    endTime.setHours(14, 0, 0, 0); // Set the end time to 2 PM
    const times = generateDateTimes(startTime, endTime);
    console.log(curDay);
    console.log(times);
    setTimeslots([
      {
        day: date,
        times: times,
      },
    ]);
    console.log(timeslots);
  }, [curDay]);

  return (
    <>
      <div className="bg-[#232627]">
        <div className="ml-12 flex h-[10vh] flex-initial p-6">
          <img
            className="h-full"
            alt="Birchbark Health Logo"
            src="/images/BirchbarkLogo3.svg"
          />
        </div>
        <div className="flex min-h-[90vh] flex-col items-center justify-center p-16 font-inter text-black lg:p-8">
          <h1 className="mb-8 text-center text-6xl font-bold text-white md:text-2xl">
            Appointment Time
          </h1>
          {/* Booking Container */}
          <div className="flex w-[85%] flex-col items-center justify-center rounded-[48px] bg-white p-14 text-lg text-black lg:p-8 md:w-[95%] md:text-sm">
            {/* Calendar component */}
            <p className="items-center font-inikaBold text-2xl">
              Select More Days:
            </p>
            <motion.input
              whileHover={{ scale: 1.02 }}
              className="my-4 flex min-w-[200px] items-center justify-center rounded-full bg-[#2a3943] p-3 text-white focus:outline-none"
              type="date"
              id="calendar"
              value={curDay.toISOString().split("T")[0]}
              onChange={(e) => handleStartDate(e)}
              min={new Date().toISOString().split("T")[0]}
            />

            <div className="w-full">
              <div className="m-4 flex justify-center">
                <h2 className="text-xl font-semibold">
                  Please pick the best time to meet with your doctor
                </h2>
              </div>
              {/* Scheduling Component */}
              <div className="flex w-full flex-row items-center justify-center gap-2 lg:flex-col lg:gap-0">
                {/* Timeslots by day */}
                <div className="my-6 flex w-1/2 flex-row items-center justify-center gap-4 lg:w-[95%] lg:flex-col">
                  <div className="flex w-full flex-row items-center justify-center">
                    <div className="flex w-full flex-col gap-2">
                      <h1 className="text-xl font-bold">
                        {formatDateString()}
                      </h1>
                      {/* Line separator */}
                      <div className="h-[2px] w-[100%] bg-black" />
                      {/* Times */}
                      {timeslots.map((day) => {
                        if (day.day.toDateString() === curDay.toDateString()) {
                          return day.times.map((time) => (
                            <motion.button
                              key={time.toString()}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.98 }}
                              className={`flex select-none flex-row justify-between rounded-2xl border-2 ${
                                day.day.getDate() === curDay.getDate() &&
                                day.day.getMonth() === curDay.getMonth() &&
                                day.day.getFullYear() ===
                                  curDay.getFullYear() &&
                                time.toLocaleTimeString([], {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                }) === curTime
                                  ? "border-[#2a3943] bg-[#4CA9EE] text-white"
                                  : "border-black text-black"
                              }`}
                              onClick={() => handleClickedTime(day.day, time)}
                            >
                              <time
                                className={`flex px-5 py-2 text-lg font-semibold`}
                              >
                                {time.toLocaleTimeString([], {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </time>
                              <div className="flex px-5 py-2">
                                <BsArrowRight
                                  size={30}
                                  color={`${
                                    day.day.getDate() === curDay.getDate() &&
                                    day.day.getMonth() === curDay.getMonth() &&
                                    day.day.getFullYear() ===
                                      curDay.getFullYear() &&
                                    time.toLocaleTimeString([], {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                    }) === curTime
                                      ? "white"
                                      : "black"
                                  }`}
                                />
                              </div>
                            </motion.button>
                          ));
                        }
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Line separation */}
            <div className="h-[2px] w-[50%] bg-black md:w-[100%]" />

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 flex min-w-[200px] select-none items-center justify-center rounded-full bg-[#4CA9EE] text-white"
              onClick={handleSubmit}
            >
              <p className="p-3 font-inikaBold text-2xl text-white">Next</p>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <Modal
        className="md:!p-0"
        classWrap="md:min-h-screen-ios dark:shadow-[inset_0_0_0_0.0625rem_#232627,0_2rem_4rem_-1rem_rgba(0,0,0,0.33)] dark:md:shadow-none"
        classButtonClose="hidden md:flex md:absolute md:top-6 md:left-6 dark:fill-n-1"
        classOverlay="md:bg-n-1"
        visible={visibleSlot}
        onClose={() => handleCancel()}
      >
        <div className="flex items-center justify-center p-12 font-inter text-white">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-2xl font-semibold">
              Are you sure you want to confirm this time?
            </h1>
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="h-full rounded-full bg-[#222222] shadow-lg">
                <img
                  className="select-none p-2"
                  alt="Calendar Check"
                  src="/images/CalendarCheck.svg"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">
                  {curTime === "" ? "" : getDayOfWeek()}
                </h1>
                <p className="text-sm font-extralight">
                  {curTime === ""
                    ? ""
                    : curDay.toDateString().split(" ").slice(1).join(" ")}
                </p>
                <p className="text-sm font-extralight">
                  {curTime === "" ? "" : curTime}
                </p>
              </div>
            </div>
            <div className="flex select-none flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 flex w-[125px] items-center justify-center rounded-full bg-[#4CA9EE] text-white"
                onClick={handleConfirm}
              >
                <p className="p-3 font-inter text-lg">Yes</p>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 flex w-[125px] items-center justify-center rounded-full bg-[#EF4444] text-white"
                onClick={handleCancel}
              >
                <p className="p-3 font-inter text-lg">No</p>
              </motion.button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Booking;
