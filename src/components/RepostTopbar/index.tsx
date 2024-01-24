import React from "react";
import clsx from "clsx";
interface IProps {
  className?: string;
  icon?: string;
  children: React.ReactNode;
  style?: string;
}
const RepostTopbar = ({ className, icon, children, style }: IProps) => {
  return (
    <div
      className={clsx(
        className,
        "border-b p-3 border-borderColor bg-grayColor"
      )}
    >
      <div className="flex items-center gap-2">
        <i className={clsx(icon, "leading-0 text-lightGray")}></i>
        <h2
          className={clsx(
            style,
            "font-display text-sm font-semibold text-lightGray"
          )}
        >
          {children}
        </h2>
      </div>
    </div>
  );
};

export default RepostTopbar;
