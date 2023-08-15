import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { clearQueueScrollLocks, enablePageScroll } from "scroll-lock";
import Head from "next/head";
import LeftSidebar from "~/components/LeftSidebar";
import Burger from "~/components/Layout/Burger";
import Link from "next/link";
import Icon from "~/components/Icon";
import RightSidebar from "~/components/RightSidebar";
import { twMerge } from "tailwind-merge";

type LayoutProps = {
  children: React.ReactNode;
};
const LandingLayout: React.FC<LayoutProps> = ({ children }) => {
  // return (
  //   <>
  //     <Navbar />
  //     {children}
  //     <Footer />
  //   </>
  // );
  //       const [visibleSidebar, setVisibleSidebar] = useState<any>(
  //           smallSidebar || false
  //       );

  const [visibleRightSidebar, setVisibleRightSidebar] =
    useState<boolean>(false);

  const isDesktop = useMediaQuery({
    query: "(max-width: 1179px)",
  });

  const handleClickOverlay = () => {
    // setVisibleSidebar(true);
    setVisibleRightSidebar(false);
    clearQueueScrollLocks();
    enablePageScroll();
  };

  // useEffect(() => {
  //     setVisibleSidebar(smallSidebar || isDesktop);
  // }, [isDesktop, smallSidebar]);

  const hideRightSidebar = true;
  const smallSidebar = false;
  const visibleSidebar = false;
  const setVisibleSidebar = false;
  const backUrl = undefined;

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
          <div
            className={`relative flex max-w-full grow rounded-[1.25rem] bg-n-1 dark:bg-n-6 md:rounded-none ${
              !hideRightSidebar && "pr-[22.5rem] 2xl:pr-80 lg:pr-0"
            }`}
          >
            <div
              className={`relative flex max-w-full grow flex-col ${
                !hideRightSidebar && "md:pt-18"
              }`}
            >
              {!hideRightSidebar && (
                <Burger
                  className={`
                                ${!visibleSidebar && "md:hidden"}
                            `}
                  visibleRightSidebar={visibleRightSidebar}
                  onClick={() => setVisibleRightSidebar(!visibleRightSidebar)}
                />
              )}
              {hideRightSidebar && smallSidebar && (
                <Link
                  className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border-2 border-n-4/25 text-0 transition-colors hover:border-transparent hover:bg-n-4/25"
                  href={backUrl || "/"}
                >
                  <Icon className="fill-n-4" name="close" />
                </Link>
              )}
              {children}
            </div>
            {!hideRightSidebar && (
              <RightSidebar
                className={`
                                ${
                                  !visibleSidebar &&
                                  "md:translate-x-64 md:before:absolute md:before:inset-0 md:before:z-30"
                                }
                            `}
                visible={visibleRightSidebar}
              />
            )}
          </div>
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

export default LandingLayout;
