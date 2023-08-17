import { useState } from "react";
import Message from "@/components/Message";
import Menu from "@/components/Menu";

import { navigation } from "@/constants/navigation";

type MainProps = Record<string, never>;

const Main = ({}: MainProps) => {
  const [message, setMessage] = useState<string>("");

  return (
    <>
      <div className="scrollbar-none grow overflow-y-auto scroll-smooth px-10 py-20 2xl:py-12 md:px-4 md:pb-6 md:pt-0">
        <div className="mb-10 text-center">
          <div className="h3 leading-[4rem] 2xl:h4 2xl:mb-2">
            Unlock the power of AI
          </div>
          <div className="body1 text-n-4 2xl:body1S">
            Chat with the smartest AI - Experience the power of AI with us
          </div>
        </div>
        <Menu className="mx-auto max-w-[30.75rem]" items={navigation} />
      </div>
      <Message
        value={message}
        onChange={(e: any) => setMessage(e.target.value)}
      />
    </>
  );
};

export default Main;
