import { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "~/components/Layout";
import { api } from "~/utils/api";
import React from "react";

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
      <div>
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
    </Layout>
  );
};

export default article;