"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SubmitHandler, useForm } from "react-hook-form";

// Imports of form components: Will be used later for prop passing
// Booking Resources
import Modal from "~/components/Modal";
import { BsArrowRight } from "react-icons/bs";

// ITL Texts
import { clinicLandingResources1 } from "~/resources/clinic-landing1";
import { clinicLandingResources } from "~/resources/clinic-landing";
import { questionnaireResources } from "~/resources/questionnaire";
import { useRouter } from "next/router";

type patientInputs = {
  confirmAppointment: boolean;
  firstName: string;
  lastName: string;
  birthday: Date;
  status: number;
  reasonOfVisit: string;
  medicalIssue: string;
  bookingDay: Date;
  needCounsellor: boolean;
  needDoctor: boolean;
  needPsychologist: boolean;
  clickedWellness: boolean;
  clickedChatWithDoctor: boolean;
};

const steps = [
  {
    id: "Step 1",
    name: "Clinic Landing Page 1",
    fields: ["How can we help you?"],
  },
  {
    id: "Step 2",
    name: "Clinic Landing Page 2",
    fields: ["Who would you like to see?"],
  },
  {
    id: "Step 3",
    name: "Questionnaire",
    fields: [
      "Confirm Booking",
      "Patient First Name",
      "Patient Last Name",
      "Birthday (yyyy-mm-dd)",
      "Status Number",
      "Why are you coming in today?",
      "Please tell us about your medical issue.",
    ],
  },
  { id: "Step 4", name: "Booking", fields: "Booking Time" },
];

