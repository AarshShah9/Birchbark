import App from 'next/app';
import React from 'react';
import Layout from "~/components/Layout";
import AppointmentTimeCard from '~/customComponents/AppointmentTimeCard';
import { api } from "~/utils/api";

const IndexPage: React.FC = () => {
    const { data, error } = api.appointment.getDoctorAvailability.useQuery()
    if(error){
        console.log("TRPC CALL ERROR: " + error)
    }

    let dates : string[] = []
    let times : string[] = []
    const months: Record<number, string> = {
        0: "January",
        1: "Febuary",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December",
    }

    if(data){
        // Adding the dates to the array for the line break UI component
        data.forEach(
            item => {
                dates.push(
                    months[item.date.getMonth()]+
                    ","
                    +item.date.getDate().toString()+
                    " "+
                    item.date.getFullYear().toString()
                )
            }
        )

        // Add the times in 30 minute appointment slots
        data.forEach(
            item => {
                let startHour = item.startTime.getHours()
                let endHour = item.endTime.getHours()
                for (let i = startHour; i < endHour; i++) {
                    times.push(i.toString()+":00")
                    times.push(i.toString()+":30")
                }
            }
        )
    }

    

    

    interface DateLineBreakProps {
        date: string;
      }
    
    const DateLineBreak: React.FC<DateLineBreakProps> = ({ date }) => {
        return (
        <div className="mt-4 flex flex-col font-bold w-[60%] px-32">
            <div>
            <p className="text-black">{date}</p>
            </div>
            <div className="h-[2px] w-full bg-black"></div>
        </div>
        );
    };

    return (
        <Layout>
            <div className='w-full h-full bg-[#ffffff]'>
                <div className='w-full h-56 flex flex-col justify-center items-center'>
                    <h2 className='h2 mx-32 text-black text-center'>Schedule an Appointment with your doctor</h2>
                    <p className='h6 text-[#6C7275] font-medium mt-3'>Chat with an experience doctor - and get the care you need</p>
                </div>
                <div className='w-full flex items-center justify-center'>
                    <div className='w-[60%] flex flex-col justify-center items-center '>
                        {
                            dates.map((date, index) => (
                                <DateLineBreak date={date} key={index} />
                            ))
                        }
                        {
                            times.map((time, index) => (
                                <AppointmentTimeCard time={time} key={index} />
                            ))
                        }
                    </div>
                </div>
                
            </div>
        </Layout>
    );
};

export default IndexPage;
