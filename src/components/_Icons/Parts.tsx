import React from 'react';

interface IProps {
    classNames?: string;
}

const Parts = ({ classNames }: IProps) => {
    return (
        <svg width="10" height="10" className={`${classNames ? classNames : ''}`} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0.5 4.1325V8.52589C0.5 9.06089 0.9077 9.5 1.4012 9.5H5.8016C6.2951 9.5 6.7004 9.06024 6.7004 8.52589V4.1325C6.7004 3.59751 6.2948 3.15612 5.8016 3.15612H1.4012C0.9077 3.15612 0.5 3.59783 0.5 4.1325ZM4.2998 0.5C3.7508 0.5 3.3014 0.989491 3.3014 1.58429V2.50542H5.8016C6.626 2.50542 7.3004 3.2416 7.3004 4.1325V6.84388H8.501C9.05 6.84388 9.5 6.35439 9.5 5.75959V1.58429C9.5 0.989491 9.05 0.5 8.501 0.5H4.2998Z"
                fill="white"
            />
        </svg>
    );
};

export default Parts;
