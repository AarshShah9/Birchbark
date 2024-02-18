import WikiMain from "~/customComponents/ArticleComponents/wikiMain";
import Layout from "~/components/Layout";
import type { NextPage } from "next";

const Wiki: NextPage = () => {
  return (
    <Layout>
      <WikiMain patient={false} />
    </Layout>
  );
};

export default Wiki;
