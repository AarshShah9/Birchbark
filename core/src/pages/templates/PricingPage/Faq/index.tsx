import FaqItem from "@/components/FaqItem";

import { faqPricing } from "@/mocks/faq";

type FaqProps = Record<string, never>;

const Faq = ({}: FaqProps) => (
  <div className="px-15 py-32 dark:bg-n-7/25 2xl:px-10 2xl:py-20 xl:px-8">
    <div className="mx-auto max-w-[47.75rem]">
      <div className="h3 mb-12 text-center lg:h4">
        Frequently asked questions
      </div>
      <div>
        {faqPricing.map((x) => (
          <FaqItem item={x} key={x.id} />
        ))}
      </div>
    </div>
  </div>
);

export default Faq;
