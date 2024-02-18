import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import { api } from "~/utils/api";
import Icon from "~/components/Icon";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Loading from "~/customComponents/Loading";
import SearchArticles from "~/customComponents/ArticleComponents/search";

const CategoryPage: NextPage = () => {
  const router = useRouter();
  const categoryId = router.query.categoryId;

  const { data: articles, error } = api.wiki.getArticlesByCategory.useQuery(
    { id: Number(categoryId) },
    {
      enabled: !!categoryId,
    }
  );

  if (error) return <div>Error: {error.message}</div>;
  if (!articles)
    // This ensures the query doesn't run until categoryId is defined
    return <Loading />;

  return (
    <>
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
        <div className="flex w-full flex-col items-center">
          <div className="mx-8 flex w-auto flex-col">
            <div className="mb-8 mt-28 flex w-full flex-col items-center">
              <h1 className="flex max-w-md justify-center text-center text-4xl font-bold">
                Articles in this Category
              </h1>
            </div>
            <ul className="mb-10 grid w-auto grid-cols-2 gap-6 text-center md:grid-cols-1">
              {articles.map((article) => (
                <li className="flex justify-center" key={article.id}>
                  <Link href={`/app/articles/article?id=${article.id}`}>
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
                        className="h-full w-8 fill-black transition-colors group-hover:fill-n-4"
                        name="search-1"
                      />
                      <h1 className="text-xl font-semibold">{article.title}</h1>
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
    </>
  );
};

export default CategoryPage;
