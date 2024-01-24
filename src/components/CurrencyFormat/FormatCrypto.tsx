import { formatBN } from '@utils/numbers';
import { BigNumberish } from 'ethers';
import React, { FC } from 'react';

type Props = {
    amount: BigNumberish | null | undefined;
    maximumFractionDigits?: number;
    decimals?: number;
    className?: string;
    parentClass?: string;
    // css?: string;
    // textStyle?: any;
    children?: React.ReactNode;
};

const FormatCrypto: FC<Props> = ({ amount, maximumFractionDigits = 2, decimals = 18, children, className, parentClass }) => {
    const value = formatBN(amount, maximumFractionDigits, decimals);

    return (
        <div className={` ${parentClass ? parentClass : ''} flex items-center justify-end gap-1`}>
            {value !== '-' ? children : null}
            <p className={`${className} text-xs font-bold text-lightText dark:!text-white`}>{value}</p>
            {/* <span className="fo  text-xs text-secondary ">($0) </span> */}

            {/* <p className={`${className} text-xs font-bold text-lightText dark:text-white`}>{toFixedNumber(value)} ETH</p> */}
        </div>
    );
};

export default FormatCrypto;
