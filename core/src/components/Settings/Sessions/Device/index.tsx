import Image from "@/components/Image";

type DeviceProps = {
  item: any;
};

const Device = ({ item }: DeviceProps) => (
  <div className="flex items-start border-t border-n-3 py-6 dark:border-n-6">
    <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-n-3 px-2 dark:bg-n-5">
      <Image
        className="w-full"
        src={item.image}
        width={32}
        height={32}
        alt=""
      />
    </div>
    <div className="grow">
      <div className="base1 mb-1 font-semibold text-n-6 dark:text-n-3">
        {item.title}
      </div>
      <div className="base2 text-n-4">
        <p>{item.address}</p>
        <p>{item.date}</p>
      </div>
    </div>
    <button className="btn-stroke-light ml-4 shrink-0">Revoke</button>
  </div>
);

export default Device;
