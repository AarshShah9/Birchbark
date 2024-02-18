import Link from "next/link";
import { api } from "~/utils/api";
import React, { FormEvent } from "react";
import Icon from "~/components/Icon";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Loading from "~/customComponents/Loading";

const WikiMain = (props: { patient: boolean }) => {
  const { data: categories, error } = api.wiki.getCategories.useQuery();

  if (error) return <div>Error: {error.message}</div>;
  if (!categories) return <Loading />;

  return (
    <div
      className={`flex w-full overflow-auto bg-white font-inter text-[#141718] ${
        props.patient ? "h-[100vh]" : "h-[95vh]"
      }`}
    >
      <SearchArticles />
      <div className="flex w-full flex-col items-center">
        <div className="mx-8 flex w-auto flex-col">
          <div className="mb-8 mt-28 flex w-full flex-col">
            <h1 className="flex justify-center text-center text-4xl font-bold">
              Categories
            </h1>
            <h2 className="flex justify-center text-center text-xl text-[#6C7275]">
              View Articles based on Categories
            </h2>
          </div>
          <ul className="mb-10 grid w-auto grid-cols-2 gap-6 text-center md:grid-cols-1">
            {categories.map((category) => (
              <li className="flex justify-center" key={category.id}>
                <Link href={`"/app/articles?categoryId=${category.id}`}>
                  <motion.div
                    whileHover={{
                      scale: [null, 1.05, 1.03],
                      transition: { duration: 0.5 },
                    }}
                    whileTap={{
                      scale: 0.95,
                      transition: { duration: 0.75 },
                    }}
                    className="flex flex-row items-center space-x-4 rounded-lg border-2 p-4 hover:shadow-md hover:shadow-[#4CA9EE]"
                  >
                    <Icon
                      className="h-full w-8 fill-black transition-colors group-hover:fill-n-4"
                      name="search-1"
                    />
                    <h1 className="text-xl font-semibold">{category.name}</h1>
                    <div className="pl-[8vw] xl:pl-6">
                      <BsArrowRight size={30} />
                    </div>
                  </motion.div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

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
                href={`/app/articles/article?id=${article.id}`}
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

export default WikiMain;
