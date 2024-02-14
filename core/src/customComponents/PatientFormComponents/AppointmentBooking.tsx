import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import Modal from "~/components/Modal";
import React, { useCallback, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { formProps } from "~/pages/app/patient/patient-form";
import { api } from "~/utils/api";

// // Info and Functions for Booking
// const initTimeslots = [
//   {
//     day: new Date(),
//     times: [new Date()],
//   },
// ];

const convertToMST = (timeString: string) => {
  // Parse the time string to a Date object
  const date = new Date(timeString + "Z"); // Adding 'Z' assumes the time is in UTC

  // Convert to MST by subtracting 7 hours
  date.setHours(date.getHours() - 7);

  // Format the date to extract the time part
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes}`;
};

type appt = {
  startTime: string;
  endTime: string;
};

const AppointmentBooking = ({ next }: formProps) => {
  const { setValue, register, getValues, watch } = useFormContext();
  // States
  const [visibleSlot, setVisibleSlot] = useState<boolean>(false);
  const [curDay, setCurDay] = useState<Date>(new Date());
  const [curTime, setCurTime] = useState<string>("");
  const [queryDate, setQueryDate] = useState<boolean>(false);
  const [chosenTimeSlot, setChosenTimeSlot] = useState<appt>();
  const { data } =
    api.appointmentPatient.getPatientsDoctorAvailability.useQuery(
      {
        date: getValues("bookingDay"),
      },
      {
        enabled: queryDate,
      }
    );
  // Custom onChange handler
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Get the value from the event target
    const { value } = event.target;
    console.log("New booking day selected:", value);
    setQueryDate(true);
    setValue("bookingDay", value);
  };

  const onChooseTimeSlot = useCallback(
    (timeSlot: appt) => () => {
      setChosenTimeSlot(timeSlot);
      setVisibleSlot(true);
    },
    []
  );

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
          <div className="flex min-h-[70%] w-[85%] flex-col items-center justify-center rounded-[48px] bg-white p-14 text-lg text-black lg:p-8 md:w-[95%] md:text-sm">
            {/* Calendar component */}
            <p className="items-center font-inikaBold text-2xl">
              Select More Days:
            </p>
            <motion.input
              whileHover={{ scale: 1.02 }}
              className="my-4 flex min-w-[200px] items-center justify-center rounded-full bg-[#2a3943] p-3 text-white focus:outline-none"
              type="date"
              id="calendar"
              {...register("bookingDay", {
                required: true,
                onChange: handleDateChange, // Use the custom onChange handler
              })}
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
                        {/*{formatDateString()}*/}
                      </h1>
                      {/* Line separator */}
                      <div className="max-h-60 w-[100] overflow-auto bg-black" />
                      {/* Times */}
                      {data?.map((day, i) => {
                        return (
                          <motion.button
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className={`flex select-none flex-row justify-between rounded-2xl border-2 ${
                              chosenTimeSlot?.startTime === day.startTime
                                ? "border-[#2a3943] bg-[#4CA9EE] text-white"
                                : "border-black text-black"
                            }`}
                            onClick={onChooseTimeSlot(day)}
                          >
                            <time
                              className={`flex px-5 py-2 text-lg font-semibold`}
                            >
                              Start Time {convertToMST(day.startTime)}
                            </time>
                            <div className="flex px-5 py-2">
                              <BsArrowRight
                                size={30}
                                color={`${
                                  chosenTimeSlot?.startTime === day.startTime
                                    ? "white"
                                    : "black"
                                }`}
                              />
                            </div>
                          </motion.button>
                        );
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
              // onClick={handleBooking}
            >
              <p className="p-3 font-inikaBold text-2xl text-white">Submit</p>
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
        // onClose={() => handleCancel()}
        onClose={() => {}}
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
                  {/*{curTime === "" ? "" : getDayOfWeek()}*/}
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
                // onClick={handleConfirm}
              >
                <p className="p-3 font-inter text-lg">Yes</p>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 flex w-[125px] items-center justify-center rounded-full bg-[#EF4444] text-white"
                // onClick={handleCancel}
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

export default AppointmentBooking;
