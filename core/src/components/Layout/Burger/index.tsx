import { useState, useEffect } from "react";
import MediaQuery from "react-responsive";

type BurgerProps = {
  className?: string;
  onClick: () => void;
  visibleRightSidebar: boolean;
};

const Burger = ({ className, onClick, visibleRightSidebar }: BurgerProps) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <MediaQuery maxWidth={1023}>
      <button
        className={`relative z-[25] my-5 ml-auto mr-6 flex h-8 w-8 shrink-0 flex-col items-center justify-center tap-highlight-color md:absolute md:right-4 md:top-5 md:m-0 ${
          visibleRightSidebar && "md:!fixed"
        } ${className}`}
        onClick={onClick}
      >
        <span
          className={`my-0.5 h-0.5 w-5 rounded-full bg-n-7 transition-all dark:bg-n-4 ${
            visibleRightSidebar && "translate-y-0.75 rotate-45"
          }`}
        ></span>
        <span
          className={`my-0.5 h-0.5 w-5 rounded-full bg-n-7 transition-all dark:bg-n-4 ${
            visibleRightSidebar && "-translate-y-0.75 -rotate-45"
          }`}
        ></span>
      </button>
    </MediaQuery>
  ) : null;
};

export default Burger;
