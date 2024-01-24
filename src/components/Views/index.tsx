import React from "react";
import Tooltip from "../Tooltip";
import { formatCount } from "@/utils/functions";

interface IProps {
  iconClass?: string;
  valueClass?: string;
  value?: number
}
const Views = ({ iconClass, valueClass, value }: IProps) => {
  return (
    <>
      <Tooltip text="Views">
        <div className="group flex cursor-pointer items-center gap-1">
          <i
            className={`${iconClass ? iconClass : "text-sm  text-white"
              } icon-views group-hover:!text-[#1d9bf0]`}
          ></i>
          <p
            className={`${valueClass ? valueClass : "text-xs text-white "
              }  group-hover:!text-[#1d9bf0]`}
          >
            {formatCount(value || 0)}
          </p>
        </div>
      </Tooltip>
    </>
  );
};
export default Views;
