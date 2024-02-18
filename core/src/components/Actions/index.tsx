import { Menu, Transition } from "@headlessui/react";
import Icon from "@/components/Icon";

type ActionsProps = {
  className?: string;
  classButton: string;
  classTitle?: string;
  buttonInner: React.ReactNode;
  title: string;
  children: React.ReactNode;
};

const Actions = ({
  className,
  classButton,
  classTitle,
  buttonInner,
  title,
  children,
}: ActionsProps) => {
  return (
    <>
      <div className={`ui-open:z-10 relative z-3 ${className}`}>
        <Menu>
          {({ close }) => (
            <>
              <Menu.Button className={`${classButton} btn-small`}>
                {buttonInner}
              </Menu.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Menu.Items className="absolute -left-2 bottom-11 w-[19.5rem] rounded-xl bg-n-1 p-4 shadow-[0_2rem_3rem_-0.25rem_rgba(0,0,0,0.2),0_0_2rem_0.25rem_rgba(0,0,0,0.05)] outline-none dark:bg-n-7">
                  <div className="mb-3 flex items-center justify-between">
                    <div className={`base1 ${classTitle}`}>{title}</div>
                    <button className="group h-8 w-8 text-0" onClick={close}>
                      <Icon
                        className="fill-n-4 transition-colors group-hover:fill-accent-1"
                        name="close"
                      />
                    </button>
                  </div>
                  {children}
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </>
  );
};

export default Actions;
