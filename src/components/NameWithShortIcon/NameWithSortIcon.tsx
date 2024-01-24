import React from "react";

interface Iprops {
  name: string;
  className?: string;
  hideIcon?: boolean;
}

const NameWithSortIcon = ({ name, className, hideIcon }: Iprops) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <span className={`${className}`}>{name}</span>
      <div className="flex flex-col">
        {hideIcon ? (
          " "
        ) : (
          <i className="icon-arrow-down cursor-pointer text-[6px] hover:text-primary"></i>
        )}
      </div>
    </div>
  );
};

export default NameWithSortIcon;