export default function Form() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [language, setLanguage] = useState("English");
  const delta = currentStep - previousStep;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    setValue,
    formState: { errors, isValid },
  } = useForm<patientInputs>({});

  const router = useRouter();

  const processForm: SubmitHandler<patientInputs> = (data) => {
    console.log(data);
    reset();
    router.push("/app/patient/dashboard");
  };

  type FieldName = keyof patientInputs;

  const next = async () => {
    const fields = steps[currentStep]?.fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length) {
      if (currentStep === steps.length - 1) {
        await handleSubmit(processForm)();
      }
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  var today = new Date();
  var dd = today.getDate().toString();
  var mm = (today.getMonth() + 1).toString(); //January is 0!
  var yyyy = today.getFullYear().toString();

  if (Number(dd) < 10) {
    dd = "0" + dd;
  }

  if (Number(mm) < 10) {
    mm = "0" + mm;
  }

  var strToday: string = yyyy + "-" + mm + "-" + dd;

  const handleLandingPage1Click = (clicked: string): void => {
    if (clicked === "wellness") {
      setValue("clickedWellness", true);
      setValue("clickedChatWithDoctor", false);
      next();
      return;
    }
    if (clicked === "chatWithDoctor") {
      setValue("clickedChatWithDoctor", true);
      setValue("clickedWellness", false);
      next();
      return;
    }
  };

  const handleLandingPage2Click = (clicked: string): void => {
    if (clicked === "psychologist") {
      setValue("needPsychologist", true);
      setValue("needDoctor", false);
      setValue("needCounsellor", false);
      next();
      return;
    }
    if (clicked === "doctor") {
      setValue("needDoctor", true);
      setValue("needPsychologist", false);
      setValue("needCounsellor", false);
      next();
      return;
    }
    if (clicked === "counsellor") {
      setValue("needCounsellor", true);
      setValue("needPsychologist", false);
      setValue("needDoctor", false);
      next();
      return;
    }
  };

  // Info and Functions for Booking
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
      setCurDay(selectedDate);
    } else if (e.target.id === "calendar" && !e.target.value) {
      setCurDay(new Date());
    }
  }

  // Function to handle submit
  const handleBooking = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
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

      next();
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
    endTime.setHours(14, 0, 0, 0); // Example set time
    const times = generateDateTimes(startTime, endTime);
    setTimeslots([
      {
        day: date,
        times: times,
      },
    ]);
    console.log(timeslots);
  }, [curDay]);

  return (
    <div className="relative min-h-screen w-full bg-[#232627]">
      {/* Form */}
      <form className="" onSubmit={handleSubmit(processForm)}>
        {/* Clinic Landing Page 1 */}
        {currentStep === 0 && (
          <div className="min-h-screen w-full bg-[#232627]">
            <div className=" z-2 w-full">
              <div className="z-10 ml-12 flex h-[10vh] flex-initial p-6">
                <img
                  className="h-full"
                  alt="Birchbark Health Logo"
                  src="/images/BirchbarkLogo3.svg"
                />
              </div>
              <div className="z-10 flex min-h-[90vh] flex-col items-center justify-center p-16 font-inter lg:p-8">
                <div
                  className=" rounded-lg p-16 "
                  style={{ backgroundColor: "rgba(150, 150, 150, 0.75)" }}
                >
                  <h1 className="mb-8 text-center text-7xl font-bold md:text-4xl">
                    {language === "Blackfoot"
                      ? clinicLandingResources1.title.Blackfoot
                      : clinicLandingResources1.title.English}
                    <button
                      className="text-sm font-light"
                      onClick={() => {
                        if (language === "Blackfoot") setLanguage("English");
                        else setLanguage("Blackfoot");
                      }}
                    >
                      <img
                        src="/icons/ArrowSwitchIcon.svg"
                        alt="switch button"
                        className="h-6 w-6"
                      />
                    </button>
                  </h1>
                  <h2 className="mb-8 text-center font-inter text-4xl md:text-2xl">
                    {clinicLandingResources1.greeting.English}
                  </h2>
                  <div className=" flex flex-wrap items-center justify-center gap-6">
                    <motion.button
                      id="clickedWellness"
                      onClick={() => handleLandingPage1Click("wellness")}
                      whileHover={{ scale: 1.05 }}
                      className="flex h-64 w-64 flex-col items-center justify-center rounded-xl bg-[#303334] shadow-lg"
                    >
                      <h3 className="font-inikaRegular text-2xl">
                        {clinicLandingResources1.content.English}
                      </h3>
                      <div className="h-38 w-38 rounded-full bg-[#4CA9EE] shadow-md">
                        <div>
                          <img
                            className="p-6"
                            alt="Psychologist Icon"
                            src="/images/BookIcon.svg"
                          />
                        </div>
                      </div>
                    </motion.button>
                    <motion.button
                      id="clickedChatWithDoctor"
                      onClick={() => handleLandingPage1Click("chatWithDoctor")}
                      whileHover={{ scale: 1.05 }}
                      className="flex h-64 w-64 flex-col items-center justify-center rounded-xl bg-[#303334] shadow-lg"
                    >
                      <h3 className="font-inikaRegular text-2xl">
                        {clinicLandingResources1.appointment.English}
                      </h3>
                      <div className="h-38 w-38 rounded-full bg-[#4CA9EE] shadow-md">
                        <div>
                          <img
                            className="p-2"
                            alt="Doctor Icon"
                            src="/images/Tailfeather.png"
                          />
                        </div>
                      </div>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Clinic Landing Page 2 */}
        {currentStep === 1 && (
          <div className="bg-[#232627]">
            <div className="ml-12 flex h-[10vh] flex-initial p-6">
              <img
                className="h-full"
                alt="Birchbark Health Logo"
                src="/images/BirchbarkLogo3.svg"
              />
            </div>
            <div className="flex min-h-[90vh] flex-col items-center justify-center p-16 font-inter lg:p-8">
              <h1 className="mb-8 text-center text-7xl font-bold md:text-4xl">
                {clinicLandingResources.title.English}
              </h1>
              <h2 className="mb-8 text-center font-inter text-4xl md:text-2xl">
                {clinicLandingResources.subtitle.English}
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <motion.button
                  onClick={() => handleLandingPage2Click("psychologist")}
                  whileHover={{ scale: 1.05 }}
                  className="flex h-64 w-64 flex-col items-center justify-center rounded-xl bg-[#303334] shadow-lg"
                >
                  <h3 className="font-inikaRegular text-2xl">
                    {clinicLandingResources.psychologist.English}
                  </h3>
                  <div className="h-38 w-38 rounded-full bg-[#4CA9EE] shadow-md">
                    <img
                      className="p-6"
                      alt="Psychologist Icon"
                      src="/images/brain.svg"
                    />
                  </div>
                </motion.button>
                <motion.button
                  onClick={() => handleLandingPage2Click("doctor")}
                  whileHover={{ scale: 1.05 }}
                  className="flex h-64 w-64 flex-col items-center justify-center rounded-xl bg-[#303334] shadow-lg"
                >
                  <h3 className="font-inikaRegular text-2xl">
                    {clinicLandingResources.doctor.English}
                  </h3>
                  <div className="h-38 w-38 rounded-full bg-[#4CA9EE] shadow-md">
                    <img
                      className="p-6"
                      alt="Doctor Icon"
                      src="/images/doctor.svg"
                    />
                  </div>
                </motion.button>
                <motion.button
                  onClick={() => handleLandingPage2Click("counsellor")}
                  whileHover={{ scale: 1.05 }}
                  className="flex h-64 w-64 flex-col items-center justify-center rounded-xl bg-[#303334] shadow-lg"
                >
                  <h3 className="font-inikaRegular text-2xl">
                    {clinicLandingResources.councillor.English}
                  </h3>
                  <div className="h-38 w-38 rounded-full bg-[#4CA9EE] shadow-md">
                    <img
                      className="p-6"
                      alt="Councillor Icon"
                      src="/images/clipboard.svg"
                    />
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        )}

        {/* Questionnaire */}
        {currentStep === 2 && (
          <div className="w-full bg-[#232627]">
            <div className="ml-12 flex h-[10vh] flex-initial p-6">
              <img
                className="h-full"
                alt="Birchbark Health Logo"
                src="/images/BirchbarkLogo3.svg"
              />
            </div>
            <div className="flex min-h-[90vh] flex-col items-center justify-center p-16 font-inter lg:p-8">
              <h1 className="mb-8 text-center text-7xl font-bold md:text-4xl">
                {questionnaireResources.title.English}
              </h1>

              <div className="flex w-[65%] flex-col items-center justify-center rounded-[48px] bg-white p-14 text-lg text-black lg:w-[95%] lg:p-8 md:text-sm">
                <div className="w-full">
                  <div className="flex flex-row p-5">
                    <input
                      type="checkbox"
                      {...register("confirmAppointment", { required: true })}
                      className="border-w mr-4 h-8 w-8 cursor-pointer border-2 accent-blue-400 dark:bg-white"
                      aria-invalid={
                        errors.confirmAppointment ? "true" : "false"
                      }
                    />

                    <label className="flex">
                      <span className="font-bold">
                        {questionnaireResources.confirmAppointment.English}
                      </span>
                    </label>
                  </div>
                  {errors.confirmAppointment?.type === "required" && (
                    <p className="text-sm text-red-500" role="alert">
                      Please confirm your appointment booking
                    </p>
                  )}
                  <div className="flex flex-row lg:flex-col">
                    <div className="flex w-1/2 flex-col p-5 lg:w-full">
                      <label>{questionnaireResources.firstName.English}</label>
                      <input
                        type="text"
                        {...register("firstName", { required: true })}
                        className="border-w border-2 bg-white p-4 accent-gray-200 focus:outline-none"
                        placeholder="First Name"
                        aria-invalid={errors.firstName ? "true" : "false"}
                      />
                      {errors.firstName?.type === "required" && (
                        <p className="text-sm text-red-500" role="alert">
                          First name is required
                        </p>
                      )}
                    </div>
                    <div className="flex w-1/2 flex-col p-5 lg:w-full">
                      <label>{questionnaireResources.lastName.English}</label>
                      <input
                        type="text"
                        {...register("lastName", { required: true })}
                        className="border-w border-2 bg-white p-4 accent-gray-200 focus:outline-none"
                        placeholder="Last Name"
                        aria-invalid={errors.lastName ? "true" : "false"}
                      />
                      {errors.lastName?.type === "required" && (
                        <p className="text-sm text-red-500" role="alert">
                          Last name is required
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-row lg:flex-col">
                    <div className="flex w-1/2 flex-col p-5 lg:w-full">
                      <label>{questionnaireResources.birthday.English}</label>
                      <input
                        id="birthday"
                        max={strToday}
                        type="date"
                        {...register("birthday", { required: true })}
                        className="border-w border-2 bg-white p-4 accent-gray-200 focus:outline-none"
                        aria-invalid={errors.birthday ? "true" : "false"}
                      />
                      {errors.birthday?.type === "required" && (
                        <p className="text-sm text-red-500" role="alert">
                          Birthday is required
                        </p>
                      )}
                    </div>
                    <div className="flex w-1/2 flex-col p-5 lg:w-full">
                      <label>{questionnaireResources.status.English}</label>
                      <input
                        type="text"
                        {...register("status", { required: true })}
                        className="border-w border-2 bg-white p-4 accent-gray-200 focus:outline-none"
                        placeholder="xxx-xxx-xxx"
                        aria-invalid={errors.status ? "true" : "false"}
                      />
                      {errors.status?.type === "required" && (
                        <p className="text-sm text-red-500" role="alert">
                          Status is required
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col p-5">
                    <label>
                      {questionnaireResources.reasonOfVisit.English}
                    </label>
                    <textarea
                      {...register("reasonOfVisit", { required: true })}
                      className="border-w border-2 bg-white p-4 accent-gray-200 focus:outline-none"
                      rows={4}
                      placeholder="Please enter your reason for visiting here."
                      aria-invalid={errors.reasonOfVisit ? "true" : "false"}
                    />
                    {errors.reasonOfVisit?.type === "required" && (
                      <p className="text-sm text-red-500" role="alert">
                        Reason of visit is required
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col p-5">
                    <label>{questionnaireResources.medicalIssue.English}</label>
                    <textarea
                      {...register("medicalIssue", { required: true })}
                      className="border-w border-2 bg-white p-4 accent-gray-200 focus:outline-none"
                      rows={4}
                      placeholder="Please enter your medical issue here."
                      aria-invalid={errors.medicalIssue ? "true" : "false"}
                    />
                    {errors.medicalIssue?.type === "required" && (
                      <p className="text-sm text-red-500" role="alert">
                        Medical issue is required
                      </p>
                    )}
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 flex w-[150px] items-center justify-center rounded-full bg-[#4CA9EE] p-2 text-white"
                  onClick={next}
                >
                  Next
                </motion.button>
              </div>
            </div>
          </div>
        )}

        {/* Booking Component */}
        {currentStep === 3 && (
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
                    {...register("bookingDay", { required: true })}
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
                              if (
                                day.day.toDateString() === curDay.toDateString()
                              ) {
                                return day.times.map((time) => (
                                  <motion.button
                                    key={time.toString()}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`flex select-none flex-row justify-between rounded-2xl border-2 ${
                                      day.day.getDate() === curDay.getDate() &&
                                      day.day.getMonth() ===
                                        curDay.getMonth() &&
                                      day.day.getFullYear() ===
                                        curDay.getFullYear() &&
                                      time.toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                      }) === curTime
                                        ? "border-[#2a3943] bg-[#4CA9EE] text-white"
                                        : "border-black text-black"
                                    }`}
                                    onClick={() =>
                                      handleClickedTime(day.day, time)
                                    }
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
                                          day.day.getDate() ===
                                            curDay.getDate() &&
                                          day.day.getMonth() ===
                                            curDay.getMonth() &&
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
                    onClick={handleBooking}
                  >
                    <p className="p-3 font-inikaBold text-2xl text-white">
                      Submit
                    </p>
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
        )}

        {currentStep === 4 && <h1>Complete</h1>}
      </form>

      {/* Navigation */}
      <div className="fixed bottom-[50%] left-4 lg:bottom-4">
        <div className="flex justify-between">
          <motion.button
            type="button"
            onClick={prev}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            disabled={currentStep === 0}
            className="mt-4 flex w-[100px] items-center justify-center rounded-full bg-[#4CA9EE] p-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            Back
          </motion.button>
        </div>
      </div>
    </div>
  );
}
