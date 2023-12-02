import React from "react";
import Navbar from "~/customComponents/Navbar";
import { motion } from "framer-motion";
import { BsFillBox2HeartFill } from "react-icons/bs";
import { paymentSuccessResources } from "../../../itlText/payment-success";
import { questionnaireResources } from "../../../itlText/questionnaire";

const Questionnaire: React.FC = () => {
  return (
    <div className="bg-[#232627]">
      <div className="ml-12 flex h-24 flex-initial p-6">
        <img
          className="h-full"
          alt="Birchbark Health Logo"
          src="/images/BirchbarkLogo3.svg"
        />
      </div>
      <div className="flex min-h-screen flex-col items-center justify-center p-16 font-inter">
        <h1 className="mb-8 text-center text-7xl font-bold">
          {questionnaireResources.title.English}
        </h1>
        <div className="flex w-[65%] flex-col items-center justify-center rounded-[48px] bg-white p-14 text-black">
          <div className="w-full">
            <div className="flex flex-row p-5">
              <input
                type="checkbox"
                className="border-w mr-4 h-8 w-8 cursor-pointer border-2 bg-[#FFF] accent-blue-400"
              />
              <label className="flex">
                <span className="text-lg font-bold">
                  {questionnaireResources.confirmAppointment.English}
                </span>
              </label>
            </div>
            <div className="flex flex-row">
              <div className="flex w-1/2 flex-col p-5">
                <label className="text-lg">
                  {questionnaireResources.name.English}
                </label>
                <input
                  type="text"
                  className="border-w border-2 bg-white p-4 accent-gray-200 focus:outline-none"
                />
              </div>
              <div className="flex w-1/2 flex-col p-5">
                <label className="text-lg">
                  {questionnaireResources.birthday.English}
                </label>
                <input
                  type="text"
                  className="border-w border-2 bg-white p-4 accent-gray-200 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex w-1/2 flex-col p-5">
                <label className="text-lg">
                  {questionnaireResources.age.English}
                </label>
                <input
                  type="text"
                  className="border-w border-2 bg-white p-4 accent-gray-200 focus:outline-none"
                />
              </div>
              <div className="flex w-1/2 flex-col p-5">
                <label className="text-lg">
                  {questionnaireResources.status.English}
                </label>
                <input
                  type="text"
                  className="border-w border-2 bg-white p-4 accent-gray-200 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col p-5">
              <label className="text-lg">
                {questionnaireResources.reasonOfVisit.English}
              </label>
              <textarea
                className="border-w border-2 bg-white p-4 accent-gray-200 focus:outline-none"
                rows={4}
              />
            </div>
            <div className="flex flex-col p-5">
              <label className="text-lg">
                {questionnaireResources.medicalIssue.English}
              </label>
              <textarea
                className="border-w border-2 bg-white p-4 accent-gray-200 focus:outline-none"
                rows={4}
              />
            </div>
          </div>
          <motion.button className="mt-4 flex w-[200px] items-center justify-center rounded-full bg-[#4CA9EE] text-white">
            <p className="p-4 font-inikaBold text-2xl">Submit</p>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
