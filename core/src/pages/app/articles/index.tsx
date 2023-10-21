import { NextPage } from "next";
import Link from "next/link";
import { api } from "~/utils/api";
import React, { FormEvent } from "react";
import Layout from "~/components/Layout";

const WikiMain: NextPage = () => {
  const { data: categories, error } = api.wiki.getCategories.useQuery();

  if (error) return <div>Error: {error.message}</div>;
  if (!categories)
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );

  return (
    <Layout>
      <div>
        <h1>Categories</h1>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <Link href={`/app/articles/category?categoryId=${category.id}`}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
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
