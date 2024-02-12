import Icon from "@/components/Icon";

type DocumentProps = {
  value?: string;
};

const Document = ({ value }: DocumentProps) => (
  <div className="w-40">
    <div className="relative flex h-[11.25rem] items-end rounded-xl bg-n-2 dark:bg-n-5">
      <button className="group absolute right-4 top-4 h-8 w-8 rounded-full bg-n-1 text-0 dark:bg-n-7">
        <Icon
          className="h-4 w-4 fill-n-4 transition-colors group-hover:fill-primary-1"
          name="zoom-in"
        />
      </button>
      <div className="w-full p-6">
        <div className="mb-3 h-2 w-[3.75rem] rounded-full bg-n-3 dark:bg-n-4/25"></div>
        <div className="mb-3 h-2 rounded-full bg-n-3 dark:bg-n-4/25"></div>
        <div className="h-2 rounded-full bg-n-3 dark:bg-n-4/25"></div>
      </div>
    </div>
    <div className="base1 mt-3 truncate">{value}</div>
  </div>
);

export default Document;
