import Link from "next/link";
import Image from "@/components/Image";

type NotificationProps = {
  item: any;
};

const Notification = ({ item }: NotificationProps) => (
  <Link
    className="flex items-center rounded-xl p-4 transition-colors hover:bg-n-2 dark:hover:bg-n-6 md:p-0 md:hover:bg-transparent dark:md:hover:bg-transparent"
    href={item.url}
  >
    <div className="relative h-15 w-15 shrink-0 md:h-12 md:w-12">
      <Image
        className="rounded-full object-cover"
        src={item.avatar}
        fill
        alt="Avatar"
      />
      {item.online && (
        <div className="absolute bottom-0 right-0 h-4.5 w-4.5 rounded-full border-4 border-n-1 bg-primary-2 dark:border-n-7"></div>
      )}
    </div>
    <div className="w-[calc(100%-3.75rem)] px-5 md:px-3">
      <div className="base1 mb-1 truncate text-n-7 md:base2 dark:text-n-1 md:mb-0">
        {item.content}
      </div>
      <div>
        <span className="caption1 text-n-4">{item.time}</span>
        <span className="mx-3 inline-block h-2 w-0.5 rounded-full bg-n-3 dark:bg-n-5 md:mx-2"></span>
        <span className="caption1 text-n-4">{item.category}</span>
      </div>
    </div>
    {item.new && (
      <div className=" h-4 w-4 shrink-0 rounded-full bg-accent-1 md:h-3 md:w-3"></div>
    )}
  </Link>
);

export default Notification;
