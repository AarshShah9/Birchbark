import Image from "@/components/Image";
import Icon from "@/components/Icon";

type FilesProps = {
  image?: string;
  document?: string;
};

const Files = ({ image, document }: FilesProps) => (
  <div className="border-b-2 border-n-3 p-4 dark:border-n-5">
    {image && (
      <div className="relative h-[11.25rem] w-[11.25rem]">
        <Image
          className="rounded-xl object-cover"
          src={image}
          fill
          alt="Avatar"
        />
        <button className="group absolute right-2 top-2 h-8 w-8 rounded-full bg-n-1 text-0 transition-colors hover:bg-accent-1">
          <Icon
            className="h-4 w-4 fill-n-4 transition-colors group-hover:fill-n-1"
            name="trash"
          />
        </button>
      </div>
    )}
    {document && (
      <div className="base1 flex items-center font-semibold">
        <div className="mr-4 w-[2.625rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="48"
            fill="none"
            viewBox="0 0 42 48"
          >
            <path
              className="stroke-[#D9D9D9] dark:stroke-n-5"
              d="M36 47H6a5 5 0 0 1-5-5V6a5 5 0 0 1 5-5h20.721a5 5 0 0 1 3.402 1.336l9.279 8.616A5 5 0 0 1 41 14.616V42a5 5 0 0 1-5 5z"
              stroke-width="2"
            />
            <path
              d="M22.991 14.124a1 1 0 0 0-1.761-.764l-8.929 10.715-.424.537c-.108.156-.304.462-.31.865a1.5 1.5 0 0 0 .557 1.189c.313.253.674.298.863.315.199.018.444.018.684.018h6.195l-.86 6.876a1 1 0 0 0 1.761.764l8.93-10.715.424-.537c.108-.156.304-.462.31-.865a1.5 1.5 0 0 0-.557-1.189c-.313-.253-.674-.298-.863-.315a8.14 8.14 0 0 0-.685-.018h-6.195l.86-6.876z"
              fill="#8e55ea"
            />
          </svg>
        </div>
        <div className="">{document}</div>
        <button className="group ml-3 h-8 w-8 rounded-full text-0">
          <Icon
            className="h-4 w-4 fill-n-4 transition-colors group-hover:fill-accent-1"
            name="trash"
          />
        </button>
      </div>
    )}
  </div>
);

export default Files;
