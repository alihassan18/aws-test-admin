import clsx from "clsx";
import React from "react";

interface IProps {
  icon: string;
  title: string;
  counts: number;
}

const TotalCounts = ({ icon, title, counts }: IProps) => {
  return (
    <div className="p-3 border border-borderColor rounded-2xl flex gap-8 items-center h-[6.75rem]">
      <div className="h-12 w-12 rounded-full flex-shrink-0 border border-borderColor flex justify-center items-center">
        <i className={clsx(icon, "text-white text-base")}></i>
      </div>
      <div>
        <p className="capitalize">{title}</p>
        <h3 className="text-white text-3xl mt-1 font-semibold">{counts}</h3>
      </div>
    </div>
  );
};

export default TotalCounts;
