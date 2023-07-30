import Image from "@/components/Image";
import Icon from "@/components/Icon";

type ViewProps = Record<string, never>;

const View = ({}: ViewProps) => (
  <div className="relative aspect-[1.6] max-w-[32.5rem] xl:max-w-full">
    <Image
      className="rounded-xl object-cover"
      src="/images/video-pic-1.jpg"
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1499px) 50vw, 33.33vw"
      alt=""
    />
    <button className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-n-1/90 pl-0.5 transition-colors hover:bg-n-1 md:h-10 md:w-10">
      <Icon className="h-4 w-4" name="play" />
    </button>
  </div>
);

export default View;
