import Link from "next/link";
import Icon from "@/components/Icon";

import { navigation } from "@/constants/navigation";

type ServicesProps = Record<string, never>;

const Services = ({}: ServicesProps) => (
  <div className="">
    <div className="mb-4">
      I’m Brainwave - a versatile and powerful tool for users seeking to enhance
      their experience with ChatGPT. It offers a wide range of advanced features
      to improve functionality and efficiency. With this tool, you can expect
      the following capabilities:
    </div>
    <div className="-ml-2 -mt-2 flex flex-wrap">
      {navigation.map((item, index) => (
        <Link
          className="group base1 ml-2 mt-2 flex items-center rounded-full border border-n-3 bg-n-1 p-2 pr-4 font-semibold transition-shadow hover:shadow-[0_0_1rem_0.25rem_rgba(0,0,0,0.04),0_2rem_2rem_-1rem_rgba(0,0,0,0.12)] dark:border-n-5/50 dark:bg-n-6 dark:transition-all dark:hover:bg-n-5 md:w-full"
          href={item.url}
          key={index}
        >
          <div className="relative mr-3 flex h-10 w-10 items-center justify-center">
            <div
              className="absolute inset-0 rounded-full opacity-20"
              style={{
                backgroundColor: item.color,
              }}
            ></div>
            <Icon className="relative z-1" fill={item.color} name={item.icon} />
          </div>
          {item.title}
        </Link>
      ))}
    </div>
  </div>
);

export default Services;
