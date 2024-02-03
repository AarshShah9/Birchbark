import type { NextPage } from "next";
import DoctorCalendar from "./DoctorCalendarPage";
import PatientCalendar from "../../CustomPages/PatientCalendarPage";
import Layout from "~/components/Layout";
import { api } from "~/utils/api";
import { useState } from "react";

const Home: NextPage = () => {
  const [currentId, setCurrentId] = useState<number>(0);

  const testMutation = api.test.testCreate.useMutation({
    onSuccess: (res) => {
      setCurrentId(res.id);
    },
  });

  const { refetch } = api.test.testGet.useQuery(
    {
      id: currentId,
    },
    {
      enabled: currentId !== 0,
    }
  );

  return (
    <Layout>
      <button
        onClick={() => {
          testMutation.mutate({ name: "HEELLLLO!!" });
        }}
        style={{ padding: "10px", margin: "10px", color: "white" }}
      >
        TEST CREATE
      </button>
      <button
        onClick={() => {
          refetch().then((r) => console.log(r));
        }}
        style={{ padding: "10px", margin: "10px", color: "white" }}
      >
        TEST GET
      </button>
      <DoctorCalendar />
    </Layout>
  );
};

export default Home;
