import { useColorMode } from "@chakra-ui/color-mode";
import Icon from "@/components/Icon";
import Image from "@/components/Image";

type UpdatesItems = {
  id: string;
  title: string;
  date: string;
  icon: string;
  imageLight: string;
  imageDark: string;
  content: string;
};

type UpdatesProps = {
  items: UpdatesItems[];
};

const Updates = ({ items }: UpdatesProps) => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  return (
    <>
      <div>
        {items.map((item) => (
          <div
            className="flex border-t border-n-3 py-16 dark:border-n-5 lg:block md:py-8"
            key={item.id}
          >
            <div className="w-[21rem] shrink-0 pr-20 2xl:w-72 2xl:pr-12 lg:mb-10 lg:w-full lg:pr-0">
              <div className="mb-5 flex h-15 w-15 items-center justify-center rounded-full bg-accent-1/20">
                <Icon className="fill-accent-1" name={item.icon} />
              </div>
              <div className="h6 mb-5">{item.title}</div>
              <div className="base1 font-semibold text-n-4/50">{item.date}</div>
            </div>
            <div className="grow">
              <div>
                <Image
                  className="w-full rounded-3xl md:rounded-xl"
                  src={isDarkMode ? item.imageDark : item.imageLight}
                  width={600}
                  height={400}
                  alt=""
                />
              </div>
              <div className="base1 mt-8 text-n-4">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="btn-stroke-light">Load more</button>
      </div>
    </>
  );
};

export default Updates;
