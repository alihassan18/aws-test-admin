import { slicedAddress } from "@/utils/functions";
import clsx from "clsx";
import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";

interface IProps {
    address: string;
    hide?: string;
    className?: string;
}

const WalletAddress = ({ address, hide, className }: IProps) => {
    return (
        <h5
            className={clsx(
                className,
                `capitalize} text-xs  text-white hover:!text-primary`
            )}
        >
            <span>{slicedAddress(address || "--")}</span>
            <CopyToClipboard
                text={address || "--"}
                onCopy={() => toast.success("Address successfully copied")}
            >
                <i
                    className={`${
                        hide == "hide" ? "hidden" : ""
                    } icon-copy ml-1  cursor-pointer hover:text-primary`}
                ></i>
            </CopyToClipboard>
        </h5>
    );
};

export default WalletAddress;
