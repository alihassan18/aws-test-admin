import React from "react";
import Tooltip from "../Tooltip";

interface IProps {
  iconClass?: string;
  valueClass?: string;
  repostCount?: number;
}

const Repost = ({ iconClass, valueClass, repostCount }: IProps) => {
  return (
    <Tooltip text="Repost">
      <div className="group flex cursor-pointer items-center gap-1">
        <i
          className={`${
            iconClass ? iconClass : "text-sm text-white"
          } icon-reposts group-hover:!text-[#02885b]`}
        ></i>
        <p
          className={`${
            valueClass ? valueClass : "text-xs text-white"
          }   group-hover:!text-[#02885b]`}
        >
          {repostCount || 0}
        </p>
      </div>
    </Tooltip>
  );
};

export default Repost;
