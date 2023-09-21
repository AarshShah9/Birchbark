import { useState } from "react";
import Radio from "@/components/Radio";
import Package from "./Package";
import Features from "./Features";

import { featuresPrice, price } from "@/mocks/price";

type MainProps = Record<string, never>;

const Main = ({}: MainProps) => {
  const [plan, setPlan] = useState(false);

  return (
    <div className="rounded-t-[1.25rem] bg-n-2 px-15 py-32 dark:bg-n-6 2xl:px-10 2xl:py-20 xl:px-8 md:rounded-none">
      <div className="mx-auto max-w-[75.25rem]">
        <div className="mb-20 text-center 2xl:mb-16 lg:mb-10">
          <div className="h2 mb-4 lg:h3">AI chat made affordable</div>
          <div className="body1 text-n-4">Pricing Plans for every budget</div>
        </div>
        <div className="mb-20 flex py-4 2xl:block 2xl:py-0 lg:mb-0">
          <div className="w-[14.875rem] pr-6 pt-8 2xl:mb-20 2xl:w-full 2xl:pr-0 2xl:pt-0 lg:mb-10">
            <div className="h4 mb-6 2xl:mb-5 2xl:text-center">Choose plan</div>
            <div className="2xl:flex 2xl:justify-center">
              <Radio
                className="mb-4 2xl:mb-0 2xl:mr-4"
                name="plan"
                value={plan}
                onChange={() => setPlan(true)}
                content="Yearly billing"
              />
              <Radio
                name="plan"
                value={!plan}
                onChange={() => setPlan(false)}
                content="Monthly billing"
              />
            </div>
          </div>
          <div className="lg:scrollbar-none flex grow lg:-mx-8 lg:overflow-auto lg:scroll-smooth lg:py-6 lg:before:w-8 lg:before:shrink-0 lg:after:w-8 lg:after:shrink-0">
            {price.map((x) => (
              <Package item={x} plan={plan} key={x.id} />
            ))}
          </div>
        </div>
        <Features items={featuresPrice} />
      </div>
    </div>
  );
};

export default Main;
