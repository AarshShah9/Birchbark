import WikiMain from "~/pages/app/articles/wikiMain";
import Layout from "~/components/Layout";
import type { NextPage } from "next";

const Wiki: NextPage = () => {
  return (
    <Layout>
      <WikiMain />
    </Layout>
  );
};

export default Wiki;
