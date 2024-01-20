import type { NextPage } from "next";
import React, { useCallback, useState } from "react";
import _ from "lodash";
import { api } from "~/utils/api";
import Icon from "~/components/Icon";
import { InView } from "react-intersection-observer";
const ImageLibrary = () => {
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");

  const [copied, setCopied] = useState(false);

  // Debounce function to delay the search
  const debouncedSetSearch = useCallback(
    _.debounce((value) => {
      setDebouncedSearch(value);
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

  const copy = async (url: string) => {
    try {
      const response = await fetch(url);
      const blobData = await response.blob();
      let clipboardItemInput;

      if (blobData.type === "image/jpeg") {
        // Convert JPEG to PNG
        const pngBlob = await convertToPNG(blobData);
        clipboardItemInput = new ClipboardItem({ "image/png": pngBlob });
      } else {
        clipboardItemInput = new ClipboardItem({ [blobData.type]: blobData });
      }

      await navigator.clipboard.write([clipboardItemInput]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.log(e);
    }
  };

  // Function to convert blob to PNG
  const convertToPNG = (blob: Blob): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = URL.createObjectURL(blob);
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          canvas.toBlob((resultBlob) => {
            if (resultBlob) {
              resolve(resultBlob);
            } else {
              reject(new Error("Failed to convert image to PNG"));
            }
          }, "image/png");
        } else {
          reject(new Error("Failed to get canvas context"));
        }
      };
      img.onerror = () => reject(new Error("Image loading error"));
    });
  };

  return (
    <>
      {/* Search component */}
      <div className="relative min-h-[10%] border-b border-n-3 dark:border-n-6">
        <div className="group absolute left-10 top-7 outline-none md:hidden">
          <Icon
            className="h-8 w-8 fill-n-4/50 transition-colors group-hover:fill-n-7 dark:group-hover:fill-n-3"
            name="search-1"
          />
        </div>
        <input
          className="h5 h-22 w-full border-none bg-transparent pl-24 pr-5 text-n-7 text-white outline-none placeholder:text-n-4/50 dark:text-n-1 md:h-18 md:pl-18"
          type="text"
          name="search"
          placeholder="Search Images"
          autoComplete="disabled"
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
                      onClick={() => copy(url)}
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
      {copied && (
        <div className="absolute right-5 top-5 z-10 rounded-md bg-green-500 p-2 text-white">
          Copied To Clipboard
        </div>
      )}
    </>
  );
};

export default ImageLibrary;
