import Image from "@/components/Image";
import Document from "./Document";

type QuestionProps = {
  content: any;
  image?: string;
  document?: string;
  time: string;
};

const Question = ({ content, image, document, time }: QuestionProps) => (
  <div className="ml-auto max-w-[50rem]">
    <div className="space-y-6 rounded-[1.25rem] border-3 border-n-2 px-6 pb-16 pt-6 dark:border-transparent dark:bg-n-5/50 md:p-5 md:pb-14">
      {document && <Document value={document} />}
      <div className="">{content}</div>
      {image && (
        <div className="relative h-[11.25rem] w-[11.25rem]">
          <Image
            className="rounded-xl object-cover"
            src={image}
            fill
            alt="Avatar"
          />
        </div>
      )}
    </div>
    <div className="-mt-8 flex items-end pr-6">
      <div className="caption1 pb-0.5 text-n-4/50 dark:text-n-4">{time}</div>
      {/* <button className="ml-3 px-2 py-0.5 bg-n-3 rounded-md caption1 txt-n-6 transition-colors hover:text-primary-1 dark:bg-n-5/50">
                Edit
            </button> */}
      <div className="relative ml-auto h-16 w-16 overflow-hidden rounded-2xl shadow-[0_0_0_0.25rem_#FEFEFE] dark:shadow-[0_0_0_0.25rem_#232627]">
        <Image
          className="object-cover"
          src="/images/avatar.jpg"
          fill
          alt="Avatar"
        />
      </div>
    </div>
  </div>
);

export default Question;
