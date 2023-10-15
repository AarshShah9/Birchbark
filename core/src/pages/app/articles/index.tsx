import { NextPage } from "next";
import Link from "next/link";
import { api } from "~/utils/api";
import React from "react";
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

export default WikiMain;
