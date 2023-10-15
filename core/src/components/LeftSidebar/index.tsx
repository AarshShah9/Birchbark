import React, { useEffect, useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Logo from "@/components/Logo";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";
import Search from "@/components/Search";
import Settings from "@/components/Settings";
import Navigation from "./Navigation";
import { resultSearch } from "@/mocks/resultSearch";
import { settings } from "@/constants/settings";
import { twMerge } from "tailwind-merge";
import { UserButton } from "@clerk/nextjs";

type LeftSidebarProps = {
  value: boolean;
  setValue?: any;
  smallSidebar?: boolean;
  visibleRightSidebar?: boolean;
};

const LeftSidebar = ({
  value,
  setValue,
  smallSidebar,
  visibleRightSidebar,
}: LeftSidebarProps) => {
  const [visibleSearch, setVisibleSearch] = useState<boolean>(false);
  const [visibleSettings, setVisibleSettings] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("keydown", handleWindowKeyDown);
    return () => {
      window.removeEventListener("keydown", handleWindowKeyDown);
    };
  }, []);

  const handleWindowKeyDown = (event: any) => {
    if (event.metaKey && event.key === "f") {
      event.preventDefault();
      setVisibleSearch(true);
    }
  };

  const navigation = [
    {
      title: "Calendar",
      icon: "calendar",
      color: "fill-accent-2",
      url: "/app/calendar",
    },
    {
      title: "Chats",
      icon: "chat",
      color: "fill-accent-4",
      url: "/app/chats",
    },
    {
      title: "Images",
      icon: "image",
      color: "fill-accent-1",
      url: "/app/images",
    },
    {
      title: "Wiki",
      icon: "container",
      color: "fill-accent-5",
      url: "/app/articles",
    },
    {
      title: "Search",
      icon: "search",
      color: "fill-primary-2",
      onClick: () => setVisibleSearch(true),
    },

    {
      title: "Settings",
      icon: "settings",
      color: "fill-accent-3",
      onClick: () => setVisibleSettings(true),
    },
  ];

  const handleClick = () => {
    setValue(!value);
    smallSidebar && value ? disablePageScroll() : enablePageScroll();
  };

  return (
    <>
      <div
        className={twMerge(
          `fixed bottom-0 left-0 top-0 z-20 flex flex-col bg-n-7 px-4 pt-30 md:invisible md:opacity-0 md:transition-opacity ${
            value ? "w-24 pb-38 md:w-16 md:px-0 md:pb-30" : "w-80 pb-58"
          } ${visibleRightSidebar && "md:visible md:opacity-100"}`
        )}
      >
        <div
          className={`absolute left-0 right-0 top-0 flex h-30 items-center pl-7 pr-6 ${
            value ? "justify-center md:px-4" : "justify-between"
          }`}
        >
          {!value && <Logo />}
          <button className="group tap-highlight-color" onClick={handleClick}>
            <Icon
              className="fill-n-4 transition-colors group-hover:fill-n-3"
              name={value ? "toggle-on" : "toggle-off"}
            />
          </button>
        </div>
        <div className="scrollbar-none grow scroll-smooth">
          <Navigation visible={value} items={navigation} />
          <div
            className={`my-4 h-0.25 bg-n-6 ${
              value ? "-mx-4 md:mx-0" : "-mx-2 md:mx-0"
            }`}
          ></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-n-7 px-4 pb-6 before:pointer-events-none before:absolute before:bottom-full before:left-0 before:right-0 before:h-10 before:bg-gradient-to-t before:from-[#131617] before:to-[rgba(19,22,23,0)] md:px-3">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
      <Modal
        className="md:!p-0"
        classWrap="md:min-h-screen-ios md:rounded-none dark:shadow-[inset_0_0_0_0.0625rem_#232627,0_2rem_4rem_-1rem_rgba(0,0,0,0.33)] dark:md:shadow-none"
        classButtonClose="hidden md:flex md:absolute md:top-6 md:left-6 dark:fill-n-1"
        classOverlay="md:bg-n-1"
        visible={visibleSearch}
        onClose={() => setVisibleSearch(false)}
      >
        <Search items={resultSearch} />
      </Modal>
      <Modal
        className="md:!p-0"
        classWrap="max-w-[48rem] md:min-h-screen-ios md:rounded-none"
        classButtonClose="hidden md:block md:absolute md:top-5 md:right-5 dark:fill-n-4"
        classOverlay="md:bg-n-1"
        visible={visibleSettings}
        onClose={() => setVisibleSettings(false)}
      >
        <Settings items={settings} />
      </Modal>
    </>
  );
};

export default LeftSidebar;
