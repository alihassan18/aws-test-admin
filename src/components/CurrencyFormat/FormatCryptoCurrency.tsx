import FormatCrypto from './FormatCrypto';
import React, { FC, ComponentProps } from 'react';
import { constants } from 'ethers';
import CryptoCurrencyIcon from '../_Icons/CryptoCurrencyIcon';

type FormatCryptoCurrencyProps = {
    height?: number;
    width?: number;
    chainId?: number;
    address?: string;
    symbol?: string;
    className?: string;
    parentClass?: string;
    icon?: string;
    EthText?: any;
    hideETHLable?: boolean;
};

type Props = ComponentProps<typeof FormatCrypto> & FormatCryptoCurrencyProps;
const FormatCryptoCurrency: FC<Props> = ({
    amount,
    className,
    address = constants.AddressZero,
    maximumFractionDigits,
    height = 14,
    width = 14,
    chainId,
    parentClass,
    symbol,
    icon,
    EthText,
    hideETHLable,
    // textStyle,
    // css,
    decimals = 2
}) => {
    return (
        <FormatCrypto
            amount={amount}
            maximumFractionDigits={maximumFractionDigits}
            decimals={decimals}
            parentClass={parentClass}
            className={className}
        >
            <CryptoCurrencyIcon
                address={address}
                height={height}
                width={width}
                chainId={chainId}
                symbol={symbol}
                classes={`${icon ? icon : ''} !flex-shrink-0`}
            />
            {!hideETHLable && EthText && <span className="text-xs font-bold text-secondary ">$ETH</span>}
        </FormatCrypto>
    );
};

export default FormatCryptoCurrency;
