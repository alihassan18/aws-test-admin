import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Sidebar from "../Dashboard/_components/Sidebar";
import { useRouter } from "next/router";
import NotificationDropdown from "@/components/NotificationDropdown";

function DashboardModule({ children }: any) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  return (
    <div>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex flex-1 w-full max-w-xs mr-16">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 flex justify-center w-16 pt-5 left-full">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="w-6 h-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <Sidebar />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <Sidebar />
        </div>

        <div className="lg:pl-72 ">
          <div className="sticky top-0 z-40 flex h-20 shrink-0  items-center gap-x-4 border-b border-borderColor mx-4 sm:mx-6 lg:mx-10 sm:gap-x-6">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </button>
            <div
              className="flex justify-between items-center h-full w-full"
              aria-hidden="true"
            >
              <p className="text-primary font-semibold capitalize text-2xl">
                {
                  // router.pathname === "/"
                  //   ? "Dashboard"
                  //   : router.pathname.includes('/') ? router.pathname.split('/')[2] :  router.pathname.substring(1)
                  router.pathname === "/"
                    ? "Dashboard"
                    : router.pathname.substring(1)
                }
              </p>
              {/* <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-200 hover:text-gray-300"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="w-6 h-6" aria-hidden="true" />
              </button> */}
            </div>
          </div>

          <main className="py-5 h-[calc(100vh_-_79px)] AtScrollHide overflow-auto">
            <div className="px-4 sm:px-6 lg:px-10">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default DashboardModule;
