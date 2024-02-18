import { NextPage } from "next";
import React from "react";
import Layout from "~/components/Layout";
import CategoryMain from "~/customComponents/ArticleComponents/categoryMain";

const CategoryPage: NextPage = () => {
  return (
    <Layout>
      <CategoryMain />
    </Layout>
  );
};

export default CategoryPage;
