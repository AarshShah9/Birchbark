import Icon from "@/components/Icon";

type CheckboxProps = {
  className?: string;
  label?: string;
  value: any;
  onChange: any;
  reverse?: boolean;
};

const Checkbox = ({
  className,
  label,
  value,
  onChange,
  reverse,
}: CheckboxProps) => (
  <label
    className={`group relative flex cursor-pointer select-none items-start tap-highlight-color ${
      reverse && "flex-row-reverse"
    } ${className}`}
  >
    <input
      className="invisible absolute left-0 top-0 opacity-0"
      type="checkbox"
      value={value}
      onChange={onChange}
      checked={value}
    />
    <span
      className={`relative flex h-6 w-6 shrink-0 items-center justify-center rounded border-2 border-n-3 transition-colors group-hover:border-primary-1 dark:border-n-5 ${
        value ? "border-primary-1 bg-primary-1" : "bg-transparent"
      }`}
    >
      <Icon
        className={`h-4.5 w-4.5 fill-n-1 transition-opacity ${
          value ? "opacity-100" : "opacity-0"
        }`}
        name="check"
      />
    </span>
    {label && (
      <span
        className={`base2 text-n-6 dark:text-n-3 ${
          reverse ? "mr-auto pr-3" : "pl-3"
        }`}
      >
        {label}
      </span>
    )}
  </label>
);

export default Checkbox;
