import React, { useState } from "react";
import Icon from "~/components/Icon";
import Layout from "~/components/Layout";

const ImageGalleryPage: React.FC = () => {
  const [searchTitle, setSearchTitle] = useState("");

  return (
    <Layout>
      <div className={"p-5"}>
        <div className="w:100% relative mr-3 md:mr-0 md:w-full">
          <button className="group absolute left-4 top-3 text-0" type="submit">
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
      </div>
    </Layout>
  );
};

export default ImageGalleryPage;
