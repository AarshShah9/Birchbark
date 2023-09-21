import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { clearQueueScrollLocks, enablePageScroll } from "scroll-lock";
import Head from "next/head";
import { useMediaQuery } from "react-responsive";
import LeftSidebar from "@/components/LeftSidebar";

type LayoutProps = {
  smallSidebar?: boolean;
  hideRightSidebar?: boolean;
  backUrl?: string;
  children: React.ReactNode;
};

const Layout = ({
  smallSidebar,
  hideRightSidebar,
  backUrl,
  children,
}: LayoutProps) => {
  const [visibleSidebar, setVisibleSidebar] = useState<any>(
    smallSidebar || false
  );
  const [visibleRightSidebar, setVisibleRightSidebar] =
    useState<boolean>(false);

  const isDesktop = useMediaQuery({
    query: "(max-width: 1179px)",
  });

  const handleClickOverlay = () => {
    setVisibleSidebar(true);
    setVisibleRightSidebar(false);
    clearQueueScrollLocks();
    enablePageScroll();
  };

  useEffect(() => {
    setVisibleSidebar(smallSidebar || isDesktop);
  }, [isDesktop, smallSidebar]);

  return (
    <>
      <Head>
        <title>Symptom360</title>
      </Head>
      <div
        className={`bg-n-7 pr-6 md:overflow-hidden md:bg-n-1 md:p-0 dark:md:bg-n-6 ${
          visibleSidebar
            ? "pl-24 md:pl-0"
            : smallSidebar
            ? "pl-24 md:pl-0"
            : "pl-80 xl:pl-24 md:pl-0"
        }`}
      >
        <LeftSidebar
          value={visibleSidebar}
          setValue={setVisibleSidebar}
          visibleRightSidebar={visibleRightSidebar}
          smallSidebar={smallSidebar}
        />
        <div
          className={`flex py-6 md:py-0 ${
            hideRightSidebar
              ? "min-h-screen-ios min-h-screen"
              : "h-screen-ios h-screen"
          }`}
        >
          {/*  <div*/}
          {/*    className={`relative flex max-w-full grow rounded-[1.25rem] bg-n-1 dark:bg-n-6 md:rounded-none */}
          {/*`}*/}
          {/*  >*/}
          <div className={`relative flex max-w-full grow flex-col`}>
            {children}
          </div>
          {/*</div>*/}
        </div>
        <div
          className={twMerge(
            `invisible fixed inset-0 z-10 bg-n-7/80 opacity-0 md:hidden ${
              (!visibleSidebar && smallSidebar) ||
              (visibleRightSidebar && "visible opacity-100")
            }`
          )}
          onClick={handleClickOverlay}
        ></div>
      </div>
    </>
  );
};

export default Layout;
