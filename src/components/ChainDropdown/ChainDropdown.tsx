import OutSideClick from "react-outside-click-handler";
import clsx from "clsx";
import React from "react";
import FormCheck from "../Forms/FormCheck";
import EthIcon from "../_Icons/EthIcon";

interface IProps {
  chain?: boolean;
  setChain(state: boolean): void;
}
interface IProps {
  className?: string;
}

const ChainsData = [
  {
    name: "Ethereum",
    src: <EthIcon />,
  },
  {
    name: "BNB Chain",
    src: <EthIcon />,
  },
  {
    name: "Polygon",
    src: <EthIcon />,
  },

  {
    name: "Avalanche",
    src: <EthIcon />,
  },
];

const ChainDropdown = ({ chain, setChain }: IProps) => {
  return (
    <OutSideClick
      onOutsideClick={() => {
        setChain(false);
      }}
    >
      {chain && (
        <div
          className={clsx(
            `absolute top-9 w-[20rem] rounded-md border  border-borderColor bg-bgColor `
          )}
        >
          <div className="relative flex w-full items-center justify-between rounded-t border-b   p-3 border-borderColor bg-grayColor">
            <div className="flex items-center gap-x-1.5">
              <i className="icon-blockchain text-base text-secondary"></i>
              <p className="font-display text-sm font-semibold capitalize text-secondary">
                Blockchain
              </p>
            </div>
            <p className="cursor-pointer font-display text-xs capitalize text-secondary">
              Select all
            </p>
          </div>
          <ul className="pt-3 pb-3">
            {ChainsData.map((chainOption, i) => (
              <label
                className="flex cursor-pointer items-center  justify-between   px-3 py-1 hover:bg-darkColor"
                key={i + "k"}
              >
                <span className={`flex cursor-pointer items-center`}>
                  {chainOption.src}
                  <p className="ml-2 capitalize dark:text-gary01">
                    {chainOption?.name}
                  </p>
                </span>

                <FormCheck name="supportedChains" label={""} className="mt-1" />
              </label>
            ))}
          </ul>
        </div>
      )}
    </OutSideClick>
  );
};

export default ChainDropdown;
