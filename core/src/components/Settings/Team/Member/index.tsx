import { CSSProperties } from "react";
import Image from "@/components/Image";
import Actions from "../Actions";

type MemberProps = {
  item: any;
  style: CSSProperties | undefined;
};

const Member = ({ item, style }: MemberProps) => {
  return (
    <div
      className="group relative flex cursor-pointer items-center border-t border-n-3 py-6 dark:border-n-6 xl:cursor-default"
      style={style}
    >
      <div className="relative h-12 w-12 shrink-0">
        <Image
          className="rounded-full object-cover"
          src={item.avatar}
          fill
          alt=""
        />
      </div>
      <div className="grow px-4">
        <div className="flex">
          <div className="base1 font-semibold">{item.name}</div>
          {item.admin && (
            <div className="caption1 ml-2 rounded bg-[#FF97E8] px-3 py-0.5 font-semibold">
              Admin
            </div>
          )}
        </div>
        <div className="caption1 text-n-4/50">@{item.login}</div>
      </div>
      <Actions className="invisible opacity-0 transition-all group-hover:visible group-hover:opacity-100 xl:visible xl:opacity-100" />
    </div>
  );
};

export default Member;
