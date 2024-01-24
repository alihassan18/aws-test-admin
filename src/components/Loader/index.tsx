import React from 'react';
import { ColorRing } from 'react-loader-spinner';

interface LoaderProps {
    width?: number | string;
    height?: number | string;
}

const Loader: React.FC<LoaderProps> = ({ width, height }) => {
    return (
        <div className=" inline-block">
            <ColorRing
                visible={true}
                height={height ? height : '70'}
                width={width ? width : '70'}
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#F1C94A', '#F1C94A', '#F1C94A', '#F1C94A', '#F1C94A']}
            />
        </div>
    );
};

export default Loader;
