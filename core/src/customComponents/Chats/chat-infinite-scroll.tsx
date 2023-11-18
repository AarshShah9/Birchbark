import React, { useCallback } from "react";
import { api } from "~/utils/api";
import "@sendbird/uikit-react/dist/index.css";
import { InView } from "react-intersection-observer";
import Icon from "~/components/Icon";
import ChatModal from "../Chats/chat-modal";
import _ from "lodash"; // Import Lodash for debouncing


const PullingImages: React.FC = () => {
  const [visibleSearch, setVisibleSearch] = React.useState<boolean>(false);

  const handleClose = useCallback(() => {
    setVisibleSearch(false);
  }, []);

  return (
    <>
      <button onClick={() => setVisibleSearch(true)}>Search</button>
      <ChatModal
        className="md:!p-0"
        classWrap="md:min-h-screen-ios dark:shadow-[inset_0_0_0_0.0625rem_#232627,0_2rem_4rem_-1rem_rgba(0,0,0,0.33)] dark:md:shadow-none"
        classButtonClose="hidden md:flex md:absolute md:top-6 md:left-6 dark:fill-n-1"
        classOverlay="md:bg-n-1"
        visible={visibleSearch}
        onClose={() => setVisibleSearch(false)}
      >
        <SendImageQuery propCloseHandler={handleClose} />
      </ChatModal>
    </>
  );
};

type closeProps = {
  propCloseHandler: () => void;
};

const SendImageQuery = ({ propCloseHandler }: closeProps) => {
  const [search, setSearch] = React.useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = React.useState<string>("");

    // Debounce function to delay the search
    const debouncedSetSearch = useCallback(
        _.debounce((value) => {
            setDebouncedSearch(value);
            console.log("debounced");
        }, 250), // 500 milliseconds delay
        []
    );

    // Handle search input changes
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        debouncedSetSearch(e.target.value);
    };

  //  Create query
  const myQuery = api.image.getImages.useInfiniteQuery(
    { limit: 12, search: debouncedSearch },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );

  if (myQuery.isError)
    return <div className={"p-4 text-white"}>Error: Could not Load Images</div>;

  function closeAndOutput(url: string) {
    propCloseHandler();
    console.log(url);
  }

  return (
    <>
      {/* Search component */}
      <div className="relative min-h-[70%] border-b border-n-3 dark:border-n-6">
        <div className="group absolute left-10 top-7 outline-none md:hidden">
          <Icon
            className="h-8 w-8 fill-n-4/50 transition-colors group-hover:fill-n-7 dark:group-hover:fill-n-3"
            name="search-1"
          />
        </div>
        <input
          className="h5 h-22 w-full border-none bg-transparent pl-24 pr-5 text-n-7 outline-none placeholder:text-n-4/50 dark:text-n-1 md:h-18 md:pl-18"
          type="text"
          name="search"
          placeholder="Search"
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      <div className="px-10 pt-5 md:px-6">
        <div className="mb-5 flex md:mb-0 md:block md:space-y-4"></div>
      </div>

      {/* Infinite scroll component */}
      <div className="flex max-h-[80vh] w-full">
        <div className="mx-5 mb-6 flex w-full flex-col overflow-y-scroll rounded-lg bg-n-5/50 pt-3">
          {myQuery.isLoading && (
            <div className="flex items-center justify-center">
              <div
                className="flex h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!-m-px flex !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            </div>
          )}
          {!myQuery.isLoading &&
            myQuery.data!.pages.map((page, index) => (
              <div
                className="mb-2 min-w-[100%] columns-3 gap-2 space-y-2 px-3 lg:columns-2 md:columns-1"
                key={index}
              >
                {page.images.map((url) => (
                  <div className="flex h-min w-full justify-center">
                    <img
                      className="rounded-md object-cover hover:cursor-pointer hover:border-2 hover:border-sky-500 active:border-4 active:border-sky-500"
                      src={url}
                      alt="image"
                      key={url}
                      onDoubleClick={() => closeAndOutput(url)}
                    />
                  </div>
                ))}
              </div>
            ))}

          {myQuery.hasNextPage && (
            <div className="flex items-center justify-center">
              <InView onChange={() => myQuery.fetchNextPage()}>
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
    </>
  );
};

export default PullingImages;
