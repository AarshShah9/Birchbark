import { twMerge } from "tailwind-merge";
import Link from "next/link";
import Icon from "@/components/Icon";

type PackageProps = {
  plan?: boolean;
  item: any;
};

const Package = ({ plan, item }: PackageProps) => (
  <div
    className={`flex basis-1/3 border-r-2 border-n-3 bg-n-1 p-8 first:rounded-l-3xl last:rounded-r-3xl last:border-none dark:border-n-6 dark:bg-n-7 2xl:px-6 lg:shrink-0 lg:basis-[18.5rem] ${
      item.popular &&
      "relative text-n-1 before:absolute before:-bottom-4 before:-top-4 before:left-0 before:right-0 before:rounded-3xl before:bg-n-6 dark:text-n-7 dark:before:bg-n-2"
    }`}
  >
    <div className="relative z-2 flex grow flex-col">
      <div className="mb-1 flex items-center justify-between">
        <div className="h4" style={{ color: item.colorTitle }}>
          {item.title}
        </div>
        {item.popular && (
          <div className="caption1 ml-4 shrink-0 rounded bg-[#FF97E8] px-3 py-0.5 font-semibold text-n-7">
            Popular
          </div>
        )}
      </div>
      <div className="base1 mb-6 font-semibold">{item.description}</div>
      <div className="mb-2">
        <span className="h2 mr-2">
          ${plan ? item.priceYear : item.priceMonth}
        </span>
        <span
          className={twMerge(`h4 text-n-4/50 ${item.popular && "text-n-4"}`)}
        >
          /{plan ? "year" : "mo"}
        </span>
      </div>
      <div className="base1 text-n-4">{item.priceDetails}</div>
      <div
        className={`mt-6 grow space-y-4 border-t border-n-3 pt-6 dark:border-n-6 ${
          item.popular && "border-n-5 dark:border-n-4/25"
        }`}
      >
        {item.details.map((x: any, index: number) => (
          <div className="base2 flex" key={index}>
            <Icon
              className={twMerge(
                `mr-3 fill-n-4/50 ${item.popular && "fill-n-4"}`
              )}
              name="check-circle"
            />
            {x}
          </div>
        ))}
      </div>
      <Link
        className={`${item.currentPlan && "pointer-events-none opacity-50"} ${
          item.popular ? "btn-blue" : "btn-stroke-light"
        } mt-8 w-full`}
        href="/checkout"
      >
        {item.currentPlan ? "Current plan" : "Upgrade"}
      </Link>
    </div>
  </div>
);

export default Package;
