import FaqItem from "@/components/FaqItem";
import Image from "@/components/Image";

type FaqItems = {
  id: string;
  title: string;
  content: string;
  defaultOpen: boolean;
};

type FaqProps = {
  items: FaqItems[];
};

const Faq = ({ items }: FaqProps) => (
  <>
    <div>
      {items.map((x) => (
        <FaqItem item={x} key={x.id} />
      ))}
    </div>
    <div className="mt-12 rounded-[1.25rem] bg-n-2/50 p-20 text-center dark:bg-n-7/50 md:px-8 md:py-16">
      <div className="mx-auto mb-8 w-28">
        <Image src="/images/faq-image.svg" width={112} height={112} alt="" />
      </div>
      <div className="h5 mb-1">Can’t find any answer?</div>
      <div className="base1 mb-8 text-n-4">Let’s ask the smartest AI Chat</div>
      <button className="btn-blue">Ask Brainwave</button>
    </div>
  </>
);

export default Faq;
