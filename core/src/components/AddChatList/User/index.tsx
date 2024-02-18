import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Select from "@/components/Select";
import { useState } from "react";

type UserProps = {
  item: any;
};

const typesAccess = [
  {
    id: "0",
    title: "Full access",
  },
  {
    id: "1",
    title: "Can view",
  },
  {
    id: "2",
    title: "Can start chat",
  },
];

const User = ({ item }: UserProps) => {
  const [typeAccess, setTypeAccess] = useState<any>(typesAccess[1]);

  return (
    <div className="mb-5 flex items-center last:mb-0" key={item.id}>
      <div className="relative mr-3 h-8 w-8">
        <Image
          className="rounded-full object-cover"
          src={item.avatar}
          fill
          alt="Avatar"
        />
      </div>
      <div className="base2 mr-auto font-semibold text-n-5 dark:text-n-3">
        {item.name}
      </div>
      {item.status ? (
        <div className="caption1 flex items-center font-semibold text-n-4">
          {item.status}{" "}
          <Icon className="ml-1.5 h-5 w-5 fill-n-4" name="check-thin" />
        </div>
      ) : (
        <Select
          className="shrink-0"
          classButton="h-auto px-0 !shadow-none caption1 font-semibold"
          classOptions="left-auto -right-1 w-[10.125rem]"
          classOption="items-end caption1 font-semibold"
          items={typesAccess}
          value={typeAccess}
          onChange={setTypeAccess}
        />
      )}
    </div>
  );
};

export default User;
