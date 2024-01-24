import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import clsx from "clsx";

type Item = {
  title: string;
};

interface IProps {
  data?: Item[];
  className?: string;
  onSelect?: (
    item: Item
  ) => void | React.Dispatch<React.SetStateAction<undefined>>;
  selected: Item | undefined;
  placeholder?: string;
}
export default function SortSelect({
  data,
  className,
  onSelect,
  selected,
  placeholder,
}: IProps) {
  return (
    <>
      <Listbox value={selected} onChange={onSelect}>
        {({ open }) => (
          <>
            <div className={`relative w-[150px] `}>
              <Listbox.Button
                className={`${
                  className ? className : ""
                } relative flex h-full w-full cursor-pointer items-center justify-between  rounded-md  border  px-2 py-1.5 text-sm shadow-sm  focus:outline-none border-borderColor`}
              >
                <div className="flex items-center gap-2">
                  <span className="mr-2 block text-white">
                    {selected?.title || placeholder}
                  </span>
                </div>
                <span className="pointer-events-none  inset-y-0 right-0 flex items-center ">
                  <i className="icon-arrow-down text-[8px] text-white"></i>
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  className={`absolute z-50 mt-2 w-full overflow-hidden rounded-md bg-bgColor `}
                >
                  {data?.map((item: Item, i) => (
                    <Listbox.Option
                      key={item?.title}
                      className={({ active }) =>
                        clsx(
                          active ? "bg-darkColor" : "",
                          "relative cursor-pointer select-none text-sm text-white"
                        )
                      }
                      value={item}
                    >
                      {({ selected }) => (
                        <div
                          className={clsx(
                            selected ? "" : "font-normal",
                            i == data.length - 1
                              ? ""
                              : "border-b border-borderColor",
                            `flex  truncate items-center gap-2  px-4 py-2 `
                          )}
                        >
                          {item.title}
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </>
  );
}
