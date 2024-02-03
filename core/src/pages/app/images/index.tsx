import type { NextPage } from "next";
import Layout from "~/components/Layout";
import React from "react";
import ImageLibrary from "~/customComponents/ImageGallery";

const Index: NextPage = () => {
  return (
    <Layout>
      <ImageLibrary />
    </Layout>
  );
};

export default Index;
