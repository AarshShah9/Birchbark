import { Disclosure, Transition } from "@headlessui/react";

type FaqItemProps = {
  item: any;
};

const FaqItem = ({ item }: FaqItemProps) => (
  <div className="border-t border-n-3 dark:border-n-6">
    <Disclosure defaultOpen={item.defaultOpen}>
      <Disclosure.Button className="h6 flex w-full py-6 transition-colors tap-highlight-color hover:text-primary-1 lg:hover:text-n-7 dark:lg:hover:text-n-1">
        <div className="before:l-1/2 after:l-1/2 after:ui-open:rotate-90 relative mr-8 h-8 w-8 shrink-0 before:absolute before:top-1/2 before:h-0.5 before:w-4 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-n-6 after:absolute after:top-1/2 after:h-4 after:w-0.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-n-6 after:transition-transform dark:before:bg-n-3 dark:after:bg-n-3 md:mr-6"></div>
        <div className="text-left">{item.title}</div>
      </Disclosure.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Disclosure.Panel className="base1 -mt-4 pb-6 pl-16 text-n-4 md:pl-14">
          {item.content}
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  </div>
);

export default FaqItem;
