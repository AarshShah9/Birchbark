import Image from "@/components/Image";
import Actions from "@/components/Actions";
import Icon from "@/components/Icon";
import Export from "@/components/Export";
import Adjust from "@/components/Adjust";

type PhotoProps = {
  content: string;
  image: string;
  colorPicker?: boolean;
};

const Photo = ({ content, image, colorPicker }: PhotoProps) => (
  <div className="">
    <div>{content}</div>
    <div className="relative mt-5 h-[23.75rem] max-w-[34.75rem] xl:max-w-full">
      <Image
        className="rounded-xl object-cover"
        src={image}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1499px) 50vw, 33.33vw"
        alt=""
      />
      {colorPicker && (
        <button className="absolute right-4 top-4 z-1 flex h-9 w-9 items-center justify-center rounded-lg bg-n-1 shadow-[0_0.3125rem_0.75rem_-0.25rem_#C3CAD2]">
          <div
            className="h-5 w-5 rounded"
            style={{ backgroundColor: "#4667BC" }}
          ></div>
        </button>
      )}
    </div>
    <div className="mt-1 flex flex-wrap 2xl:-mx-2">
      <Actions
        className="mr-4 mt-4 2xl:mx-2 2xl:w-[calc(50%-1rem)]"
        classButton="btn-dark 2xl:w-full"
        classTitle="pl-3"
        title="Exporting 1 photo"
        buttonInner={
          <>
            <span>Export</span>
            <Icon name="share" />
          </>
        }
      >
        <Export typeImage />
      </Actions>
      <button className="btn-white btn-small mr-4 mt-4 2xl:mx-2 2xl:w-[calc(50%-1rem)] md:capitalize">
        <span>
          <span className="md:hidden">Create</span> variation
        </span>
        <Icon name="plus-circle-stroke" />
      </button>
      <Actions
        className="mr-4 mt-4 2xl:mx-2 2xl:w-[calc(50%-1rem)]"
        classButton="btn-white ui-open:bg-n-4/50 2xl:w-full dark:ui-open:bg-n-1/20"
        title="Adjust"
        buttonInner={
          <>
            <span>Adjust</span>
            <Icon name="share" />
          </>
        }
      >
        <Adjust image={image} />
      </Actions>
      <button className="btn-white btn-small mt-4 2xl:mx-2 2xl:w-[calc(50%-1rem)]">
        <span>Enhance</span>
        <Icon name="scale" />
      </button>
    </div>
  </div>
);

export default Photo;
