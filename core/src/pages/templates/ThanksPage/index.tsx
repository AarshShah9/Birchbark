import Link from "next/link";
import Layout from "@/components/Layout";
import Icon from "@/components/Icon";
import Menu from "@/components/Menu";

import { navigation } from "@/constants/navigation";

const ThanksPage = () => {
  return (
    <Layout smallSidebar hideRightSidebar>
      <div className="flex grow items-center p-15 lg:py-10 md:px-8">
        <div className="items-centerw-full mx-auto flex max-w-[60.75rem] lg:block">
          <div className="grow pr-20 xl:pr-16 lg:pr-0">
            <div className="mb-12 flex h-32 w-32 items-center justify-center rounded-full bg-primary-2 xl:h-20 xl:w-20 lg:mx-auto lg:mb-6">
              <Icon className="h-12 w-12" name="check-thin" />
            </div>
            <div className="h2 mb-6 2xl:h3 xl:h4 lg:text-center">
              Thank you for your purchase!
            </div>
            <div className="body1 mb-8 text-n-4 xl:body2 lg:text-center">
              Your order has been received and is currently being processed. You
              will receive an email confirmation with your order details
              shortly.
            </div>
            <div className="flex xl:block lg:flex lg:space-x-4 md:block md:space-x-0 md:space-y-3">
              {/*<Link*/}
              {/*  className="btn-stroke-light mr-3 xl:mb-4 xl:mr-0 xl:w-full lg:mb-0"*/}
              {/*  href="/pricing"*/}
              {/*>*/}
              {/*  Manage subscription*/}
              {/*</Link>*/}
              <Link className="btn-blue xl:w-full" href="/">
                Start new chat
              </Link>
            </div>
          </div>
          <Menu
            className="w-[27.875rem] shrink-0 lg:mt-10 lg:w-full"
            items={navigation}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ThanksPage;
