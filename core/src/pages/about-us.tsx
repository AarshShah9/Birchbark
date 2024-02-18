import type { NextPage } from "next";
import AboutUs from "./LandingPages/AboutUsPage";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  return <AboutUs />;
};

export default Home;
