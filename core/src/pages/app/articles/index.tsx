import { NextPage } from "next";
import Link from "next/link";
import { api } from "~/utils/api";
import React, { FormEvent } from "react";
import Layout from "~/components/Layout";
import Icon from "~/components/Icon";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const WikiMain: NextPage = () => {
  const { data: categories, error } = api.wiki.getCategories.useQuery();

  if (error) return <div>Error: {error.message}</div>;
  if (!categories)
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );

  const tempCategories = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <Layout>
      <div className="relative flex h-[95vh] w-full overflow-auto bg-white font-inter text-[#141718]">
        <div className="fixed right-14 top-14 flex w-[20%] rounded-md border-[1px] border-black bg-white hover:shadow-md">
          <input className="w-full rounded-md border-none bg-white p-4 focus:border-none" />
          <div className="group m-2 outline-none hover:cursor-pointer md:hidden">
            <Icon
              className="h-full w-10 fill-black transition-colors group-hover:fill-n-4"
              name="search-1"
            />
          </div>
        </div>
        <div className="flex w-full flex-col items-center">
          <div className="mx-8 flex w-auto flex-col">
            <div className="mb-8 mt-24 flex w-full flex-col">
              <h1 className="flex justify-center text-center text-4xl font-bold">
                Categories
              </h1>
              <h2 className="flex justify-center text-center text-2xl text-[#6C7275]">
                View Articles based on Categories
              </h2>
            </div>
            <ul className="grid w-auto grid-cols-2 gap-6 text-center md:grid-cols-1">
              {/* {categories.map((category) => {
                    console.log(category);
                    return (
                    <li key={category.id}>
                        <Link href={`/app/articles/category?categoryId=${category.id}`}>
                        {category.name}
                        </Link>
                    </li>
                    );
                })} */}
              {tempCategories.map((num) => (
                <li className="flex justify-center">
                  <Link href={`/app/articles/category?categoryId=${num}`}>
                    <motion.div
                      whileHover={{
                        //   boxShadow: "0px 0px 15px rgb(76, 169, 238)",
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
                        className="h-full w-10 fill-black transition-colors group-hover:fill-n-4"
                        name="search-1"
                      />
                      <h1 className="text-2xl font-semibold">Category {num}</h1>
                      <div className="pl-[8vw] xl:pl-6">
                        <BsArrowRight size={40} />
                      </div>
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const SearchArticles: React.FC = () => {
  // Replace with the appropriate tRPC hook
  const searchVal = "test";
  const { data, error, isLoading } = api.wiki.searchArticlesByTitle.useQuery({
    title: searchVal,
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Trigger the tRPC query with the input title
    // You may need to adjust this based on your tRPC hooks setup
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Search articles by title..." />
        <button type="submit">Search</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <ul>
          {data.map((article) => (
            <li key={article.id}>{article.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WikiMain;
