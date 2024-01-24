import { Fragment, ReactNode } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { IoIosArrowDown } from 'react-icons/io';
import clsx from 'clsx';
import FormCheck from './FormCheck';

interface IData {
    icon?: ReactNode;
    name: string;
}

interface IProps {
    selected: IData[] | [];
    // eslint-disable-next-line no-unused-vars
    setSelected: (value: IData[]) => void;
    isSelected: (value: IData) => boolean;
    Data: IData[];
    iconClass?: string;
    placeholder?: string;
    dropStyle?: string;
    className?: string;
    InteractiveFilter?: boolean;
}

export default function MultiSelectComponent({
    Data,
    iconClass,
    placeholder,
    selected,
    setSelected,
    isSelected,
    InteractiveFilter,
    dropStyle,
    className
}: IProps) {
    return (
        <Listbox as="div" value={selected} onChange={setSelected} multiple>
            <div className="relative">
                <Listbox.Button
                    className={`${className} relative flex w-full items-center justify-between rounded-md border border-lightBorder bg-white py-2 pl-3 pr-14 text-left text-sm focus:outline-none dark:border-borderColor dark:bg-selectBg`}
                >
                    <div
                        className={clsx(placeholder && 'text-secondary', `flex items-center gap-2 truncate text-black dark:text-white `)}
                        title={(selected.length > 0 && selected?.map((item: IData) => item.name).join(', ')) || placeholder}
                    >
                        {(selected.length > 0 && selected?.map((item: IData) => item.name).join(', ')) || placeholder}
                    </div>
                    <span className="pointer-events-none absolute inset-y-1/2 right-2 flex items-center ">
                        <i className={`${iconClass ? iconClass : ''} text-xl text-secondary`} aria-hidden="true">
                            <IoIosArrowDown />
                        </i>
                    </span>
                </Listbox.Button>

                <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <Listbox.Options
                        className={`${dropStyle} AtScrollHide DropDownShadow absolute z-10 mt-1 max-h-[20.5rem] w-full overflow-auto rounded-md 
                                 border  border-lightBorder bg-white py-1 text-sm focus:outline-none dark:border-borderColor dark:bg-selectBg`}
                    >
                        {Data.map((item: IData, Idx: number) => {
                            return (
                                <Listbox.Option
                                    key={item.name + 'aaa'}
                                    className={({ active }: { active: boolean }) =>
                                        `relative cursor-pointer select-none  py-1.5 px-3 ${
                                            active ? 'bg-lightHover dark:bg-dark' : ''
                                        } first-letter:first-line:marker:
                                            ${Idx == Data.length - 1 ? '' : 'border-b border-lightBorder dark:border-borderColor'}
                                            `
                                    }
                                    value={item}
                                >
                                    {InteractiveFilter ? (
                                        <div className="flex items-center justify-between gap-2 truncate  text-secondary dark:text-white">
                                            {item.name}
                                            <FormCheck label="" checked={isSelected(item)} />
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2 truncate  text-secondary dark:text-white">
                                            {item.icon}
                                            {item.name}
                                        </div>
                                    )}
                                </Listbox.Option>
                            );
                        })}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    );
}
