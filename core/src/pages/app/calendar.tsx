import type { NextPage } from "next";
import DoctorCalendar from "../CustomPages/DoctorCalendarPage";
import PatientCalendar from "../CustomPages/PatientCalendarPage";

const Home: NextPage = () => {
  let userType = "doctor";
  return (
    <>
      {userType === "doctor" ? <DoctorCalendar /> : <PatientCalendar />}
    </>
    
  );
};

export default Home;
