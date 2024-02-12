import Image from "@/components/Image";
import Icon from "@/components/Icon";

import { exportImage, exportAudio } from "@/constants/export";

type ExportProps = {
  typeImage?: boolean;
};

const Export = ({ typeImage }: ExportProps) => {
  const items = typeImage ? exportImage : exportAudio;
  return (
    <div className="">
      {items.map((item: any, index) => (
        <div className="mt-3 border-t border-n-3 dark:border-n-6" key={index}>
          <div className="caption1 flex h-8 items-center pl-3 font-semibold text-n-4/75">
            {item.title}
          </div>
          {item.list.map((x: any, index: number) => (
            <button
              className="flex w-full items-center rounded-lg px-3 py-2 transition-colors hover:bg-n-2 dark:hover:bg-n-6"
              key={index}
            >
              <div className="relative mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                {x.image && (
                  <Image className="object-contain" src={x.image} fill alt="" />
                )}
                {x.icon && <Icon className="dark:fill-n-1" name={x.icon} />}
              </div>
              <div className="text-left">
                <div className="base2 font-semibold">{x.title}</div>
                {x.details && (
                  <div className="caption2 text-n-4/75">{x.details}</div>
                )}
              </div>
            </button>
          ))}
        </div>
      ))}
      <button className="flex w-full items-center rounded-lg px-3 py-2 transition-colors hover:bg-n-2 dark:hover:bg-n-6">
        <div className="relative mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
          <Icon className="dark:fill-n-1" name="dots" />
        </div>
        <div className="base2 font-semibold">More</div>
      </button>
    </div>
  );
};

export default Export;
