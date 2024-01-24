import React from 'react';

interface IProps {
    classNames?: string;
}

const WarningDelete = ({ classNames }: IProps) => {
    return (
        <svg className={`${classNames ? classNames : ''}`} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="6" fill="#F14A4A" />
            <path
                d="M24.0015 21V23M24.0015 27H24.0115M17.0733 31H30.9297C32.4693 31 33.4316 29.3333 32.6618 28L25.7336 16C24.9637 14.6667 23.0392 14.6667 22.2694 16L15.3412 28C14.5714 29.3333 15.5337 31 17.0733 31Z"
                stroke="white"
                stroke-width="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default WarningDelete;
