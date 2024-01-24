import React from 'react';

interface IProps {
    classNames?: string;
}

const TwitchIcon = ({ classNames }: IProps) => {
    return (
        <svg
            className={`${classNames ? classNames : ''} cursor-pointer`}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="24" height="24" rx="6" fill="#9146FF" />
            <path
                d="M17.2026 12.708L15.3496 14.4658H13.4941L11.8706 16.0039V14.4658H9.7832V7.87891H17.2026V12.708ZM9.31934 7L7 9.19482V17.1001H9.7832V19.2949L12.1025 17.1001H13.958L18.1304 13.1475V7H9.31934ZM15.8135 9.48535H14.8857V12.1196H15.8135V9.48535ZM12.3345 9.47314H13.2622V12.1074H12.3345V9.47314Z"
                fill="white"
            />
        </svg>
    );
};

export default TwitchIcon;
