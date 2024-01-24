import { useRef, useEffect } from 'react';
import CreatorDetailHover from 'src/modules/home/components/CreatorDetailHover';
import { createPopper } from '@popperjs/core';

interface IProps {
    children: React.ReactNode;
    className?: string;
}

const CreatorHover = ({ children, className }: IProps) => {
    const popcorn = useRef(null);
    const tooltip = useRef(null);
    useEffect(() => {
        createPopper(popcorn?.current, tooltip?.current, {
            placement: 'bottom',
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 1]
                    }
                }
            ]
        });
    }, [popcorn]);

    return (
        <div className="group inline-block">
            <div className={`${className} relative`} ref={popcorn}>
                {children}
            </div>
            <div
                className={`hover-card DropDownShadow invisible absolute  z-[999] w-[14rem] rounded-md bg-white p-3 group-hover:visible dark:bg-gray17
`}
                ref={tooltip}
            >
                <CreatorDetailHover />
            </div>
        </div>
    );
};

export default CreatorHover;
