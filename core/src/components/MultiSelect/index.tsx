import Select, { components } from "react-select";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

const { Option, MultiValueRemove } = components;

const DetailsOption = (props: any) => (
  <Option {...props}>
    <div className="relative mr-3 h-10 w-10">
      <Image
        className="rounded-full object-fill"
        src={props.data.avatar}
        fill
        alt={props.data.name}
      />
    </div>
    <div className="grow">
      <div className="base2 font-semibold text-n-5 dark:text-n-1">
        {props.data.name}
      </div>
      <div className="caption1 text-n-4/50 dark:text-n-3/50">
        {props.data.email}
      </div>
    </div>
  </Option>
);

const CustomMultiValueRemove = (props: any) => (
  <MultiValueRemove {...props}>
    <Icon className="h-4 w-4 fill-inherit transition-transform" name="close" />
  </MultiValueRemove>
);

type MultiSelectProps = {
  className?: string;
  classMultiSelectGlobal?: string;
  items: any;
  selectedOptions: any;
  setSelectedOptions: any;
};

const MultiSelect = ({
  className,
  classMultiSelectGlobal,
  items,
  selectedOptions,
  setSelectedOptions,
}: MultiSelectProps) => {
  const handleMultiSelectChange = (selectedOptions: any) => {
    setSelectedOptions(selectedOptions);
  };
  console.log(selectedOptions);

  const getOptionLabel = (option: any) => option.name;

  const getOptionValue = (option: any) => option.id;

  const formatOptionLabel = ({ avatar, name }: any) => (
    <div className="base2 flex items-center font-semibold">
      <div className="relative mr-2 h-6 w-6">
        <Image
          className="rounded-full object-fill"
          src={avatar}
          fill
          alt={name}
        />
      </div>
      <span className="mr-3">{name}</span>
    </div>
  );

  return (
    <div className={`relative ${className}`}>
      <Select
        className={`multiselect ${classMultiSelectGlobal}`}
        classNamePrefix="multiselect"
        value={selectedOptions}
        onChange={handleMultiSelectChange}
        options={items}
        isMulti
        getOptionLabel={getOptionLabel}
        getOptionValue={getOptionValue}
        formatOptionLabel={formatOptionLabel}
        placeholder="Name member"
        noOptionsMessage={() => "No people found"}
        components={{
          Option: DetailsOption,
          MultiValueRemove: CustomMultiValueRemove,
        }}
        isClearable={false}
      />
      <Icon
        className={`pointer-events-none absolute left-5 top-4 h-5 w-5 fill-n-4/50 dark:fill-n-4/75 ${
          selectedOptions.length !== 0 && "hidden"
        }`}
        name="email"
      />
    </div>
  );
};

export default MultiSelect;
