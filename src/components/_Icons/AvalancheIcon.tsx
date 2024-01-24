import React from 'react';

interface IProps {
    classNames?: string;
}

const AvalancheIcon = ({ classNames }: IProps) => {
    return (
        <svg className={`${classNames ? classNames : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="#E84142" />
            <path
                d="M16.2343 13.5905C16.601 12.9263 17.1928 12.9263 17.5596 13.5905L19.8435 17.794C20.2102 18.4582 19.9102 19 19.1766 19H14.5755C13.8503 19 13.5503 18.4582 13.9087 17.794L16.2343 13.5905ZM11.8165 5.49813C12.1833 4.83396 12.7667 4.83396 13.1335 5.49813L13.6419 6.45943L14.8422 8.67041C15.134 9.29963 15.134 10.0424 14.8422 10.6717L10.8163 17.9863C10.4495 18.5805 9.84101 18.9563 9.16585 19H5.82336C5.08985 19 4.78977 18.4669 5.15653 17.794L11.8165 5.49813Z"
                fill="white"
            />
        </svg>
    );
};

export default AvalancheIcon;
