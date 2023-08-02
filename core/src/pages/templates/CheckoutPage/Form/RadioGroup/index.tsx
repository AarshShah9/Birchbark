import { RadioGroup } from "@headlessui/react";

type RadioType = {
  id: string;
  title: string;
  value: number;
  save?: number;
};

type RadioProps = {
  items: RadioType[];
  value: any;
  setValue: any;
};

const Radio = ({ items, value, setValue }: RadioProps) => {
  return (
    <RadioGroup
      className="mb-6 flex space-x-3 md:block md:space-x-0 md:space-y-4"
      value={value}
      onChange={setValue}
      name="plan"
    >
      {/*{items.map((item) => (*/}
      {/*  <RadioGroup.Option*/}
      {/*    key={item.id}*/}
      {/*    value={item}*/}
      {/*    className="ui-checked:border-primary-1 ui-checked:bg-transparent dark:ui-checked:border-primary-1 basis-1/2 cursor-pointer rounded-xl border-2 border-n-2 bg-n-2 p-3.5 transition-colors tap-highlight-color dark:border-transparent dark:bg-transparent"*/}
      {/*  >*/}
      {/*    <div className="mb-1 flex">*/}
      {/*      <div className="base2 dark:text-n-4">Pay {item.title}</div>*/}
      {/*      <Icon*/}
      {/*        className="ui-checked:opacity-100 ml-auto fill-primary-1 opacity-0 transition-opacity"*/}
      {/*        name="check-thin"*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*    <div className="flex items-center">*/}
      {/*      <div className="base1 font-semibold">${item.value}/month</div>*/}
      {/*      {item.save && (*/}
      {/*        <div className="base2 ml-auto rounded bg-primary-2/15 px-2 text-[#0C923C]">*/}
      {/*          Save {item.save}%*/}
      {/*        </div>*/}
      {/*      )}*/}
      {/*    </div>*/}
      {/*  </RadioGroup.Option>*/}
      {/*))}*/}
    </RadioGroup>
  );
};

export default Radio;
