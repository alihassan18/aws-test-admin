import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import { BLOCK_USER_BY_ADMIN } from "@/graphql/user";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import BasicModal from "@/Modals/BasicModal";
import ViewActivityModal from "@/Modals/ViewActivityModal";
import CollectionDetailModal from "@/Modals/CollectionDetailModal";
import { IUser } from "@/interfaces/user.interface";

interface IProps {
  Data: Array<{ data: number, title: string , callback: Function }>;
  className?: string;
}

const MoreOptionActions = ({ Data }: IProps) => {
  const [popup, setPopup] = useState(false);


  return (
    <>
      <Menu
        as="div"
        className="relative inline-block w-full text-left md:w-auto "
      >
        <Menu.Button className="group">
          <div
            className={` flex h-6 w-6 items-center justify-center`}
          >
            <i
              className={`icon-more flex h-6 w-6 items-center justify-center py-2 text-sm text-borderColor hover:rounded-[2px] hover:bg-primary/20 hover:px-2 hover:text-black group-hover:text-primary`}
            ></i>
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
          <Menu.Items
            className={clsx(
              "AtShadowEffect absolute right-0 z-20 mt-1 w-[224px] origin-top-right cursor-pointer overflow-hidden rounded-md  bg-bgColor"
            )}
          >
            {Data?.map((item: any, i: any) => (
              <Menu.Item key={i + "c"}>
                {({ active }) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 border-b  px-4 py-3 last:!border-transparent border-borderColor hover:bg-darkColor"
                    onClick={() => {
                      item.callback && item.callback(item.data);
                    }}
                  >
                    <span
                      className={clsx(
                        active ? "" : "",
                        "block text-sm text-white"
                      )}
                    >
                      {item.title}
                    </span>
                  </div>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};
export default MoreOptionActions;
