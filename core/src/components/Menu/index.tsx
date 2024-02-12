import Link from "next/link";
import Icon from "@/components/Icon";

type MenuType = {
  title: string;
  icon: string;
  color: string;
  url: string;
};

type MenuProps = {
  className?: string;
  items: MenuType[];
};

const Menu = ({ className, items }: MenuProps) => (
  <div className={className}>
    {items.map((item, index) => (
      <Link
        className="group h6 mb-5 flex items-center rounded-xl border border-n-3 p-3.5 transition-all last:mb-0 hover:border-transparent hover:shadow-[0_0_1rem_0.25rem_rgba(0,0,0,0.04),0px_2rem_1.5rem_-1rem_rgba(0,0,0,0.12)] dark:border-n-5 dark:hover:border-n-7 dark:hover:bg-n-7 2xl:p-2.5 lg:p-3.5"
        href={item.url}
        key={index}
      >
        <div className="relative mr-6 flex h-15 w-15 items-center justify-center">
          <div
            className="absolute inset-0 rounded-xl opacity-20"
            style={{
              backgroundColor: item.color,
            }}
          ></div>
          <Icon className="relative z-1" fill={item.color} name={item.icon} />
        </div>
        {item.title}
        <Icon
          className="ml-auto fill-n-4 transition-colors group-hover:fill-n-7 dark:group-hover:fill-n-4"
          name="arrow-next"
        />
      </Link>
    ))}
  </div>
);

export default Menu;
