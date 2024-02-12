import { twMerge } from "tailwind-merge";
import Icon from "@/components/Icon";

type FieldProps = {
  className?: string;
  classInput?: string;
  label?: string;
  textarea?: boolean;
  note?: string;
  type?: string;
  value: string;
  onChange: any;
  placeholder?: string;
  required?: boolean;
  icon?: string;
};

const Field = ({
  className,
  classInput,
  label,
  textarea,
  note,
  type,
  value,
  onChange,
  placeholder,
  required,
  icon,
}: FieldProps) => {
  const handleKeyDown = (event: any) => {
    const remainingChars = 880 - value.length;
    if (remainingChars <= 0 && event.key !== "Backspace") {
      event.preventDefault();
    }
  };

  const remainingChars = 880 - value.length;

  return (
    <div className={`${className}`}>
      <div className="">
        {label && (
          <div className="base2 mb-2 flex font-semibold">
            {label}
            {textarea && (
              <span className="ml-auto pl-4 text-n-4/50">{remainingChars}</span>
            )}
          </div>
        )}
        <div className="relative">
          {textarea ? (
            <textarea
              className={`base2 h-24 w-full resize-none rounded-xl border-2 border-n-2 bg-n-2 px-3.5  py-3 text-n-7 outline-none transition-colors placeholder:text-n-4/50 focus:bg-transparent dark:border-n-6 dark:bg-n-6 dark:text-n-3 dark:focus:bg-transparent ${
                icon && "pl-[3.125rem]"
              } ${value !== "" && "border-n-3/50 bg-transparent"}`}
              value={value}
              onChange={onChange}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              required={required}
            ></textarea>
          ) : (
            <input
              className={twMerge(
                `base2 h-13 w-full rounded-xl border-2 border-n-2 bg-n-2 px-3.5  text-n-7 outline-none transition-colors placeholder:text-n-4/50 focus:bg-transparent dark:border-n-6 dark:bg-n-6 dark:text-n-3 dark:focus:bg-transparent ${
                  icon && "pl-[3.125rem]"
                } ${
                  value !== "" && "border-n-3/50 bg-transparent"
                } ${classInput}`
              )}
              type={type || "text"}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              required={required}
            />
          )}
          <Icon
            className={`pointer-events-none absolute left-4 top-3.5 fill-n-4/50 transition-colors ${
              value !== "" && "fill-n-4"
            }`}
            name={icon}
          />
        </div>
        {note && <div className="base2 mt-2 text-n-4/50">{note}</div>}
        {/*<div className="mt-2 caption2 text-accent-1">*/}
        {/*    Email is incorrect*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default Field;
