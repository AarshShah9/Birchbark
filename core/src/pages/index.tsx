import type { NextPage } from "next";
import HomePage from "./LandingPages/HomePage";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.appointment.getAll.useQuery();
  return <HomePage />;
};

export default Home;
