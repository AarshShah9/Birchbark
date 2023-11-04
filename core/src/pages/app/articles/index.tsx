import { NextPage } from "next";
import Link from "next/link";
import { api } from "~/utils/api";
import React, { FormEvent } from "react";
import Layout from "~/components/Layout";
import Icon from "~/components/Icon";
import { BsArrowRight } from "react-icons/bs";
import { number } from "prop-types";

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
        <div className="fixed right-14 top-14 flex w-[20%] rounded-md border-[1px] border-black bg-white">
          <input className="w-full rounded-md border-none bg-white p-4 focus:border-none" />
          <div className="group m-2 outline-none md:hidden">
            <Icon
              className="h-full w-10 fill-black transition-colors group-hover:fill-n-4"
              name="search-1"
            />
          </div>
        </div>
        <div className="mx-10 flex w-full flex-col">
          <div className="mb-8 mt-24 flex w-full flex-col">
            <h1 className="flex justify-center text-center text-4xl font-bold">
              Categories
            </h1>
            <h2 className="flex justify-center text-center text-2xl text-[#6C7275]">
              View Articles based on Categories
            </h2>
          </div>
          <ul className="grid grid-cols-2 gap-4 text-center md:grid-cols-1">
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
                  <div className="flex flex-row items-center space-x-4 rounded-lg border-2 p-4">
                    <Icon
                      className="h-full w-10 fill-black transition-colors group-hover:fill-n-4"
                      name="search-1"
                    />
                    <h1 className="text-2xl font-semibold">Category {num}</h1>
                    <div className="pl-[10vw]">
                      <BsArrowRight size={40} />
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
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
