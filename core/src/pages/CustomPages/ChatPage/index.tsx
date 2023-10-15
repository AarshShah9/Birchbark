import React from "react";
import Layout from "~/components/Layout";
import { useUser } from "@clerk/nextjs";
import "@sendbird/uikit-react/dist/index.css";
import { useColorMode } from "@chakra-ui/color-mode";
import dynamic from "next/dynamic";
import styled from "styled-components";
import { env } from "~/env.mjs";
import PullingImages from "../../../customComponents/Chats/infinite-scroll";
import ChatModal from "../../../customComponents/Chats/chat-modal";

const ChatsPage: React.FC = () => {
  const user = useUser();
  const { colorMode } = useColorMode();
  const isLightMode = colorMode === "light";

  const SendbirdApp = dynamic(() => import("@sendbird/uikit-react/App"), {
    ssr: false,
  });

  const StyledSendbirdApp = styled(SendbirdApp)``;

  const [visibleSearch, setVisibleSearch] = React.useState<boolean>(false);

  return (
    <>
      <Layout>
        <div className={"h-screen rounded-2xl p-2"}>
          <StyledSendbirdApp
            appId={env.NEXT_PUBLIC_SENDBIRD_APPID}
            userId={user?.user?.id ?? "null"}
            theme={colorMode}
          />
        </div>
        <button onClick={() => setVisibleSearch(true)}>Search</button>
      </Layout>
      <PullingImages
        visibleSearch={visibleSearch}
        setVisibleSearch={setVisibleSearch}
      />
    </>
  );
};

export default ChatsPage;
