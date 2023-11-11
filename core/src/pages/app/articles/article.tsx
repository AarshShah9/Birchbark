import { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "~/components/Layout";
import { api } from "~/utils/api";
import React, { FormEvent } from "react";
import Icon from "~/components/Icon";
import { motion } from "framer-motion";
import { BsArrowLeft } from "react-icons/bs";

const article: NextPage = () => {
  const router = useRouter();
  const articleId = router.query.id;

  const { data: contentBlocks, error } = api.wiki.getArticleContent.useQuery(
    { id: Number(articleId) },
    {
      // This ensures the query doesn't run until articleId is defined
      enabled: !!articleId,
    }
  );

  if (error) return <div>Error: {error.message}</div>;
  if (!contentBlocks)
    return (
      <Layout>
        <div className="flex h-full items-center justify-center">
          <div
            className="flex h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!-m-px flex !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      </Layout>
    );

  return (
    <Layout>
      <div className="relative flex h-[95vh] w-full overflow-auto bg-white font-inter text-[#141718]">
        <SearchArticles />
        <motion.div
          whileHover={{
            scale: [null, 1.03, 1.02],
            transition: { duration: 0.5 },
          }}
          whileTap={{
            scale: 0.98,
            transition: { duration: 0.75 },
          }}
          className="fixed left-96 top-14 z-10 flex h-14 w-14 rounded-md border-[1px] border-black bg-white hover:shadow-lg xl:left-32 md:left-9 md:top-9 md:h-9 md:w-9"
        >
          <a
            className="flex h-full w-full items-center justify-center"
            href={`/app/articles/`}
          >
            <BsArrowLeft className="flex h-[85%] w-[85%]" />
          </a>
        </motion.div>
        <div className="m-30 lg:m-24 md:m-9 md:mt-20">
          <header className="flex justify-start">
            <h1 className="text-4xl font-bold">Article Title</h1>
            <div className="ml-4 flex items-center">
              <Icon
                className="h-8 w-8 fill-black transition-colors group-hover:fill-n-4 md:h-6 md:w-6"
                name="edit"
              />
              <Icon
                className="h-8 w-8 fill-black transition-colors group-hover:fill-n-4 md:h-6 md:w-6"
                name="delete"
              />
            </div>
          </header>
          <div className="my-4 border-t border-black"></div>
          {contentBlocks.map((block) => {
            switch (block.type) {
              case "TEXT":
                return <p key={block.id}>{block.content}</p>;
              case "IMAGE":
                return <img key={block.id} src={block.content} alt="" />;
              case "VIDEO":
                return (
                  <iframe
                    key={block.id}
                    src={`https://www.youtube.com/embed/${block.content}`}
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
    </Layout>
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

    // Trigger the tRPC query with the input title
    // You may need to adjust this based on your tRPC hooks setup
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
      {isLoading && <p>Loading...</p>}
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

export default article;
