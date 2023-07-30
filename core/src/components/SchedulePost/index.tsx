import { useState } from "react";
import DatePicker from "react-datepicker";
import Icon from "@/components/Icon";
import "react-datepicker/dist/react-datepicker.css";

type SchedulePostProps = Record<string, never>;

const SchedulePost = ({}: SchedulePostProps) => {
  const [startDate, setStartDate] = useState<any>(new Date());
  const [selectedTime, setSelectedTime] = useState<any>(new Date());

  const isPastDate = (date: any) => {
    const today = new Date();
    return date < today;
  };

  const dayClassName = (date: any) => {
    return isPastDate(date) ? "past" : "";
  };

  return (
    <div>
      <div className="mb-5 font-bold">Schedule your post with Buffer</div>
      <div className="rounded-xl bg-n-1 p-5 dark:bg-n-6">
        <div className="mb-4 flex space-x-4 md:block md:space-x-0">
          <div className="basis-1/2 md:mb-4">
            <div className="base2 mb-2 font-semibold">Choose date</div>
            <div className="relative">
              <DatePicker
                className="base2 h-12 w-full rounded-xl border-2 border-n-4/25 bg-transparent pl-[2.625rem] font-inter text-n-6 outline-none transition-colors focus:border-primary-1 dark:text-n-3"
                dateFormat="dd MMMM yyyy"
                selected={startDate}
                onChange={(date: any) => setStartDate(date)}
                formatWeekDay={(nameOfDay) => nameOfDay.toString().slice(0, 1)}
                dayClassName={dayClassName}
              />
              <Icon
                className="pointer-events-none absolute left-3 top-3 fill-n-6 dark:fill-n-3"
                name="calendar"
              />
            </div>
          </div>
          <div className="basis-1/2">
            <div className="base2 mb-2 font-semibold">Time</div>
            <div className="relative">
              <DatePicker
                className="base2 h-12 w-full rounded-xl border-2 border-n-4/25 bg-transparent pl-[2.625rem] font-inter text-n-6 outline-none transition-colors focus:border-primary-1 dark:text-n-3"
                selected={selectedTime}
                onChange={(time: any) => setSelectedTime(time)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                dateFormat="h:mm aa"
              />
              <Icon
                className="pointer-events-none absolute left-3 top-3 fill-n-6 dark:fill-n-3"
                name="time"
              />
            </div>
          </div>
        </div>
        <div className="caption1 mb-4 flex items-center font-semibold text-n-4/50 dark:text-n-4">
          <Icon
            className="mr-3 h-4 w-4 fill-n-4/50 dark:text-n-4"
            name="info-circle"
          />
          Scheduled in your current timezone
        </div>
        <div className="text-right">
          <button className="btn-dark md:w-full">Schedule</button>
        </div>
      </div>
    </div>
  );
};

export default SchedulePost;
