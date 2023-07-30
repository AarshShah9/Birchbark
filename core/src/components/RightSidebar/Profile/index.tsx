import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "@/components/Image";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";
import Settings from "@/components/Settings";

import { settings } from "@/constants/settings";

type ProfileProps = Record<string, never>;

const Profile = ({}: ProfileProps) => {
  const [visibleSettings, setVisibleSettings] = useState<boolean>(false);

  const menu = [
    {
      title: "New version available",
      icon: "arrow-down-circle",
      onClick: () => console.log("New version available"),
    },
    {
      title: "Settings",
      icon: "settings-fill",
      onClick: () => setVisibleSettings(true),
    },
    {
      title: "Log out",
      icon: "logout",
      onClick: () => console.log("Log out"),
    },
  ];

  return (
    <>
      <div className="relative z-10 mr-8 lg:mr-6 md:static">
        <Menu>
          <Menu.Button className="ui-open:shadow-[0_0_0_0.25rem_#0084FF] group relative h-10 w-10 rounded-full transition-shadow">
            <Image
              className="rounded-full object-cover"
              src="/images/avatar.jpg"
              fill
              alt="Avatar"
            />
            <div className="absolute -bottom-0.75 -right-0.75 h-4.5 w-4.5 rounded-full border-4 border-n-1 bg-primary-2 dark:border-n-6"></div>
          </Menu.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="absolute -right-5 top-full mt-[0.9375rem] w-[19.88rem] rounded-2xl border border-n-2 bg-n-1 p-4 shadow-[0px_48px_64px_-16px_rgba(0,0,0,0.25)] dark:border-n-5 dark:bg-n-7 md:-right-38 md:w-[calc(100vw-4rem)]">
              <div className="mb-3 flex items-center">
                <div className="relative h-15 w-15">
                  <Image
                    className="rounded-full object-cover"
                    src="/images/avatar.jpg"
                    fill
                    alt="Avatar"
                  />
                  <div className="absolute bottom-0 right-0 h-4.5 w-4.5 rounded-full border-4 border-n-1 bg-primary-2 dark:border-n-7"></div>
                </div>
                <div className="pl-4">
                  <div className="h6">Tran Mau Tri Tam</div>
                  <div className="caption1 text-n-4">
                    Lead visual designer at UI8
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-n-2 px-4 dark:bg-n-6">
                {menu.map((item, index) => (
                  <Menu.Item key={index}>
                    <button
                      className="group base2 flex h-12 w-full items-center font-semibold transition-colors hover:text-primary-1"
                      onClick={item.onClick}
                    >
                      <Icon
                        className="mr-4 fill-n-4 transition-colors group-hover:fill-primary-1"
                        name={item.icon}
                      />
                      {item.title}
                    </button>
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <Modal
        className="md:!p-0"
        classWrap="max-w-[48rem] md:min-h-screen-ios md:rounded-none"
        classButtonClose="hidden md:block md:absolute md:top-5 md:right-5 dark:fill-n-4"
        classOverlay="md:bg-n-1"
        visible={visibleSettings}
        onClose={() => setVisibleSettings(false)}
      >
        <Settings items={settings} />
      </Modal>
    </>
  );
};

export default Profile;
