import React from 'react';

interface IProps {
    classNames?: string;
}

const DropMenue = ({ classNames }: IProps) => {
    return (
        <svg className={`${classNames ? classNames : ''}`} width="16" height="15" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 1C0 0.447715 0.447715 0 1 0H13C13.5523 0 14 0.447715 14 1C14 1.55228 13.5523 2 13 2H1C0.447715 2 0 1.55228 0 1Z"
                fill="white"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 6C0 5.44772 0.447715 5 1 5H13C13.5523 5 14 5.44772 14 6C14 6.55228 13.5523 7 13 7H1C0.447715 7 0 6.55228 0 6Z"
                fill="white"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 11C0 10.4477 0.447715 10 1 10H13C13.5523 10 14 10.4477 14 11C14 11.5523 13.5523 12 13 12H1C0.447715 12 0 11.5523 0 11Z"
                fill="white"
            />
        </svg>

        // <svg className={`${classNames ? classNames : ''}`} width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        //     <path
        //         d="M10.5632 9.06116C9.72033 9.57069 8.74404 9.88126 7.68947 9.88126C6.62707 9.88126 5.64331 9.56724 4.79663 9.05078C1.98444 10.1942 0 12.9499 0 16.1726V21.0659H11.3833C11.2664 20.6165 11.1847 20.1534 11.1847 19.6679C11.1847 17.1535 12.8638 15.0465 15.1512 14.3449C14.5618 11.9309 12.8271 9.98011 10.5632 9.06116Z"
        //         fill="#F1C94A"
        //     />
        //     <path
        //         d="M11.8827 4.28746C11.8827 1.97097 10.0049 0 7.6884 0C5.37191 0 3.49414 1.97097 3.49414 4.28746C3.49414 6.60395 5.37191 8.48172 7.6884 8.48172C10.0049 8.48172 11.8827 6.60395 11.8827 4.28746Z"
        //         fill="#F1C94A"
        //     />
        //     <circle cx="16.7782" cy="19.8075" r="4.19426" fill="#34D399" />
        // </svg>
    );
};

export default DropMenue;
