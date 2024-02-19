// Component for the line break between dates
import React from "react";

type DateLineBreakProps = {
  date: string;
};

const DateLineBreak: React.FC<DateLineBreakProps> = ({ date }) => {
  return (
    <>
      <p className="mt-4 font-bold text-white">{date}</p>
      <hr className="h-[2px] w-full bg-white" />
    </>
  );
};

export default DateLineBreak;
