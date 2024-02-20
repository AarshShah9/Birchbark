import React, { FormEvent } from "react";
import { api } from "~/utils/api";
import Icon from "~/components/Icon";

const SearchArticles: React.FC = () => {
  // Replace with the appropriate tRPC hook
  const [searchVal, setSearchVal] = React.useState("");
  const [currentSearch, setSearch] = React.useState(searchVal);
  const { data, error, isLoading } = api.wiki.searchArticlesByTitle.useQuery({
    title: searchVal,
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchVal(currentSearch);
  };

  return (
    <div className="fixed right-14 z-10 m-10 flex w-80 flex-col bg-white">
      <form onSubmit={onSubmit}>
        <div className="flex w-full rounded-md rounded-b-none border-[1px] border-gray-200 hover:shadow-md md:h-9">
          <input
            className="z-100 w-full rounded-md rounded-b-none bg-white p-4 pr-14 focus:outline-none md:pr-10"
            placeholder="Search for an article..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="group fixed right-24 m-2 outline-none hover:cursor-pointer md:m-0"
          >
            <Icon
              className="h-full w-10 fill-gray-600 transition-colors group-hover:fill-n-4 md:h-8 md:w-8"
              name="search-1"
            />
          </button>
        </div>
      </form>
      {isLoading && (
        <p className="border-[1px] border-gray-200 px-4">Loading...</p>
      )}
      {error && <p>Error: {error.message}</p>}
      {data && searchVal != "" && (
        <ul className="flex w-full justify-start border-[1px] border-gray-200">
          {data.map((article) => (
            <li
              className="flex max-h-18 w-full justify-start text-ellipsis hover:shadow-md"
              key={article.id}
            >
              <a
                className="mx-4 flex w-full flex-col text-ellipsis"
                href={`/wiki/article?id=${article.id}`}
              >
                <p className="truncate">{article.title}</p>
                <p className="truncate text-[#6C7275]">{article.description}</p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchArticles;
