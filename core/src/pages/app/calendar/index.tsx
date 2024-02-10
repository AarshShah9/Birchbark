import type { NextPage } from "next";
import DoctorCalendar from "./DoctorCalendarPage";
import Layout from "~/components/Layout";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  return (
    <Layout>
      <DoctorCalendar />
    </Layout>
  );
};

export default Home;
