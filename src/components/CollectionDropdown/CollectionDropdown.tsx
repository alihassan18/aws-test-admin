import React from "react";
import OutSideClick from "react-outside-click-handler";
import FormCheck from "../Forms/FormCheck";
const CollectionData = [
  "Azuki",
  "Bored Ae Yacht Club",
  "Genesis",
  "Moon Birds",
  "Valhalla",
];

interface IProps {
  collection?: boolean;
  setCollection(state: boolean): void;
}

const CollectionDropdown = ({ collection, setCollection }: IProps) => {
  return (
    <OutSideClick
      onOutsideClick={() => {
        setCollection(false);
      }}
    >
      {collection && (
        <div
          className={
            "AtShadowEffect absolute top-9 w-[20rem] rounded-md border border-borderColor bg-bgColor"
          }
        >
          <div className="relative flex w-full items-center justify-between rounded-t border-b  p-3 border-borderColor bg-grayColor">
            <div className="flex items-center gap-x-1.5">
              <i className="icon-collection text-base text-secondary"></i>
              <p className="font-display text-sm font-semibold capitalize text-secondary">
                Collection
              </p>
            </div>
            <p className="cursor-pointer font-display text-xs capitalize text-secondary">
              Select all
            </p>
          </div>
          <ul className="pt-3 pb-3">
            {CollectionData.map((item, i) => (
              <label
                className="flex cursor-pointer items-center justify-between px-3 py-0.5 hover:bg-darkColor"
                key={i + "cc"}
              >
                <p className="ml-2 capitalize dark:text-gary01">{item}</p>
                <FormCheck label={""} className="mt-1" />
              </label>
            ))}
          </ul>
        </div>
      )}
    </OutSideClick>
  );
};

export default CollectionDropdown;
