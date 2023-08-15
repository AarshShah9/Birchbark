import { useState } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { toast } from "react-hot-toast";
import Icon from "@/components/Icon";
import ModalShareChat from "@/components/ModalShareChat";
import Notify from "@/components/Notify";
import Notifications from "./Notifications";
import ChatItem from "./ChatItem";
import ChatEmpty from "./ChatEmpty";

import { notifications } from "@/mocks/notifications";
import { chatHistory } from "@/mocks/chatHistory";
import { UserButton } from "@clerk/nextjs";

type RightSidebarProps = {
  className?: string;
  visible?: boolean;
};

const RightSidebar = ({ className, visible }: RightSidebarProps) => {
  const [clean, setClean] = useState<boolean>(false);
  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  const handleClickClear = (t: any) => {
    setClean(true);
    toast.dismiss(t.id);
  };

  return (
    <>
      <div
        className={twMerge(
          `absolute bottom-0 right-0 top-0 flex w-[22.5rem] flex-col rounded-r-[1.25rem] border-l border-n-3 bg-n-1 pb-24 pt-[8rem] shadow-[inset_0_1.5rem_3.75rem_rgba(0,0,0,0.1)] dark:border-n-5 dark:bg-n-6 2xl:w-80 lg:invisible lg:z-20 lg:rounded-[1.25rem] lg:border-l-0 lg:opacity-0 lg:shadow-2xl lg:transition-opacity md:fixed md:w-[calc(100%-4rem)] md:rounded-none md:border-l ${
            visible && "lg:visible lg:opacity-100"
          } ${className}`
        )}
      >
        <div className="absolute left-0 right-0 top-0 flex h-18 items-center justify-end border-b border-n-3 px-9 dark:border-n-5 lg:pr-18 md:pr-16">
          <Notifications items={notifications} />
          {/*<Profile />*/}
          <div className="relative z-10 mr-8 lg:mr-6 md:static">
            <UserButton afterSignOutUrl="/" />
          </div>
          <button
            className="btn-dark btn-medium"
            onClick={() => setVisibleModal(true)}
          >
            Download
          </button>
        </div>
        <div className="absolute left-0 right-0 top-24 flex items-center px-9 md:px-6">
          <div className="base2 text-n-4/75">Chat history</div>
          <div className="caption1 ml-3 rounded-lg bg-n-3 px-2 text-n-4 dark:bg-n-5/50">
            {clean ? "0" : "1/100"}
          </div>
          {!clean && (
            <button
              className="group relative ml-auto text-0"
              onClick={() =>
                toast((t) => (
                  <Notify
                    className="md:flex-col md:items-center md:px-10"
                    iconDelete
                  >
                    <div className="h6 ml-3 mr-6 md:mx-0 md:my-2">
                      Clear all chat history?
                    </div>
                    <div className="flex justify-center">
                      <button
                        className="btn-stroke-light btn-medium md:min-w-[6rem]"
                        onClick={() => toast.dismiss(t.id)}
                      >
                        Cancel
                      </button>
                      <button
                        className="btn-blue btn-medium ml-3 md:min-w-[6rem]"
                        onClick={() => handleClickClear(t)}
                      >
                        Yes
                      </button>
                    </div>
                  </Notify>
                ))
              }
            >
              <Icon
                className="h-5 w-5 fill-n-4 transition-colors group-hover:fill-accent-1"
                name="trash"
              />
              <div className="caption1 pointer-events-none invisible absolute right-full top-1/2 mr-2 min-w-[8rem] -translate-y-1/2 rounded-lg bg-n-7 px-2 py-1 text-n-1 opacity-0 transition-opacity after:absolute after:left-full after:top-1/2 after:h-0 after:w-0 after:-translate-y-1/2 after:border-b-4 after:border-l-4 after:border-r-4 after:border-t-4 after:border-b-transparent after:border-l-n-7 after:border-r-transparent after:border-t-transparent group-hover:visible group-hover:opacity-100 lg:hidden">
                Clear chat history
              </div>
            </button>
          )}
        </div>
        <div className="grow overflow-y-auto scroll-smooth px-6 md:px-3">
          {clean ? (
            <ChatEmpty />
          ) : (
            chatHistory.map((x) => <ChatItem item={x} key={x.id} />)
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <Link className="btn-blue w-full" href="/">
            <Icon name="plus" />
            <span>New chat</span>
          </Link>
        </div>
      </div>
      <ModalShareChat
        visible={visibleModal}
        onClose={() => setVisibleModal(false)}
      />
    </>
  );
};

export default RightSidebar;
