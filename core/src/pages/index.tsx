import type {NextPage} from "next";
import HomePage from "../pages/templates/HomePage";
import CalendarPage from "../pages/CustomPages/CalendarPage";

const Home: NextPage = () => {
    return <CalendarPage/>;
};

export default Home;
