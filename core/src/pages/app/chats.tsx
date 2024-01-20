import React from "react";
import ChatPage from "../CustomPages/ChatPage";
import Layout from "~/components/Layout";

const chats: React.FC = () => {
  return (
    <Layout>
      <ChatPage />
    </Layout>
  );
};

export default chats;
