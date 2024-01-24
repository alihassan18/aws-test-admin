import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { IoMdClose } from "react-icons/io";
import localFont from "next/font/local";

interface IProps {
  className?: string;
  children: React.ReactNode;
  show: boolean;
  icon?: string;
  // eslint-disable-next-line no-unused-vars
  hide: (value: boolean) => void;
  parentClass?: string;
}

const proxima = localFont({
  src: [
    {
      path: "../../public/assets/fonts/ProximaNova-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/ProximaNova-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/ProximaNova-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/ProximaNova-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-proxima",
});
export default function BasicModal({
  show,
  hide,
  children,
  className,
  icon,
  parentClass,
}: IProps) {
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-[100] flex transform items-center justify-center transition-all"
        onClose={hide}
      >
        <div className="flex min-h-screen items-center justify-center  px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child>
            <Dialog.Overlay className="transition-opacity-0 fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>
          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            className={`AtScrollHide absolute top-1/2 left-1/2 flex h-screen -translate-y-1/2 -translate-x-1/2 transform items-center justify-center overflow-y-auto rounded-md bg-transparent transition-all ${parentClass}`}
            enter={`${
              !parentClass && "transition transform duration-200 ease-linear"
            } `}
            enterFrom={`${!parentClass && "translate-y-0"}`}
            enterTo={`${!parentClass && "-translate-y-1/2"} `}
            leave={`!parentClass && 'transition transform duration-200 ease-linear'`}
          >
            <div
              className={`${className} ${proxima.variable} inline-block w-full transform rounded-md  text-left align-top !font-display transition-all bg-bgColor sm:w-auto sm:align-middle xs:w-full `}
            >
              <div className={` ${icon} absolute top-[1.2rem]  right-3 z-30`}>
                <IoMdClose
                  className="h-6 w-6 cursor-pointer hover:text-gray-500 text-lightGray"
                  aria-hidden="true"
                  onClick={() => {
                    hide(false);
                  }}
                />
              </div>
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
