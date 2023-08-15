import Image from "@/components/Image";
import Loading from "./Loading";

type AnswerProps = {
  children?: React.ReactNode;
  loading?: boolean;
  time?: string;
};

const Answer = ({ children, loading, time }: AnswerProps) => {
  return (
    <div className="max-w-[50rem]">
      <div className="space-y-4 rounded-[1.25rem] bg-n-2 px-6 pb-16 pt-6 dark:bg-n-7 md:p-5 md:pb-14">
        {loading ? <Loading /> : children}
      </div>
      <div className="-mt-8 flex items-end pl-6">
        <div
          className={`relative mr-auto h-16 w-16 shrink-0 overflow-hidden rounded-2xl ${
            !loading &&
            "shadow-[0_0_0_0.25rem_#FEFEFE] dark:shadow-[0_0_0_0.25rem_#232627]"
          }`}
        >
          <Image
            className="rounded-2xl object-cover"
            src="/Logos/360.png"
            fill
            alt="Avatar"
          />
        </div>
        {/*{loading ? (*/}
        {/*  <button className="txt-n-6 group caption1 ml-3 flex items-center rounded-md bg-n-3 px-2 py-0.5 transition-colors hover:text-primary-1 dark:bg-n-7 dark:text-n-3 dark:hover:text-primary-1">*/}
        {/*    <Icon*/}
        {/*      className="mr-2 h-4 w-4 transition-colors group-hover:fill-primary-1 dark:fill-n-3"*/}
        {/*      name="pause-circle"*/}
        {/*    />*/}
        {/*    Pause generating*/}
        {/*  </button>*/}
        {/*) : (*/}
        {/*  <div className="flex items-center">*/}
        {/*    <div className="caption1 text-n-4/50 dark:text-n-4">{time}</div>*/}
        {/*    <Actions />*/}
        {/*  </div>*/}
        {/*)}*/}
      </div>
    </div>
  );
};

export default Answer;
