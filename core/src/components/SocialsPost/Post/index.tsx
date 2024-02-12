import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Details from "../Details";

type PostProps = {
  item: any;
};

const Post = ({ item }: PostProps) => (
  <div className="mb-4 flex rounded-xl bg-n-1 p-5 last:mb-0 dark:bg-n-6 md:block">
    <div className="w-10 shrink-0">
      <Image className="w-full" src={item.icon} width={40} height={40} alt="" />
    </div>
    <div className="w-[calc(100%-2.5rem)] pl-4 md:w-full md:pl-0 md:pt-4">
      <div>
        {item.content}{" "}
        <a
          className="break-words text-primary-1 underline"
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.link}
        </a>
        {item.tags.map((tag: any, index: number) => (
          <span className="text-primary-1" key={index}>
            {" "}
            #{tag}
          </span>
        ))}
      </div>
      <Details images={item.images} />
      <div className="-ml-3 mt-1 flex flex-wrap md:-mr-2">
        <button className="btn-stroke-light btn-small ml-3 mt-3">
          <span>Share now</span>
          <Icon name="external-link" />
        </button>
        <button className="btn-stroke-light btn-small ml-3 mt-3">
          <span>Edit</span>
          <Icon name="edit" />
        </button>
        <button className="btn-stroke-light btn-small ml-3 mt-3">
          <span>New variation</span>
          <Icon name="plus" />
        </button>
        <button className="btn-stroke-light btn-small ml-3 mt-3">
          <span>Copy</span>
          <Icon name="copy" />
        </button>
      </div>
    </div>
  </div>
);

export default Post;
