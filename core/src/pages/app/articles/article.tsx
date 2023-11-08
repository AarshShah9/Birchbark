import { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "~/components/Layout";
import { api } from "~/utils/api";
import React from "react";
import Icon from "~/components/Icon";
import { motion } from "framer-motion";

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
        <div>Loading...</div>
      </Layout>
    );

  return (
    <Layout>
      <div className="relative flex h-[95vh] w-full overflow-auto bg-white font-inter text-[#141718]">
        <div className="fixed right-14 top-14 z-10 flex w-[20%] rounded-md border-[1px] border-black bg-white hover:shadow-md md:top-9 md:h-9 md:w-44">
          <input className="w-full rounded-md bg-white p-4 pr-14 md:pr-10" />
          <div className="group fixed right-14 m-2 outline-none hover:cursor-pointer md:m-0">
            <Icon
              className="h-full w-10 fill-black transition-colors group-hover:fill-n-4 md:h-8 md:w-8"
              name="search-1"
            />
          </div>
        </div>
        <div className="fixed left-96 top-14 z-10 flex h-14 w-14 rounded-md border-[1px] border-black bg-white hover:shadow-md xl:left-32 md:left-9 md:top-9 md:h-9 md:w-9">
          <a className="h-full w-full" href={`/app/articles/`}></a>
        </div>
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

export default article;
