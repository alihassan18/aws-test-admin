import React from "react";
import Tooltip from "../Tooltip";

interface IProps {
  iconClass?: string;
  valueClass?: string;
  value?:number
}

const Likes = ({ iconClass, valueClass,value }: IProps) => {
  return (
    <>
      <Tooltip text="Likes">
        <div className="group flex cursor-pointer items-center gap-1">
          <i
            className={`${
              iconClass ? iconClass : "text-sm  text-white"
            } icon-like group-hover:!text-[#d60000]`}
          ></i>
          <p
            className={`${
              valueClass ? valueClass : "text-xs text-white "
            }  group-hover:!text-[#d60000]`}
          >
            {value || 0}
          </p>
        </div>
      </Tooltip>
    </>
  );
};
export default Likes;
