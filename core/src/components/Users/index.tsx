import Image from "@/components/Image";

type UsersProps = {
  items: Array<string>;
  borderColor?: string;
};

const Users = ({ items, borderColor }: UsersProps) => (
  <div className="-ml-0.5 -mt-0.5 flex">
    {items.map((image, index) => (
      <div
        className={`relative -ml-2.5 h-7 w-7 rounded-full border-2 first:ml-0 ${
          borderColor || "border-n-1 dark:border-n-6"
        }`}
        key={index}
      >
        <Image
          className="rounded-full object-cover"
          src={image}
          fill
          alt="Avatar"
        />
      </div>
    ))}
  </div>
);

export default Users;
