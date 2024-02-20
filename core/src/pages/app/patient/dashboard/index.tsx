import React, { useState } from "react";
import { motion } from "framer-motion";
import HomeTab from "~/customComponents/PatientDashboardTabs/HomeTab";
import AppointmentsTab from "~/customComponents/PatientDashboardTabs/AppointmentTab";
import ProfileTab from "~/customComponents/PatientDashboardTabs/ProfileTab";
import { UserButton } from "@clerk/nextjs";

const PatientDashboard: React.FC = () => {
  const [currentTab, setCurrentTab] = useState("Home");
  const [smallNav, setSmallNav] = useState(false);

  interface Tabs {
    tabName: string;
    tabLink: string;
    tabIcon: string;
  }

  const Tab: React.FC<Tabs> = ({ tabName, tabLink, tabIcon }) => {
    return (
      <a
        href="#"
        className="flex h-20 items-center justify-center bg-[#4CA9EE] py-4 xl:h-12"
      >
        <motion.div
          className="flex h-20 w-full items-center justify-start bg-[#141718] py-4 pl-6 xl:h-12"
          whileHover={{
            marginLeft: "6px",
            marginRight: "6px",
            color: "#4CA9EE",
          }}
          onClick={() => setCurrentTab(tabLink)}
        >
          <img
            src={tabIcon}
            alt="profile"
            className="mr-5 h-10 w-10 xl:h-6 xl:w-6 "
          />
          <h1 className="text-2xl font-bold text-white xl:text-lg">
            {tabName}
          </h1>
        </motion.div>
      </a>
    );
  };

  const SmallTab: React.FC<Tabs> = ({ tabName, tabLink, tabIcon }) => {
    return (
      <motion.a
        href="#"
        className="my-2 flex h-16 w-16 items-center justify-center p-2 xl:h-12 xl:w-12"
        whileHover={{ marginLeft: "6px" }}
        onClick={() => setCurrentTab(tabLink)}
      >
        <img
          src={tabIcon}
          alt="profile"
          className="h-16 w-16 xl:h-12 xl:w-12"
        />
      </motion.a>
    );
  };

  return (
    <div className="flex h-screen w-full flex-row">
      {/* Left Side */}
      <div
        className={`flex-none ${
          smallNav ? "w-24" : "w-72 xl:w-52"
        } bg-[#141718] `}
      >
        <div className="flex h-full flex-col justify-between">
          <div>
            <a href="#">
              <img
                src={smallNav ? "/Logos/LogoIcon.svg" : "/Logos/Logo.svg"}
                alt="logo"
                className=""
              />
            </a>

            {/* Background for nav items */}
            <div className={`flex flex-col ${smallNav ? "items-center" : ""}`}>
              {smallNav ? (
                <SmallTab
                  tabName="Home"
                  tabLink="Home"
                  tabIcon="/icons/HouseIcon.svg"
                ></SmallTab>
              ) : (
                <Tab
                  tabName="Home"
                  tabLink="Home"
                  tabIcon="/icons/HouseIcon.svg"
                ></Tab>
              )}
              {smallNav ? (
                <SmallTab
                  tabName="Appointments"
                  tabLink="Appointments"
                  tabIcon="/icons/CalendarIcon.svg"
                ></SmallTab>
              ) : (
                <Tab
                  tabName="Appointments"
                  tabLink="Appointments"
                  tabIcon="/icons/CalendarIcon.svg"
                ></Tab>
              )}
              {smallNav ? (
                <SmallTab
                  tabName="Profile"
                  tabLink="Profile"
                  tabIcon="/icons/PersonIcon.svg"
                ></SmallTab>
              ) : (
                <Tab
                  tabName="Profile"
                  tabLink="Profile"
                  tabIcon="/icons/PersonIcon.svg"
                ></Tab>
              )}
            </div>
          </div>

          {/* Switch Button */}
          {/*<div className="flex w-full justify-end">*/}
          <div
            className={`flex w-full ${
              smallNav
                ? "flex-col items-center justify-center"
                : "items-center justify-between"
            }`}
          >
            <div className="m-4 flex h-12 w-12 items-center justify-center">
              <UserButton afterSignOutUrl="/" />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setSmallNav(!smallNav)}
              className="m-4 flex h-16 w-16 items-center justify-center rounded-full"
            >
              {smallNav ? (
                <img
                  src="/Icons/MenuOpen.svg"
                  alt="Menu Icon"
                  className="h-12 w-12"
                ></img>
              ) : (
                <img
                  src="/Icons/MenuClose.svg"
                  alt="Menu Icon"
                  className="h-12 w-12"
                ></img>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex w-full flex-col">
        <div className="h-full">
          {currentTab === "Home" && <HomeTab />}
          {currentTab === "Appointments" && <AppointmentsTab />}
          {currentTab === "Profile" && <ProfileTab />}
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
