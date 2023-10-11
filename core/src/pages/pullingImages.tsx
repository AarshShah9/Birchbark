import { NextPage } from "next";
import { api } from "~/utils/api";

const pullingImages: NextPage = () => {
  const myQuery = api.image.getImages.useInfiniteQuery(
    { limit: 5, search: "" },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );
  if (myQuery.isLoading) return <div className={"text-white"}>Loading...</div>;

  return (
    <div>
      {myQuery.data!.pages.map((page, index) => (
        <div key={index}>
          {page.images.map((url) => (
            <img src={url} alt="" key={url} />
          ))}
        </div>
      ))}
      {myQuery.hasNextPage && (
        <button
          className={"text-white"}
          onClick={() => myQuery.fetchNextPage()}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default pullingImages;
