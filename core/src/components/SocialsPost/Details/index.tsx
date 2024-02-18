import Icon from "@/components/Icon";
import Preview from "../Preview";

type DetailsProps = {
  images: any;
};

const Details = ({ images }: DetailsProps) => (
  <div className="mt-4 rounded-xl border-2 border-n-3 p-5 dark:border-n-5">
    <div className="mb-2 flex justify-between">
      <div className="">
        <div className="caption1 font-semibold text-n-6 dark:text-n-3">
          Suggested media
        </div>
        <div className="caption2 text-n-4/75">
          Make sure you have the rights to use the suggested media.
        </div>
      </div>
      <button className="group ml-6 h-6.5 w-6.5 shrink-0 md:-mt-1">
        <Icon
          className="h-5 w-5 fill-n-4 transition-colors group-hover:fill-accent-1"
          name="close"
        />
      </button>
    </div>
    <div className="scrollbar-none -mx-5 flex overflow-x-auto before:w-5 before:shrink-0 after:w-5 after:shrink-0">
      {images.map((image: any) => (
        <Preview item={image} key={image.id} />
      ))}
      <div className="relative flex h-[9.375rem] w-[12.5rem] shrink-0 flex-col items-center justify-center rounded-xl bg-n-2 dark:bg-n-7">
        <input
          className="absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
          type="file"
        />
        <Icon className="dark:fill-n-1" name="image-up" />
        <div className="caption1 mt-2 font-semibold text-n-6 dark:text-n-3">
          Upload media
        </div>
      </div>
    </div>
  </div>
);

export default Details;
