import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import Modal from "~/components/Modal";
import { add } from "lodash";

const Questionnaire: React.FC = () => {
  const [visibleSlot, setVisibleSlot] = useState<boolean>(false);
  const [day, setDay] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const timeslotProps = [
    {
      day: "December 13th 2023",
      times: ["11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM"],
    },
    {
      day: "December 14th 2023",
      times: ["11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM"],
    },
    {
      day: "December 15th 2023",
      times: ["11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM"],
    },
  ];

  function Day(date: { day: string; times: string[] }) {
    return (
      <div className="flex w-full flex-col gap-2">
        <h1 className="text-xl font-bold">{date.day}</h1>
        {/* Line separator */}
        <div className="h-[2px] w-[100%] bg-black" />
        {/* Times */}
        {date.times.map((time) => (
          <motion.button
            key={time}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="flex flex-row justify-between rounded-2xl border-2 border-black"
            onClick={() => handleClickedTime(date.day, time)}
          >
            <p className="flex px-5 py-2 text-lg font-semibold">{time}</p>
            <div className="flex px-5 py-2">
              <BsArrowRight size={30} />
            </div>
          </motion.button>
        ))}
      </div>
    );
  }

  function handleClickedTime(day: string, time: string) {
    setDay(day);
    setTime(time);
    setVisibleSlot(true);
  }

  function handleClose() {
    setVisibleSlot(false);
    setDay("");
    setTime("");
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  function getDayOfWeek() {
    const dayOfWeek = new Date(day.replace(/th/g, "") + ", 00:00:00").getDay();
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
        <div className="flex min-h-[90vh] flex-col items-center justify-center p-16 font-inter lg:p-8">
          <h1 className="mb-8 text-center text-6xl font-bold md:text-2xl">
            Appointment Time
          </h1>
          <div className="flex w-[85%] flex-col items-center justify-center rounded-[48px] bg-white p-14 text-lg text-black lg:p-8 md:w-[95%] md:text-sm">
            <div className="w-full">
              <div className="m-6 flex justify-center">
                <h2 className="text-xl font-semibold">
                  Please pick the best time to meet with your doctor
                </h2>
              </div>
              <div className="my-6 flex flex-row gap-4 lg:flex-col">
                {timeslotProps.map((date) => (
                  <div
                    key={date.day}
                    className="flex w-full flex-row justify-center"
                  >
                    <Day day={date.day} times={date.times} />
                  </div>
                ))}
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 flex w-[200px] items-center justify-center rounded-full bg-[#4CA9EE] text-white"
              onClick={handleSubmit}
            >
              <p className="p-3 font-inikaBold text-2xl">Next</p>
            </motion.button>
          </div>
        </div>
      </div>
      <Modal
        className="md:!p-0"
        classWrap="md:min-h-screen-ios dark:shadow-[inset_0_0_0_0.0625rem_#232627,0_2rem_4rem_-1rem_rgba(0,0,0,0.33)] dark:md:shadow-none"
        classButtonClose="hidden md:flex md:absolute md:top-6 md:left-6 dark:fill-n-1"
        classOverlay="md:bg-n-1"
        visible={visibleSlot}
        onClose={() => handleClose()}
      >
        <div className="flex items-center justify-center p-12 font-inter text-white">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-2xl font-semibold">
              Are you sure you want to confirm this time?
            </h1>
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="h-full rounded-full bg-[#222222] shadow-lg">
                <img
                  className="p-2"
                  alt="Calendar Check"
                  src="/images/CalendarCheck.svg"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">{getDayOfWeek()}</h1>
                <p className="text-sm font-extralight">{day}</p>
                <p className="text-sm font-extralight">{time}</p>
              </div>
            </div>
            <div className="flex flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 flex w-[125px] items-center justify-center rounded-full bg-[#4CA9EE] text-white"
                onClick={handleClose}
              >
                <p className="p-3 font-inter text-lg">Continue</p>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 flex w-[125px] items-center justify-center rounded-full bg-[#EF4444] text-white"
                onClick={handleClose}
              >
                <p className="p-3 font-inter text-lg">Cancel</p>
              </motion.button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Questionnaire;
