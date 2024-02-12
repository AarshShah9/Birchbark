import { Listbox, Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import Icon from "@/components/Icon";

type SelectProps = {
  label?: string;
  title?: string;
  icon?: string;
  className?: string;
  classButton?: string;
  classArrow?: string;
  classOptions?: string;
  classOption?: string;
  classIcon?: string;
  placeholder?: string;
  items: any;
  value: any;
  onChange: any;
  small?: boolean;
  up?: boolean;
};

const Select = ({
  label,
  title,
  icon,
  className,
  classButton,
  classArrow,
  classOptions,
  classOption,
  classIcon,
  placeholder,
  items,
  value,
  onChange,
  small,
  up,
}: SelectProps) => (
  <div className={`relative ${className}`}>
    {label && <div className="base2 mb-2 flex font-semibold">{label}</div>}
    <Listbox value={value} onChange={onChange}>
      {({ open }) => (
        <>
          <Listbox.Button
            className={twMerge(
              `base2 flex h-[3.25rem] w-full items-center rounded-xl bg-n-1 px-4 outline-none tap-highlight-color ${
                small
                  ? `h-9 rounded-md pr-3 shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.15)] dark:bg-n-6 dark:shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.15),inset_0_0_0_0.0625rem_rgba(254,254,254,.1)] ${
                      open && "shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.15)]"
                    }`
                  : `shadow-[inset_0_0_0_0.0625rem_#E8ECEF] dark:bg-transparent dark:shadow-[inset_0_0_0_0.0625rem_#343839] ${
                      open && "!shadow-[inset_0_0_0_0.125rem_#0084FF]"
                    }`
              } ${classButton}`
            )}
          >
            {title && (
              <div className="mr-2 shrink-0 border-r border-n-3 pr-2 text-n-4 dark:border-n-4/50">
                {title}
              </div>
            )}
            {icon && (
              <Icon
                className={`mr-2 shrink-0 dark:fill-n-4 ${
                  small && "mr-1.5 h-5 w-5"
                } ${classIcon}`}
                name={icon}
              />
            )}
            {value?.color && (
              <div
                className="ml-1 mr-4 h-3.5 w-3.5 shrink-0 rounded"
                style={{ backgroundColor: value.color }}
              ></div>
            )}
            {value?.icon && (
              <Icon className="mr-3 h-5 w-5 dark:fill-n-1" name={value.icon} />
            )}
            <span className={`mr-auto truncate ${small && "font-semibold"}`}>
              {value ? (
                value.title
              ) : (
                <span className="text-n-4">{placeholder}</span>
              )}
            </span>
            <Icon
              className={`ml-2 shrink-0 transition-transform dark:fill-n-1 ${
                open && "rotate-180"
              } ${small && "ml-1"} ${classArrow}`}
              name="arrow-down"
            />
          </Listbox.Button>
          <Transition
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className={twMerge(
                `absolute left-0 right-0 mt-2 w-full rounded-lg bg-n-1 p-2 shadow-[0_0_1rem_0.25rem_rgba(0,0,0,0.04),0_2rem_2rem_-1.5rem_rgba(0,0,0,0.1),inset_0_0_0_0.0625rem_#E8ECEF] outline-none dark:bg-n-6 dark:shadow-[0_0_1rem_0.25rem_rgba(0,0,0,0.04),0_2rem_2rem_-1.5rem_rgba(0,0,0,0.1),inset_0_0_0_0.0625rem_#343839] ${
                  small && "right-auto mt-1 shadow-md"
                } ${
                  up && `bottom-full top-auto mt-0 ${small ? "mb-1" : "mb-2"}`
                } ${open && "z-10"} ${classOptions}`
              )}
            >
              {items.map((item: any) => (
                <Listbox.Option
                  className={`ui-selected:!bg-n-3/50 ui-selected:!text-n-7 dark:ui-selected:!bg-n-7 dark:ui-selected:!text-n-1 base2 flex cursor-pointer items-start rounded-lg p-2 text-n-4 transition-colors tap-highlight-color hover:text-n-7 dark:hover:text-n-3 ${
                    small && "py-1 font-semibold"
                  } ${classOption}`}
                  key={item.id}
                  value={item}
                >
                  {item.color && (
                    <div
                      className="ml-1 mr-4 mt-[0.3125rem] h-3.5 w-3.5 shrink-0 rounded"
                      style={{
                        backgroundColor: item.color,
                      }}
                    ></div>
                  )}
                  {item.icon && (
                    <Icon
                      className="mr-3 mt-0.5 h-5 w-5 dark:fill-n-1"
                      name={item.icon}
                    />
                  )}
                  <div className="mr-auto">{item.title}</div>
                  {!small && (
                    <Icon
                      className="ui-selected:inline-block ml-2 mt-0.5 hidden h-5 w-5 fill-n-7 dark:fill-n-1"
                      name="check-thin"
                    />
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </>
      )}
    </Listbox>
  </div>
);

export default Select;
