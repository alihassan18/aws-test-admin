import React from 'react';

interface IProps {
    classNames?: string;
}

const EthIcon = ({ classNames }: IProps) => {
    return (
        <svg className={`${classNames ? classNames : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="#627EEA" />
            <path d="M12.2156 2V9.35437L18.4312 12.1322L12.2156 2Z" fill="white" fillOpacity="0.602" />
            <path d="M12.2157 2L6 12.1322L12.2157 9.35437V2Z" fill="white" />
            <path d="M12 16.6083V21.6055L18.2193 13L12 16.6083Z" fill="white" fillOpacity="0.602" />
            <path d="M12.2157 21.8945V16.8973L6 13.289L12.2157 21.8945Z" fill="white" />
            <path d="M12.2156 15.7405L18.4312 12.1322L12.2156 9.35437V15.7405Z" fill="white" fillOpacity="0.2" />
            <path d="M6 12.1322L12.2157 15.7405V9.35437L6 12.1322Z" fill="white" fillOpacity="0.602" />
        </svg>
    );
};

export default EthIcon;
