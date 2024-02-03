import React from "react";
import Layout from "~/components/Layout";
import { useUser } from "@clerk/nextjs";
import "@sendbird/uikit-react/dist/index.css";
import { useColorMode } from "@chakra-ui/color-mode";
import dynamic from "next/dynamic";
import styled from "styled-components";
import { env } from "~/env.mjs";
import PullingImages from "../../../customComponents/Chats/chat-infinite-scroll";
import ChatModal from "../../../customComponents/Chats/chat-modal";

const ChatsPage: React.FC = () => {
  const user = useUser();
  const { colorMode } = useColorMode();
  const isLightMode = colorMode === "light";

  const SendbirdApp = dynamic(() => import("@sendbird/uikit-react/App"), {
    ssr: false,
  });

  const StyledSendbirdApp = styled(SendbirdApp)``;

  return (
    <div className={"h-screen rounded-2xl p-2"}>
      <StyledSendbirdApp
        appId={env.NEXT_PUBLIC_SENDBIRD_APPID}
        userId={user?.user?.id ?? "null"}
        theme={colorMode}
      />
      <PullingImages />
    </div>
  );
};

export default ChatsPage;
