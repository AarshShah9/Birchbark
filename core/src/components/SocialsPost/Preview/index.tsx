import Image from "@/components/Image";
import Icon from "@/components/Icon";

type PreviewProps = {
  item: any;
};

const Preview = ({ item }: PreviewProps) => (
  <div className="relative mr-3 h-[9.375rem] w-[12.5rem] shrink-0">
    <Image
      className="rounded-xl object-cover"
      src={item.src}
      fill
      sizes="(max-width: 768px) 100vw, 33vw"
      alt=""
    />
    <button
      className="group absolute right-2 top-2 h-6 w-6 rounded-full bg-n-7 text-0"
      name="close-fat"
    >
      <Icon
        className="h-4 w-4 fill-n-4 transition-colors group-hover:fill-n-1"
        name="close-fat"
      />
    </button>
  </div>
);

export default Preview;
