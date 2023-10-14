import React from "react";
import { api } from "~/utils/api";
import "@sendbird/uikit-react/dist/index.css";
import { InView } from "react-intersection-observer";
import Icon from "~/components/Icon";

// type SearchType = {
//   id: string;
//   title: string;
// };
// type SearchProps = {
//   items: SearchType[];
// };
const PullingImages: React.FC = () => {
  const [search, setSearch] = React.useState<string>("");

  const Query: React.FC = () => {
    const myQuery = api.image.getImages.useInfiniteQuery(
      { limit: 12, search: "" },
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
      }
    );
    if (myQuery.isLoading)
      return <div className={"p-4 text-white"}>Loading...</div>;
    if (myQuery.isError) return <div>Error</div>;

    return (
      <div className="flex min-h-full w-full">
        <div className="mx-5 mb-6 flex flex-col rounded-lg bg-n-5/50 pt-3">
          {myQuery.data!.pages.map((page, index) => (
            <div
              className="mb-2 flex flex-wrap justify-center gap-2"
              key={index}
            >
              {page.images.map((url) => (
                <div className="flex w-[31%] flex-wrap md:w-[46%] sm:w-[98%]">
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

          {myQuery.hasNextPage && (
            <div className="flex items-center justify-center">
              <InView onChange={(inView, entry) => myQuery.fetchNextPage()}>
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

  return (
    <>
      <form className="" action="" onSubmit={() => <Query />}>
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
        <div className="px-10 pt-5 md:px-6">
          <div className="mb-5 flex md:mb-0 md:block md:space-y-4"></div>
        </div>
      </form>
      <Query />
    </>
  );
};

export default PullingImages;
