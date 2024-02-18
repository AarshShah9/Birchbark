import React from "react";
import { motion } from "framer-motion";

const CreateOrganizationPage = () => {
  return (
    <div className="flex w-full flex-col items-center bg-[#232627] text-white">
      <div className="my-8 flex  w-[80%] flex-row items-center justify-between lg:w-[95%] ">
        <motion.a
          href="/pricing"
          className="m-8 flex h-14 w-40 items-center justify-center rounded-full bg-blue-500 text-2xl font-bold lg:m-3 lg:h-11 lg:w-32 lg:text-xl"
          whileHover={{ scale: 1.05 }}
        >
          Back
        </motion.a>
      </div>
      <div className="mb-24 flex h-fit flex-col items-center rounded-xl py-20 ">
        <div className="w-[80%] ">
          <h1 className="mb-8 text-center text-6xl font-bold lg:text-5xl">
            Create Organization
          </h1>
          <p className="mb-20 text-center text-lg">
            This is the admin account you will have to manage all of your
            patients, schedule appointments, approve appoitnments, etc.
          </p>
        </div>
        <div className="w-[80%] ">
          <form className="flex flex-col items-center justify-center">
            <label className="mb-6 mt-8 text-center text-3xl font-bold lg:text-2xl">
              Organization Details
            </label>
            <input
              className="mb-8 h-14 w-[80%] rounded-lg bg-[#ffffff] p-4 text-xl font-medium text-black"
              type="text"
              placeholder="Organization Name"
            />
            <input
              className="mb-8 h-14 w-[80%] rounded-lg bg-[#ffffff] p-4 text-xl font-medium text-black"
              type="text"
              placeholder="Organization Phone"
            />
            <input
              className="mb-8 h-14 w-[80%] rounded-lg bg-[#ffffff] p-4 text-xl font-medium text-black"
              type="text"
              placeholder="Organization Website"
            />
            <input
              className="mb-8 h-14 w-[80%] rounded-lg bg-[#ffffff] p-4 text-xl font-medium text-black"
              type="text"
              placeholder="Organization Email"
            />
            <input
              className="mb-8 h-14 w-[80%] rounded-lg bg-[#ffffff] p-4 text-xl font-medium text-black"
              type="text"
              placeholder="Organization Website"
            />
            <input
              className="mb-8 h-14 w-[80%] rounded-lg bg-[#ffffff] p-4 text-xl font-medium text-black"
              type="text"
              placeholder="Organization Doctor"
            />
            <input
              className="mb-8 h-14 w-[80%] rounded-lg bg-[#ffffff] p-4 text-xl font-medium text-black"
              type="text"
              placeholder="Organization Patients"
            />

            <label className="mb-6 mt-8 text-center text-3xl font-bold lg:text-2xl">
              Organization Address Information
            </label>
            <input
              className="mb-8 h-14 w-[80%] rounded-lg bg-[#ffffff] p-4 text-xl font-medium text-black"
              type="text"
              placeholder="Address"
            />
            <input
              className="mb-8 h-14 w-[80%] rounded-lg bg-[#ffffff] p-4 text-xl font-medium text-black"
              type="text"
              placeholder="Apt"
            />
            <input
              className="mb-8 h-14 w-[80%] rounded-lg bg-[#ffffff] p-4 text-xl font-medium text-black"
              type="text"
              placeholder="City"
            />
            <input
              className="mb-8 h-14 w-[80%] rounded-lg bg-[#ffffff] p-4 text-xl font-medium text-black"
              type="text"
              placeholder="Province"
            />
            <input
              className="mb-8 h-14 w-[80%] rounded-lg bg-[#ffffff] p-4 text-xl font-medium text-black"
              type="text"
              placeholder="Postal Code"
            />

            <motion.a
              href="/payment"
              className="flex h-14 w-64 items-center justify-center rounded-full bg-blue-500 text-2xl font-bold lg:h-12"
              whileHover={{ scale: 1.05 }}
            >
              Next
            </motion.a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateOrganizationPage;
