import { twMerge } from "tailwind-merge";
import Icon from "@/components/Icon";

type MenuProps = {
  buttons: any;
  value: any;
  setValue: any;
};

const Menu = ({ buttons, value, setValue }: MenuProps) => {
  const handleClick = (value: any) => {
    setValue(value);
  };

  return buttons.map((button: any, index: number) => (
    <div className="mb-1" key={index}>
      {button.id === "delete-account" && (
        <div className="my-3 h-0.25 bg-n-3 dark:bg-n-6"></div>
      )}
      <button
        className={`group base2 flex w-full items-center rounded-full border-2 border-transparent px-3.5 py-1.5 font-semibold transition-colors tap-highlight-color hover:bg-n-2 dark:hover:bg-n-6 dark:hover:text-n-1 ${
          button.id === "delete-account"
            ? `!text-accent-1 ${
                value === button &&
                "!border-accent-1 !bg-n-1 dark:!bg-transparent"
              }`
            : `text-n-4 ${
                value === button &&
                "!border-primary-1 !bg-n-1 text-n-7 dark:!bg-transparent dark:text-n-1"
              }`
        }`}
        onClick={() => handleClick(button)}
      >
        <Icon
          className={`mr-3 h-4 w-4 transition-colors ${
            button.id === "delete-account"
              ? `!fill-accent-1`
              : `fill-n-4 ${
                  value === button &&
                  "fill-n-7 dark:fill-n-1 dark:group-hover:fill-n-1"
                }`
          }`}
          name={button.icon}
        />
        {button.title}
      </button>
    </div>
  ));
};

export default Menu;
