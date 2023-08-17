import React, { useState } from "react";
import Icon from "@/components/Icon";
import Select from "@/components/Select";
import Item from "~/components/Search/Item";

const createdOptions = [
  {
    id: "0",
    title: "Video",
  },
  {
    id: "1",
    title: "Audio",
  },
  {
    id: "2",
    title: "Code",
  },
];

const dates = [
  {
    id: "0",
    title: "Today",
  },
  {
    id: "1",
    title: "Last week",
  },
  {
    id: "2",
    title: "Last 30 days",
  },
];

type ItemsType = {
  id: string;
  author: string;
  title: string;
  content: string;
  time: string;
  avatar: string;
  online: boolean;
  url: string;
};

type SearchType = {
  id: string;
  title: string;
  date?: string;
  list: ItemsType[];
};

type SearchProps = {
  items: SearchType[];
};

const Search = ({ items }: SearchProps) => {
  const [search, setSearch] = useState<string>("");
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [createdBy, setCreatedBy] = useState<any>();
  const [date, setDate] = useState<any>();

  return (
    <form className="" action="" onSubmit={() => console.log("Submit")}>
      <div className="relative border-b border-n-3 dark:border-n-6">
        <button
          className="group absolute left-10 top-7 outline-none md:hidden"
          type="submit"
        >
          <Icon
            className="h-8 w-8 fill-n-4/50 transition-colors group-hover:fill-n-7 dark:group-hover:fill-n-3"
            name="search-1"
          />
        </button>
        <input
          className="h5 h-22 w-full border-none bg-transparent pl-24 pr-5 text-n-7 outline-none placeholder:text-n-4/50 dark:text-n-1 md:h-18 md:pl-18"
          type="text"
          name="search"
          placeholder="Search"
          value={search}
          onChange={(e: any) => setSearch(e.target.value)}
        />
      </div>
      <div className="px-10 pb-6 pt-5 md:px-6">
        <div className="mb-5 flex md:mb-0 md:block md:space-y-4">
          <div className="relative mr-3 w-[10.31rem] md:mr-0 md:w-full">
            <button
              className="group absolute left-4 top-3 text-0"
              type="submit"
            >
              <Icon
                className="h-5 w-5 fill-n-7 transition-colors group-hover:fill-primary-1 dark:fill-n-1"
                name="search-1"
              />
            </button>
            <input
              className="caption1 h-11 w-full rounded-full bg-transparent pl-11 pr-4 text-n-7 shadow-[inset_0_0_0_0.0625rem_#DADBDC] outline-none transition-shadow placeholder:text-n-4 focus:shadow-[inset_0_0_0_0.125rem_#0084FF] dark:text-n-1 dark:shadow-[inset_0_0_0_0.0625rem_#2A2E2F] dark:focus:shadow-[inset_0_0_0_0.125rem_#0084FF]"
              type="text"
              name="search"
              placeholder="Search ..."
              value={searchTitle}
              onChange={(e: any) => setSearchTitle(e.target.value)}
            />
          </div>
          <Select
            className="mr-3 w-[10.31rem] md:mr-0 md:w-full"
            classButton="h-11 rounded-full shadow-[inset_0_0_0_0.0625rem_#DADBDC] caption1 dark:shadow-[inset_0_0_0_0.0625rem_#2A2E2F] dark:bg-transparent"
            classOptions="min-w-full"
            classIcon="w-5 h-5 fill-n-4/50"
            classArrow="dark:fill-n-4"
            icon="user-check"
            placeholder="Created by"
            items={createdOptions}
            value={createdBy}
            onChange={setCreatedBy}
          />
          <Select
            className="w-[10.31rem] md:mr-0 md:w-full"
            classButton="h-11 rounded-full shadow-[inset_0_0_0_0.0625rem_#DADBDC] caption1 dark:shadow-[inset_0_0_0_0.0625rem_#2A2E2F] dark:bg-transparent"
            classOptions="min-w-full"
            classIcon="w-5 h-5 fill-n-4/50"
            classArrow="dark:fill-n-4"
            icon="clock"
            placeholder="Date"
            items={dates}
            value={date}
            onChange={setDate}
          />
        </div>
        <div>
          {items.map((x) => (
            <Item item={x} key={x.id} />
          ))}
        </div>
      </div>
    </form>
  );
};

export default Search;
