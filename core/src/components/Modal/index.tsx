import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import Icon from "@/components/Icon";

type ModalProps = {
  className?: string;
  classWrap?: string;
  classOverlay?: string;
  classButtonClose?: string;
  visible: boolean;
  onClose: () => void;
  initialFocus?: any;
  children: React.ReactNode;
  video?: boolean;
};

const Modal = ({
  className,
  classWrap,
  classOverlay,
  classButtonClose,
  visible,
  onClose,
  initialFocus,
  children,
  video,
}: ModalProps) => {
  return (
    <Transition show={visible} as={Fragment}>
      <Dialog
        initialFocus={initialFocus}
        className={`fixed inset-0 z-50 flex overflow-auto scroll-smooth p-6 md:px-4 ${className}`}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className={`fixed inset-0 ${
              video ? "bg-n-7/95" : "bg-n-7/75 dark:bg-n-6/90"
            } ${classOverlay}`}
            aria-hidden="true"
          />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom={`opacity-0 ${!video && "scale-95"}`}
          enterTo={`opacity-100 ${!video && "scale-100"}`}
          leave="ease-in duration-200"
          leaveFrom={`opacity-100 ${!video && "scale-100"}`}
          leaveTo={`opacity-0 ${!video && "scale-95"}`}
        >
          <Dialog.Panel
            className={twMerge(
              `relative z-10 m-auto w-full max-w-[37.5rem] rounded-3xl bg-n-1 dark:bg-n-7 ${
                video &&
                "static aspect-video max-w-[64rem] overflow-hidden rounded-[1.25rem] bg-n-7 shadow-[0_2.5rem_8rem_rgba(0,0,0,0.5)]"
              } ${classWrap}`
            )}
          >
            {children}
            <button
              className={twMerge(
                `fill-n-7 text-0 hover:fill-primary-1 ${
                  video &&
                  "absolute right-6 top-6 h-10 w-10 rounded-full bg-n-1"
                } ${classButtonClose}`
              )}
              onClick={onClose}
            >
              <Icon className="fill-inherit transition-colors" name="close" />
            </button>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default Modal;
