import type { NextPage } from "next";
import DoctorCalendar from "./DoctorCalendarPage";
import DoctorTableView from "./DoctorTableView";
import Layout from "~/components/Layout";
import { api } from "~/utils/api";
// inmport new component

const Home: NextPage = () => {
  return (
    <Layout>
      {/* <DoctorCalendar /> */}
      <DoctorTableView />
    </Layout>
  );
};

export default Home;
