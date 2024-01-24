import clsx from "clsx";
import React from "react";

interface PProps {
  left: string;
  right: string;
  top: string;
  bottom: string;
}
interface IProps {
  text: string | React.ReactNode;
  children: React.ReactNode;
  position?: "left" | "right" | "top" | "bottom";
  classNames?: string | React.ReactNode;
  iconAlign?: boolean;
  disable?: boolean;
}

const Tooltip = ({
  text,
  children,
  classNames,
  iconAlign,
  position = "top",
  disable = false,
}: IProps) => {
  const positionStyle: PProps = {
    left: `top-1/2 right-[110%] -translate-y-1/2 before:top-1/2 before:left-full before:-translate-y-1/2 ${
      disable ? "before:border-l-secondary1" : "before:border-l-primary"
    }`,
    right: `top-1/2 left-[120%] -translate-y-1/2 before:top-1/2 before:right-full before:-translate-y-1/2 ${
      disable ? "before:border-r-secondary1" : "before:border-r-primary"
    }`,
    top: `-translate-x-1/2 -top-7 left-1/2 before:left-1/2 before:top-full before:-translate-x-1/2 ${
      disable ? "before:border-t-secondary1" : "before:border-t-primary"
    }`,
    bottom: `-translate-x-1/2 -bottom-7 left-1/2 before:left-1/2 before:bottom-full before:-translate-x-1/2 ${
      disable ? "before:border-b-secondary1" : "before:border-b-primary"
    }`,
  };

  return (
    <span className="group relative leading-0">
      <span
        className={clsx(
          positionStyle[position],
          classNames,
          `pointer-events-none absolute z-50 whitespace-nowrap rounded px-2 py-0.5 font-display text-xs font-bold capitalize text-black opacity-0 transition before:absolute before:border-[6px] before:border-transparent  before:content-[''] group-hover:opacity-100 ${
            disable ? "bg-secondary1" : "bg-primary"
          }`,
          iconAlign && "ml-4 before:left-5"
        )}
      >
        {text}
      </span>
      {children}
    </span>
  );
};

export default Tooltip;
