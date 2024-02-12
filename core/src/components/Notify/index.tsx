import Icon from "@/components/Icon";

type NotifyProps = {
  className?: string;
  iconCheck?: boolean;
  iconDelete?: boolean;
  children: React.ReactNode;
};

const Notify = ({
  className,
  iconCheck,
  iconDelete,
  children,
}: NotifyProps) => (
  <div
    className={`flex items-center rounded-2xl bg-n-7 p-4 text-n-1 md:-mb-5 ${className}`}
  >
    {iconCheck && (
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-2">
        <Icon className="fill-n-7" name="check-thin" />
      </div>
    )}
    {iconDelete && (
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-1">
        <Icon className="fill-n-1" name="trash" />
      </div>
    )}
    {children}
  </div>
);

export default Notify;
