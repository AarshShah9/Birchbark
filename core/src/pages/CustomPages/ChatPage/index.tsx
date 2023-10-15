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
        <button onClick={() => setVisibleSearch(true)}>Hello</button>
      </Layout>
      <ChatModal
        className="md:!p-0"
        classWrap="md:min-h-screen-ios dark:shadow-[inset_0_0_0_0.0625rem_#232627,0_2rem_4rem_-1rem_rgba(0,0,0,0.33)] dark:md:shadow-none"
        classButtonClose="hidden md:flex md:absolute md:top-6 md:left-6 dark:fill-n-1"
        classOverlay="md:bg-n-1"
        visible={visibleSearch}
        onClose={() => setVisibleSearch(false)}
      >
        <PullingImages />
      </ChatModal>
    </>
  );
};

export default ChatsPage;
