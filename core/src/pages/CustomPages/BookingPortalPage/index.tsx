import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Modal from "~/components/Modal";

const Booking: React.FC = () => {
  // Initialize timeslots
  const initTimeslots = [
    {
      day: new Date(),
      times: [""],
    },
    {
      day: new Date(),
      times: [""],
    },
    {
      day: new Date(),
      times: [""],
    },
  ];

  // States
  const [visibleSlot, setVisibleSlot] = useState<boolean>(false);
  const [curDay, setCurDay] = useState<Date>(new Date());
  const [curTime, setCurTime] = useState<string>("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [firstDate, setFirstDate] = useState<Date>(new Date());
  const [secondDate, setSecondDate] = useState<Date>(new Date());
  const [thirdDate, setThirdDate] = useState<Date>(new Date());
  const [timeslots, setTimeslots] = useState<typeof initTimeslots>([]);

  // Function to handle clicked time
  function handleClickedTime(day: Date, time: string) {
    setCurDay(day);
    setCurTime(time);
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

  // Function to handle left arrow
  const handleLeft = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const date = new Date(startDate);
    const today = new Date();
    if (
      date.getDate() < today.getDate() &&
      date.getMonth() <= today.getMonth() &&
      date.getFullYear() <= today.getFullYear()
    ) {
      return;
    }
    setStartDate(new Date(date.setDate(date.getDate() - 1)));
    return;
  };

  // Function to handle right arrow
  const handleRight = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const date = new Date(startDate);
    setStartDate(new Date(date.setDate(date.getDate() + 1)));
    return;
  };

  // Function to handle changing start date off the calendar
  function handleStartDate(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.id === "calendar" && e.target.value) {
      setStartDate(new Date(e.target.value));
      return;
    } else if (e.target.id === "calendar" && !e.target.value) {
      setStartDate(new Date());
      return;
    }
  }

  // Function to handle submit
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (curTime === "") {
      alert("Please select a time");
    } else {
      alert(curDay + " at " + curTime);
    }
  };

  // Use effect to update timeslots
  React.useEffect(() => {
    const date = new Date(startDate);
    setFirstDate(new Date(firstDate.setDate(date.getDate() + 1)));
    setSecondDate(new Date(secondDate.setDate(date.getDate() + 2)));
    setThirdDate(new Date(thirdDate.setDate(date.getDate() + 3)));
    setTimeslots([
      {
        day: new Date(firstDate),
        times: ["11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM"],
      },
      {
        day: new Date(secondDate),
        times: ["11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM"],
      },
      {
        day: new Date(thirdDate),
        times: ["11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM"],
      },
    ]);
  }, [startDate]);

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
            <div className="w-full">
              <div className="m-6 flex justify-center">
                <h2 className="text-xl font-semibold">
                  Please pick the best time to meet with your doctor
                </h2>
              </div>
              {/* Scheduling Component */}
              <div className="flex w-full flex-row items-center justify-center gap-2 lg:flex-col lg:gap-0">
                {/* Left / Bottom Buttons */}
                <div className="my-0 flex flex-row gap-4 lg:my-2">
                  <div className="">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      id="left"
                      className="rounded-full border-2 border-[#2a3943] bg-[#4CA9EE] p-1 text-white"
                      onClick={(e) => handleLeft(e)}
                    >
                      <BsArrowLeft size={20} color="white" />
                    </motion.button>
                  </div>
                  <div className="">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      id="right"
                      className="hidden rounded-full border-2 border-[#2a3943] bg-[#4CA9EE] p-1 text-white lg:block"
                      onClick={(e) => handleRight(e)}
                    >
                      <BsArrowRight size={20} color="white" />
                    </motion.button>
                  </div>
                </div>

                {/* Timeslots by day */}
                <div className="my-6 flex w-full flex-row gap-4 lg:flex-col">
                  {timeslots.map((date) => (
                    <div
                      key={date.day.toDateString()}
                      className="flex w-full flex-row justify-center"
                    >
                      <div className="flex w-full flex-col gap-2">
                        <h1 className="text-xl font-bold">
                          {date.day.toDateString()}
                        </h1>

                        {/* Line separator */}
                        <div className="h-[2px] w-[100%] bg-black" />

                        {/* Times */}
                        {date.times.map((time) => (
                          <motion.button
                            key={time}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className={`flex select-none flex-row justify-between rounded-2xl border-2 ${
                              date.day.getDate() === curDay.getDate() &&
                              date.day.getMonth() === curDay.getMonth() &&
                              date.day.getFullYear() === curDay.getFullYear() &&
                              time === curTime
                                ? "border-[#2a3943] bg-[#4CA9EE]"
                                : "border-black"
                            }`}
                            onClick={() => handleClickedTime(date.day, time)}
                          >
                            <p
                              className={`flex px-5 py-2 text-lg font-semibold ${
                                date.day.getDate() === curDay.getDate() &&
                                date.day.getMonth() === curDay.getMonth() &&
                                date.day.getFullYear() ===
                                  curDay.getFullYear() &&
                                time === curTime
                                  ? "text-white"
                                  : "text-black"
                              }`}
                            >
                              {time}
                            </p>
                            <div className="flex px-5 py-2">
                              <BsArrowRight
                                size={30}
                                color={`${
                                  date.day.getDate() === curDay.getDate() &&
                                  date.day.getMonth() === curDay.getMonth() &&
                                  date.day.getFullYear() ===
                                    curDay.getFullYear() &&
                                  time === curTime
                                    ? "white"
                                    : "black"
                                }`}
                              />
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Right/Bottom Buttons */}
                <div className="my-0 flex flex-row gap-4 lg:my-2">
                  <div className="">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      id="left"
                      className="hidden rounded-full border-2 border-[#2a3943] bg-[#4CA9EE] p-1 text-white lg:block"
                      onClick={(e) => handleLeft(e)}
                    >
                      <BsArrowLeft size={20} color="white" />
                    </motion.button>
                  </div>
                  <div className="">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      id="right"
                      className="rounded-full border-2 border-[#2a3943] bg-[#4CA9EE] p-1 text-white"
                      onClick={(e) => handleRight(e)}
                    >
                      <BsArrowRight size={20} color="white" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>

            {/* Calendar component */}
            <p className="items-center font-inikaBold text-2xl">
              Select More Days:
            </p>
            <motion.input
              whileHover={{ scale: 1.02 }}
              className="my-4 flex min-w-[200px] items-center justify-center rounded-full bg-[#2a3943] p-3 text-white focus:outline-none"
              type="date"
              id="calendar"
              value={startDate.toISOString().split("T")[0]}
              onChange={(e) => handleStartDate(e)}
              min={new Date().toISOString().split("T")[0]}
            />

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
