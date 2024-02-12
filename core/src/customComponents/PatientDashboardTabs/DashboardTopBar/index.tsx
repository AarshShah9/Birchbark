import { motion } from "framer-motion";
import React, { useState } from "react";
import TimeDisplay from "~/customComponents/TimeDisplay";

const dashboardTopBar = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  // TODO: Change this to fetch data and sort/filter it on the backend
  const fetchData = (value: string) => {
    fetch("https://jsonplaceholder.typicode.com/users") // This is async
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user: { name: string }) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value.toLowerCase())
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value: string) => {
    setInput(value);
    // fetchData(value);
  };

  return (
    <div className="flex flex-row justify-between bg-[#232627] px-10 py-8">
      {/* Top Bar */}

      <TimeDisplay />

      {/* Search Bar */}
      <div className="relative h-fit w-[500px] rounded-md 2xl:hidden ">
        <div className="flex flex-row rounded-md">
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-l-md bg-white px-4 py-2 text-black outline-none"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          ></input>
          <motion.a
            className="flex items-center rounded-r-md bg-[#4CA9EE] px-6 py-2"
            href="#"
          >
            <motion.span whileHover={{ scale: 1.1 }}>
              <img
                src="/Icons/SearchIcon.svg"
                alt="Search Icon"
                className="h-8 w-8"
              ></img>
            </motion.span>
          </motion.a>
        </div>

        {/*{results.length > 0 ? (*/}
        {/*  <div className="absolute mt-2 w-full rounded-md bg-white p-4 font-bold text-black">*/}
        {/*    {results.map((result) => (*/}
        {/*      <div key={result}>*/}
        {/*        <p>{result.name}</p>*/}
        {/*      </div>*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*) : (*/}
        {/*  <div className="hidden"></div>*/}
        {/*)}*/}
      </div>

      {/* Icon Buttons */}
      <div className="flex flex-row space-x-4">
        <motion.a
          href="#"
          className="h-14 w-14 rounded-full bg-white"
          whileHover={{ scale: 1.1 }}
        >
          <img
            src="/Icons/BellIcon.svg"
            alt="Bell"
            className="h-14 w-14 p-4"
          ></img>
        </motion.a>
        <motion.a
          href="#"
          className="h-14 w-14 rounded-full bg-[#4CA9EE]"
          whileHover={{ scale: 1.1 }}
        >
          <img
            src="/Icons/MailIcon.svg"
            alt="Mail"
            className="h-14 w-14 p-4"
          ></img>
        </motion.a>
        <motion.a href="#" whileHover={{ scale: 1.1 }}>
          <img
            src="/Icons/Profile.svg"
            alt="Profile"
            className="h-14 w-14"
          ></img>
        </motion.a>
      </div>
    </div>
  );
};
