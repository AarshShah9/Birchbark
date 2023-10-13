import React from "react";
import { NextPage } from "next";
import { api } from "~/utils/api";
import Layout from "~/components/Layout";
import { useUser } from "@clerk/nextjs";
import "@sendbird/uikit-react/dist/index.css";
import { useColorMode } from "@chakra-ui/color-mode";
import dynamic from "next/dynamic";
import styled from "styled-components";
import { env } from "~/env.mjs";
import { resultSearch } from "@/mocks/resultSearch";
import Icon from "@/components/Icon";
import Select from "@/components/Select";
import Item from "~/components/Search/Item";
import { InView } from "react-intersection-observer";

const ChatsPage: React.FC = () => {
  const user = useUser();
  const { colorMode } = useColorMode();
  const isLightMode = colorMode === "light";

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
    const [search, setSearch] = React.useState<string>("");
    const [searchTitle, setSearchTitle] = React.useState<string>("");

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
          <div className="mb-5 flex md:mb-0 md:block md:space-y-4"></div>
        </div>
      </form>
    );
  };

  return (
    <Layout>
      <div className={"h-screen rounded-2xl p-2"}>
        <Search items={resultSearch} />
      </div>
    </Layout>
  );
};

const pullingImages: NextPage = () => {
  const myQuery = api.image.getImages.useInfiniteQuery(
    { limit: 9, search: "" },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );
  if (myQuery.isLoading) return <div className={"text-white"}>Loading...</div>;
  if (myQuery.isError) return <div>Error</div>;

  async function fetch() {
    const next = await myQuery.fetchNextPage();
  }

  return (
    <div className="min-h-full w-full">
      <div className="flex max-w-[90%] flex-col justify-center rounded-lg bg-slate-500 p-10">
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
          {myQuery.data!.pages.map((page, index) => (
            <div className="mb-2 flex flex-wrap gap-2" key={index}>
              {page.images.map((url) => (
                <div className="flex w-[32%] flex-wrap justify-center">
                  <img
                    className="max-h-64 rounded-md"
                    src={url}
                    alt="image"
                    key={url}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {myQuery.hasNextPage && (
          //   <button
          //     className={"text-white"}
          //     onClick={() => myQuery.fetchNextPage()}
          //   >
          //     Load more
          //   </button>

          <div className="flex items-center justify-center">
            <InView onChange={(inView, entry) => fetch()}>
              <div
                className="flex h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!-m-px flex !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            </InView>
          </div>
        )}
      </div>
    </div>
  );
};

export default pullingImages;
