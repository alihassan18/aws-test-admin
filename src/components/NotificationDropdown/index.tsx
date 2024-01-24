import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import ImageComponent from "../ImageComponent";
import { BellIcon } from "@heroicons/react/24/outline";

export default function NotificationDropdown() {
  return (
    <>
      <Menu>
        <Menu.Button>
          <div className="w-8 h-8 rounded-full flex justify-center items-center bg-secondary">
            <BellIcon className="w-6 h-6 " aria-hidden="true" />
          </div>
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="AtShadowEffect  absolute right-0 mt-3 origin-top-left AtScrollHide max-h-[25rem] overflow-hidden  overflow-y-scroll rounded-lg border  border-borderColor bg-bgColor sm:w-[30rem]">
            <div className="flex items-center justify-between border-b sticky top-0 z-20  px-3 py-4 border-borderColor bg-grayColor">
              <div className="flex items-center gap-2">
                <BellIcon className="w-6 h-6" aria-hidden="true" />
                <p className="font-semibold text-white ">Notifications</p>
              </div>
            </div>
            {Array(20)
              .fill("")
              .map((_, i) => (
                <Menu.Item key={i}>
                  <div className="flex cursor-pointer justify-between py-2 px-3 hover:bg-darkColor">
                    <div className="flex items-center gap-x-3">
                      <ImageComponent
                        className="rounded-full object-cover"
                        src={"/assets/images/placeholder.png"}
                        alt=""
                        fill
                        figClassName="h-8 w-8 rounded-full"
                      />
                      <div>
                        <h3 className="text-xs font-bold text-white">
                          Ronald Richards
                          <span className="text-xs text-secondary ml-2">
                            1min
                          </span>
                        </h3>
                        <p className="text-xs text-left font-semibold text-secondary">
                          Liked your comment
                        </p>
                      </div>
                    </div>
                    <div className="h-2 w-2  rounded-full bg-primary"></div>
                  </div>
                </Menu.Item>
              ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
