import React, { useState } from "react";
import Navbar from "~/customComponents/Navbar";
import { motion } from "framer-motion";
import { BsFillBox2HeartFill } from "react-icons/bs";
import { paymentSuccessResources } from "../../../itlText/payment-success";
import { questionnaireResources } from "../../../itlText/questionnaire";

const Questionnaire: React.FC = () => {
  const [confirmAppointment, setConfirmAppointment] = useState(false);
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [age, setAge] = useState("");
  const [status, setStatus] = useState("");
  const [reasonOfVisit, setReasonOfVisit] = useState("");
  const [medicalIssue, setMedicalIssue] = useState("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const patient = {
      name: String,
      birthday: String,
      age: Number,
      status: Number,
      reasonOfVisit: String,
      medicalIssue: String,
    };
    if (!confirmAppointment) {
      alert("Please confirm your appointment booking");
      return;
    }
    if (name === "") {
      alert("Please enter your name");
      return;
    }
    if (birthday === "") {
      alert("Please enter your birthday");
      return;
    }
    if (age === "") {
      alert("Please enter your age");
      return;
    }
    if (status === "") {
      alert("Please enter your status number");
      return;
    }
    console.log("Patient: ", patient);
  };
  return (
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
          {questionnaireResources.title.English}
        </h1>
        <div className="flex w-[65%] flex-col items-center justify-center rounded-[48px] bg-white p-14 text-lg text-black lg:p-8 md:w-[95%] md:text-sm">
          <div className="w-full">
            <div className="flex flex-row p-5">
              <input
                type="checkbox"
                onChange={() => {
                  setConfirmAppointment(!confirmAppointment);
                }}
                className="border-w mr-4 h-8 w-8 cursor-pointer border-2 accent-blue-400 dark:bg-white"
              />
              <label className="flex">
                <span className="font-bold">
                  {questionnaireResources.confirmAppointment.English}
                </span>
              </label>
            </div>
            <div className="flex flex-row lg:flex-col">
              <div className="flex w-1/2 flex-col p-5 lg:w-full">
                <label>{questionnaireResources.name.English}</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="border-w border-2 bg-white p-4 accent-gray-200 focus:outline-none"
                />
              </div>
              <div className="flex w-1/2 flex-col p-5 lg:w-full">
                <label>{questionnaireResources.birthday.English}</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setBirthday(e.target.value);
                  }}
                  className="border-w border-2 bg-white p-4 accent-gray-200 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-row lg:flex-col">
              <div className="flex w-1/2 flex-col p-5 lg:w-full">
                <label>{questionnaireResources.age.English}</label>
                <input
                  type="number"
                  min="0"
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                  className="border-w border-2 bg-white p-4 accent-gray-200 focus:outline-none"
                />
              </div>
              <div className="flex w-1/2 flex-col p-5 lg:w-full">
                <label>{questionnaireResources.status.English}</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                  className="border-w border-2 bg-white p-4 accent-gray-200 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col p-5">
              <label>{questionnaireResources.reasonOfVisit.English}</label>
              <textarea
                onChange={(e) => {
                  setReasonOfVisit(e.target.value);
                }}
                className="border-w border-2 bg-white p-4 accent-gray-200 focus:outline-none"
                rows={4}
              />
            </div>
            <div className="flex flex-col p-5">
              <label>{questionnaireResources.medicalIssue.English}</label>
              <textarea
                onChange={(e) => {
                  setMedicalIssue(e.target.value);
                }}
                className="border-w border-2 bg-white p-4 accent-gray-200 focus:outline-none"
                rows={4}
              />
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 flex w-[200px] items-center justify-center rounded-full bg-[#4CA9EE] text-white"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            <p className="p-4 font-inikaBold text-2xl">Submit</p>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
