import React, { FC } from 'react';
import { constants } from 'ethers';
import { useReservoirClient } from '@reservoir0x/reservoir-kit-ui';
import BscIcon from './BscIcon';
import AvalancheIcon from './AvalancheIcon';
import PolygonIcon from './PolygonIcon';
import EthIcon from './EthIcon';
// import ChainFlow from '@components/ChainFlow.tsx';

type Props = {
    address: string;
    chainId?: number;
    classes?: string;
    symbol?: string;
    width?: number;
    height?: number;
} & Parameters<any>['0'];

const CryptoCurrencyIcon: FC<Props> = ({ address = constants.AddressZero, chainId, classes, width, height, symbol }) => {
    const client = useReservoirClient();
    const chain = client?.chains?.find((chain) => (chainId !== undefined ? chain.id === chainId : chain.active));
    if (symbol) {
        return (
            <>
                {symbol === 'BNB' && <BscIcon classNames={`h-5 w-5  !flex-shrink-0`} />}
                {symbol === 'AVAX' && <AvalancheIcon classNames={`h-5 w-5 !flex-shrink-0 `} />}
                {symbol === 'MATIC' && <PolygonIcon classNames={`h-5 w-5  !flex-shrink-0 `} />}
                {symbol === 'ETH' && <EthIcon classNames={`h-5 w-5 !flex-shrink-0 `} />}
            </>
        );
    }
    return <img src={`${chain?.baseApiUrl}/redirect/currency/${address}/icon/v1`} className={classes} width={width} height={height} />;
};

export default CryptoCurrencyIcon;
