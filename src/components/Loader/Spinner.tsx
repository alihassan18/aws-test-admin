import clsx from 'clsx';
import React from 'react';
import { ImSpinner9 } from 'react-icons/im';
interface Iprops {
    className?: string;
}
const Spinner = ({ className }: Iprops) => {
    return (
        <div>
            <ImSpinner9 className={clsx('animate-spin text-2xl text-primary', className)} />
        </div>
    );
};

export default Spinner;
