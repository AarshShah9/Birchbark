import Link from "next/link";
import { api } from "~/utils/api";
import React from "react";
import Icon from "~/components/Icon";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Loading from "~/customComponents/Loading";
import SearchArticles from "~/customComponents/ArticleComponents/search";

const WikiMain = () => {
  const { data: categories, error } = api.wiki.getCategories.useQuery();

  if (error) return <div>Error: {error.message}</div>;
  if (!categories) return <Loading />;

  return (
    <div
      className={`flex h-[100vh] w-full overflow-auto bg-white font-inter text-[#141718]`}
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
                <Link href={`/wiki/category?categoryId=${category.id}`}>
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

export default WikiMain;
