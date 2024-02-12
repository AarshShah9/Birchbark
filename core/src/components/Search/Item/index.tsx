import Link from "next/link";
import Image from "@/components/Image";

type ItemProps = {
  item: any;
};

const Item = ({ item }: ItemProps) => (
  <div className="">
    <div className="flex items-center py-3 md:pt-6">
      <div className="h6">{item.title}</div>
      <div className="caption1 ml-5 text-n-4/75">{item.date}</div>
    </div>
    <div className="-mx-5 md:mx-0">
      {item.list.map((x: any) => (
        <Link
          className="group relative flex items-center rounded-xl py-5 pl-5 pr-24 transition-colors hover:bg-n-3/50 dark:hover:bg-n-6 md:mb-6 md:!bg-transparent md:py-0 md:pl-0 md:pr-18 md:last:mb-0 dark:md:hover:bg-transparent"
          key={x.id}
          href={x.url}
        >
          <div className="relative h-12 w-12 shrink-0">
            <Image
              className="rounded-full object-cover"
              src={x.avatar}
              fill
              alt="Avatar"
            />
            {x.online && (
              <div className="absolute -bottom-0.25 -right-0.25 h-4.5 w-4.5 rounded-full border-4 border-n-1 bg-primary-2 transition-colors group-hover:border-[#F3F5F7] dark:border-n-7 dark:group-hover:border-n-6"></div>
            )}
          </div>
          <div className="w-[calc(100%-3rem)] pl-5">
            <div className="base1 mb-1 truncate font-semibold">{x.title}</div>
            <div className="caption1 truncate text-n-4/75">{x.content}</div>
          </div>
          <div className="caption1 absolute right-5 top-1/2 -translate-y-1/2 text-n-4/50 group-hover:hidden md:right-0">
            {x.time}
          </div>
          <div className="caption1 absolute right-5 top-1/2 hidden -translate-y-1/2 rounded bg-n-1 px-2 font-semibold text-n-4 group-hover:block dark:bg-n-5 dark:text-n-3 md:right-0">
            Jump
          </div>
          <div className="base2 invisible absolute left-full top-1/2 ml-9 flex -translate-y-1/2 items-center whitespace-nowrap rounded-lg bg-n-7 px-3 py-2 text-n-4 opacity-0 transition-all group-hover:visible group-hover:opacity-100 dark:bg-n-2 2xl:hidden">
            Last edited by{" "}
            <div className="relative mx-2 h-5 w-5 shrink-0">
              <Image
                className="rounded-full object-cover"
                src={x.avatar}
                fill
                alt="Avatar"
              />
            </div>
            <span className="mr-2 font-semibold text-n-1 dark:text-n-7">
              {x.author}
            </span>
            {x.time}
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default Item;
