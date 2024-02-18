import { NextPage } from "next";
import React from "react";
import ArticleMain from "~/customComponents/ArticleComponents/articleMain";
import Layout from "~/components/Layout";

const article: NextPage = () => {
  return (
    <Layout>
      <ArticleMain />
    </Layout>
  );
};

export default article;
