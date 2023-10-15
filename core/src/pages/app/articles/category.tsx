import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import { api } from "~/utils/api";
import Layout from "~/components/Layout";

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
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );

  return (
    <Layout>
      <div>
        <h1>Articles in this Category</h1>
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <Link href={`/app/article?id=${article.id}`}>
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default CategoryPage;
