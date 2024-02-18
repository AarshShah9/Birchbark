import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { api } from "~/utils/api";

const ProfileTab = () => {
  const [editDetails, setEdit] = useState(true);
  const [emergencyDetails, setEmergencyDetails] = useState(true);
  const { data } = api.patient.getMe.useQuery();

  return (
    <div className="flex h-full w-full bg-[#232627] pt-24">
      {/* Details About me panel */}
      <div className="mx-10 flex h-fit w-96 flex-none flex-col rounded-lg bg-[#141718] p-8">
        <div className="mb-4 flex flex-row items-center">
          <img
            src="/Icons/Profile2.svg"
            alt="Profile"
            className="h-14 w-14"
          ></img>
          <h2 className="ml-4 text-3xl font-bold">Details about me</h2>
        </div>
        <div className="">
          <div className="flex flex-col">
            <h2 className="text-2xl font-medium">Preferred First Name</h2>
            <h3 className="text-xl text-[#B7B7B7] ">John</h3>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-medium">Gender Identity</h2>
            <h3 className="text-xl text-[#B7B7B7] ">Male</h3>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-medium">Sexual Orientation</h2>
            <h3 className="text-xl text-[#B7B7B7] ">Straight</h3>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-medium">Race</h2>
            <h3 className="text-xl text-[#B7B7B7] ">Asian</h3>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-medium">Ethnicity</h2>
            <h3 className="text-xl text-[#B7B7B7] ">Non Hispanic or Latino</h3>
          </div>
        </div>

        {/* Make it so that when you click this you can edit all the fields then save or cancel */}
        {editDetails ? (
          <motion.button
            onClick={() => {
              setEdit(!editDetails);
            }}
            whileHover={{ cursor: "pointer", scale: 1.05 }}
            className="my-2 flex items-center justify-center rounded-md bg-[#232627]"
          >
            <div className="flex flex-row">
              <img src="/Icons/edit.svg" alt="Edit" className="h-8 w-8"></img>
              <p className="pl-1 text-xl text-[#4CA9EE] underline">Edit</p>
            </div>
          </motion.button>
        ) : (
          <div className="my-2 flex flex-row items-center space-x-2 p-2">
            <motion.button
              onClick={() => {}}
              whileHover={{ cursor: "pointer", scale: 1.05 }}
              className="flex w-1/2 flex-row rounded-lg bg-[#4CA9EE] p-2"
            >
              <p className="pl-1 text-center text-xl font-bold text-white">
                Save
              </p>
            </motion.button>
            <motion.button
              onClick={() => {
                setEdit(!editDetails);
              }}
              whileHover={{ cursor: "pointer", scale: 1.05 }}
              className="flex w-1/2 flex-row rounded-lg bg-red-500 p-2"
            >
              <p className="pl-1 text-center text-xl font-bold text-white">
                Cancel
              </p>
            </motion.button>
          </div>
        )}
      </div>

      {/* Emergency Contact Panel */}
      <div className="mr-10 flex h-fit w-full flex-col rounded-lg bg-[#141718] p-8">
        <div className="mb-4 flex flex-row items-center">
          <img
            src="/Icons/Star.svg"
            alt="Emergency Contacts"
            className="h-14 w-14"
          ></img>
          <h2 className="ml-4 text-3xl font-bold">Emergency Contacts</h2>
        </div>
        <div className="flex flex-row">
          <div className="mx-2">
            <div className="flex flex-col">
              <h2 className="text-2xl font-medium">Name</h2>
              <h3 className="text-xl text-[#B7B7B7] ">{data?.name}</h3>
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-medium">Relation</h2>
              <h3 className="text-xl text-[#B7B7B7] ">Mother</h3>
            </div>
            {/*<div className="flex flex-col">*/}
            {/*  <h2 className="text-2xl font-medium">Address</h2>*/}
            {/*  <h3 className="text-xl text-[#B7B7B7] ">682 Toronto Street...</h3>*/}
            {/*</div>*/}
          </div>
          <div className="mx-2">
            <div className="flex flex-col">
              <h2 className="text-2xl font-medium">Email</h2>
              <h3 className="text-xl text-[#B7B7B7] ">{data?.email}</h3>
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-medium">Phone</h2>
              <h3 className="text-xl text-[#B7B7B7] ">{data?.phoneNumber}</h3>
            </div>
            {/*<div className="flex flex-col">*/}
            {/*  <h2 className="text-2xl font-medium">Home Phone</h2>*/}
            {/*  <h3 className="text-xl text-[#B7B7B7] ">682-902-2344</h3>*/}
            {/*</div>*/}
            {/*<div className="flex flex-col">*/}
            {/*  <h2 className="text-2xl font-medium">Work Phone</h2>*/}
            {/*  <h3 className="text-xl text-[#B7B7B7] ">682-902-2344</h3>*/}
            {/*</div>*/}
          </div>
        </div>

        {/* Make it so that when you click this you can edit all the fields then save or cancel */}
        {emergencyDetails ? (
          <motion.button
            onClick={() => {
              setEmergencyDetails(!emergencyDetails);
            }}
            whileHover={{ cursor: "pointer", scale: 1.05 }}
            className="my-2 flex items-center justify-center rounded-md bg-[#232627]"
          >
            <div className="flex flex-row">
              <img src="/Icons/edit.svg" alt="Edit" className="h-8 w-8"></img>
              <p className="pl-1 text-xl text-[#4CA9EE] underline">Edit</p>
            </div>
          </motion.button>
        ) : (
          <div className="my-2 flex flex-row items-center space-x-2 p-2">
            <motion.button
              onClick={() => {}}
              whileHover={{ cursor: "pointer", scale: 1.05 }}
              className="flex w-1/2 flex-row rounded-lg bg-[#4CA9EE] p-2"
            >
              <p className="pl-1 text-center text-xl font-bold text-white">
                Save
              </p>
            </motion.button>
            <motion.button
              onClick={() => {
                setEmergencyDetails(!emergencyDetails);
              }}
              whileHover={{ cursor: "pointer", scale: 1.05 }}
              className="flex w-1/2 flex-row rounded-lg bg-red-500 p-2"
            >
              <p className="pl-1 text-center text-xl font-bold text-white">
                Cancel
              </p>
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileTab;
