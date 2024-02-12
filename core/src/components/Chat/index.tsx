import React, { useState } from "react";
import Icon from "@/components/Icon";
import ModalShareChat from "@/components/ModalShareChat";
import Actions from "./Actions";

type ChatProps = {
  title: string;
  children: React.ReactNode;
};

const Chat = ({ title, children }: ChatProps) => {
  const [favorite, setFavorite] = useState<boolean>(false);
  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  return (
    <>
      <div className="flex min-h-[4.5rem] items-center border-b border-n-3 px-10 py-3 shadow-[0_0.75rem_2.5rem_-0.75rem_rgba(0,0,0,0.06)] dark:border-n-5 dark:shadow-[0_0.75rem_2.5rem_-0.75rem_rgba(0,0,0,0.15)] 2xl:px-6 lg:-mt-18 lg:pr-20 md:pl-5 md:pr-18">
        <div className="h5 mr-auto truncate md:h6">{title}</div>
        <div className="ml-6 flex items-center">
          <button
            className="group h-8 w-8 md:hidden"
            onClick={() => setFavorite(!favorite)}
          >
            <Icon
              className={`${
                favorite
                  ? "fill-accent-5"
                  : "fill-n-4 transition-colors group-hover:fill-accent-5"
              }`}
              name={favorite ? "star-fill" : "star"}
            />
          </button>
          <button
            className="group ml-6 h-8 w-8 md:ml-3 md:hidden"
            onClick={() => setVisibleModal(true)}
          >
            <Icon
              className="fill-n-4 transition-colors group-hover:fill-primary-1"
              name="share"
            />
          </button>
          <Actions />
        </div>
      </div>
      <div className="scrollbar-none relative z-2 grow space-y-10 overflow-y-auto scroll-smooth p-10 2xl:p-6 md:p-5">
        {children}
      </div>
      <ModalShareChat
        visible={visibleModal}
        onClose={() => setVisibleModal(false)}
      />
    </>
  );
};

export default Chat;
