import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";
import clsx from "clsx";

interface IData {
  name: string;
}

interface IProps {
  selected: IData | null | undefined;
  // eslint-disable-next-line no-unused-vars
  setSelected: (value: IData) => void;
  Data: IData[];
  iconClass?: string;
  placeholder?: string;
  dropStyle?: string;
  className?: string;
}

export default function SelectComponent({
  Data,
  iconClass,
  placeholder,
  selected,
  setSelected,
  dropStyle,
  className,
}: IProps) {
  return (
    <Listbox as="div" value={selected} onChange={setSelected}>
      <div className="relative">
        <Listbox.Button
          className={`${className} relative flex w-full  items-center justify-between rounded-md border py-1.5 pl-3 pr-14 text-left text-sm focus:outline-none border-borderColor bg-bgColor`}
        >
          <div
            className={clsx(
              placeholder && "text-secondary",
              `flex items-center gap-2 truncate text-white `
            )}
            title={selected?.name || placeholder}
          >
            {selected?.name || placeholder}
          </div>
          <span className="pointer-events-none absolute inset-y-1/2 right-2 flex items-center ">
            <i
              className={`${iconClass ? iconClass : ""} text-xl text-secondary`}
              aria-hidden="true"
            >
              <IoIosArrowDown />
            </i>
          </span>
        </Listbox.Button>

        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options
            className={`${dropStyle} AtScrollHide absolute z-10 mt-1 max-h-[20.5rem] w-full overflow-auto rounded-md 
                                 border py-1 text-sm focus:outline-none border-borderColor bg-bgColor`}
          >
            {Data.map((item: IData, Idx: number) => {
              return (
                <Listbox.Option
                  key={item.name + "aaa"}
                  className={({ active }: { active: boolean }) =>
                    `relative cursor-pointer select-none  py-1.5 px-3 ${
                      active ? "bg-darkColor" : ""
                    } first-letter:first-line:marker:
                                            ${
                                              Idx == Data.length - 1
                                                ? ""
                                                : "border-b border-borderColor"
                                            }
                                            `
                  }
                  value={item}
                >
                  <div className="flex items-center gap-2 truncate text-white">
                    {item.name}
                  </div>
                </Listbox.Option>
              );
            })}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
