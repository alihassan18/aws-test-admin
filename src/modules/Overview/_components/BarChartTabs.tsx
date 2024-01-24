import React from "react";

interface IProps {
  selectedTabIdx: number;
  // eslint-disable-next-line no-unused-vars
  setSelectedTabIdx: (toggle: number) => void;
  setDuration: Function;
}

const tabs = [
  { name: "1m", current: false, val: "1_MONTH" },
  // { name: "3m", current: false, val: "3_MONTH" },
  // { name: "1y", current: false, val: "12_MONTH" },
  // { name: "All", current: false, val: "" },
];

const BarChartTabs = ({
  setSelectedTabIdx,
  selectedTabIdx,
  setDuration,
}: IProps) => {
  return (
    <div>
      <nav
        className="flex items-center overflow-hidden rounded lg:w-full"
        aria-label="Tabs"
      >
        {tabs.map((tab, i) => (
          <a
            key={tab.name}
            className={`
                ${
                  i === selectedTabIdx
                    ? "bg-[#B5B5B5] text-secondary "
                    : " text-secondary bg-secondary/50"
                }
                cursor-pointer  px-3 py-2 text-xs leading-tight focus:outline-none`}
            onClick={() => {
              setSelectedTabIdx(i);
              setDuration(tab.val);
            }}
          >
            {tab.name}
          </a>
        ))}
      </nav>
    </div>
  );
};
export default BarChartTabs;
