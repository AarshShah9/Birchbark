import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Icon from "@/components/Icon";
import Application from "./Application";

import { applications } from "@/mocks/applications";

const ApplicationsPage = () => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  return (
    <Layout hideRightSidebar>
      <div className="p-10 md:px-6 md:pb-10 md:pt-5">
        <button
          className="absolute right-6 top-6 hidden h-10 w-10 rounded-full border-2 border-n-4/25 text-0 transition-colors hover:border-transparent hover:bg-n-4/25 md:block"
          onClick={() => router.back()}
        >
          <Icon className="fill-n-4" name="close" />
        </button>
        <div className="h3 leading-[4rem] md:h3 md:mb-3">Applications</div>
        <div className="body1 mb-8 text-n-4 md:body1S md:mb-6">
          Browse and install apps to simplify your life with Brainwave
        </div>
        <form className="mb-8" action="" onSubmit={() => console.log("Submit")}>
          <div className="relative">
            <button
              className="group absolute left-5 top-5 outline-none"
              type="submit"
            >
              <Icon
                className="fill-n-4 transition-colors group-hover:fill-n-7"
                name="search"
              />
            </button>
            <input
              className="base1 h-16 w-full rounded-xl border-2 border-transparent bg-n-2 pl-13 pr-6 text-n-7 outline-none transition-colors placeholder:text-n-4 focus:border-n-3 focus:bg-transparent dark:bg-n-7 dark:text-n-1 dark:focus:border-n-7 dark:focus:bg-n-6"
              type="text"
              name="search"
              placeholder="Search by app name or category"
              value={search}
              onChange={(e: any) => setSearch(e.target.value)}
            />
          </div>
        </form>
        <div className="h6 mb-11 text-n-4 md:mb-6">Suggested apps</div>
        <div className="-mx-7 -mt-16 flex flex-wrap 2xl:-mx-4 2xl:-mt-12 md:mx-0 md:mt-0 md:block">
          {applications.map((application) => (
            <Application item={application} key={application.id} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ApplicationsPage;
