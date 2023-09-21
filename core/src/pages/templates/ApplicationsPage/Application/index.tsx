type ApplicationProps = {
  item: any;
};

const Application = ({ item }: ApplicationProps) => (
  <div className="mx-7 mt-16 flex w-[calc(33.333%-3.5rem)] flex-col 2xl:mx-4 2xl:mt-12 2xl:w-[calc(33.333%-2rem)] lg:w-[calc(50%-2rem)] md:mx-0 md:mt-10 md:w-full">
    <div className="mb-auto flex items-center">
      <div className="mr-6 w-15 shrink-0">
        {/*<Image*/}
        {/*  className="w-full rounded-xl"*/}
        {/*  src={item.image}*/}
        {/*  width={60}*/}
        {/*  height={60}*/}
        {/*  alt=""*/}
        {/*/>*/}
      </div>
      {/*<div className="grow">*/}
      {/*  <div className="base1 mb-1 font-semibold">{item.title}</div>*/}
      {/*  <div className="caption1 text-n-4">{item.description}</div>*/}
      {/*</div>*/}
    </div>
    {/*<button*/}
    {/*  className={`btn-stroke-light mt-8 w-full md:mt-6 ${*/}
    {/*    item.installed &&*/}
    {/*    "!border-primary-1/50 !text-n-4 hover:!border-transparent hover:!bg-primary-1/50 hover:!text-n-1"*/}
    {/*  }`}*/}
    {/*>*/}
    {/*  {item.installed ? "Added" : "Add"}*/}
    {/*</button>*/}
  </div>
);

export default Application;
