import React from 'react';

interface IProps {
    classNames?: string;
}

const BscIcon = ({ classNames }: IProps) => {
    return (
        <svg className={`${classNames ? classNames : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="6" fill="#E8B30B" />
            <path
                d="M9.2812 10.8828L12 8.164L14.7202 10.8842L16.3022 9.3022L12 5L7.6992 9.3008L9.2812 10.8828ZM5 12L6.582 10.418L8.164 12L6.582 13.582L5 12ZM9.2812 13.1172L12 15.836L14.7202 13.1158L16.3022 14.6971L12 19L7.6992 14.6992L7.6971 14.6971L9.2812 13.1172ZM15.836 12L17.418 10.418L19 12L17.418 13.582L15.836 12ZM13.6044 11.9986H13.6058V12L12 13.6058L10.3963 12.0028L10.3935 12L10.3963 11.9979L10.677 11.7165L10.8135 11.58L12 10.3942L13.6051 11.9993L13.6044 11.9986Z"
                fill="#F7F7F7"
            />
        </svg>
    );
};

export default BscIcon;
