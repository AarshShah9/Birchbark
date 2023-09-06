import type {NextPage} from "next";
import CalendarPage from "../pages/CustomPages/CalendarPage";
import {api} from "~/utils/api";

const Home: NextPage = () => {
    // const {data, error, isLoading} = api.appointment.getAll.useQuery();
    //
    // console.log(data);


    return <CalendarPage/>;
};

export default Home;
