import { Tab } from "@headlessui/react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Icon from "@/components/Icon";
import Updates from "./Updates";
import Faq from "./Faq";

import { updates } from "~/_deprecated/mocks/updates";
import { faqs } from "~/_deprecated/mocks/faq";

const tanNavigation = ["Updates", "FAQ"];

const UpdatesAndFaqPage = () => {
  const router = useRouter();

  return (
    <Layout hideRightSidebar>
      <div className="p-20 2xl:px-10 md:px-6 md:pb-10 md:pt-6">
        <button
          className="absolute right-6 top-6 hidden h-10 w-10 rounded-full border-2 border-n-4/25 text-0 transition-colors hover:border-transparent hover:bg-n-4/25 md:block"
          onClick={() => router.back()}
        >
          <Icon className="fill-n-4" name="close" />
        </button>
        <div className="mx-auto max-w-[58.5rem]">
          <div className="h2 mb-4 md:h3 md:pr-16">Updates & FAQ</div>
          <div className="body1 mb-12 text-n-4 md:mb-6">
            Features, fixes & improvements.
          </div>
          <Tab.Group defaultIndex={0}>
            <Tab.List className="mb-12 space-x-3 md:mb-6">
              {tanNavigation.map((button, index) => (
                <Tab
                  className="ui-selected:bg-primary-1 ui-selected:!text-n-1 base1 h-10 rounded-full px-6 text-n-4 outline-none transition-colors tap-highlight-color hover:text-n-7 dark:hover:text-n-1"
                  key={index}
                >
                  {button}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <Updates items={updates} />
              </Tab.Panel>
              <Tab.Panel>
                <Faq items={faqs} />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </Layout>
  );
};

export default UpdatesAndFaqPage;
