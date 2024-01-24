import React from 'react';
import { useThemeContext } from 'src/contexts/ThemeContext';

interface IProps {
    classNames?: string;
    href?: string;
    icon?: boolean;
    disabled?: boolean;
    bgColor?: string;
    textColor?: string;
}

const Twitter = ({ classNames, href, bgColor, textColor, disabled }: IProps) => {
    const theme = useThemeContext();

    const getSvgFill = () => {
        if (disabled) {
            return '#4E4E57';
        } else {
            return textColor ? textColor : 'white';
        }
    };

    const getSvgBgColor = () => {
        if (disabled) {
            return '#D5D5D5';
        } else {
            return bgColor ? bgColor : theme === 'dark' ? '#000' : '#1DA1F2';
        }
    };

    const getSvgClassName = () => {
        let className = classNames ? classNames : '';

        if (disabled) {
            className += ' cursor-pointer';
        }

        return className;
    };

    if (!href) {
        return (
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={getSvgClassName()}>
                <rect width="60" height="60" rx="3" fill={getSvgBgColor()} />
                <path
                    d="M35.6829 21H38.7363L32.0657 28.625L39.913 39H33.7682L28.9556 32.7081L23.4482 39H20.3931L27.5278 30.8449L20 21H26.3004L30.6505 26.7517L35.6829 21ZM34.611 37.1724H36.3034L25.3815 22.7321H23.5657L34.611 37.1724Z"
                    fill={getSvgFill()}
                />
            </svg>
            // <svg width="24" height="24" viewBox="0 0 24 24" className={getSvgClassName()} fill="none" xmlns="http://www.w3.org/2000/svg">
            //     <rect width="24" height="24" rx="3" fill={getSvgBgColor()} />
            //     <path
            //         d="M16.9691 4.31995H19.6187L13.8301 10.8266L20.6399 19.6799H15.3075L11.1313 14.3108L6.3521 19.6799H3.70097L9.89231 12.7209L3.35986 4.31995H8.82717L12.6021 9.22811L16.9691 4.31995ZM16.0389 18.1204H17.5075L8.02978 5.79802H6.45407L16.0389 18.1204Z"
            //         fill={getSvgFill()}
            //     />
            // </svg>
        );
    }

    return (
        <a href={href} className={getSvgClassName()} target="_blank" rel="noopener noreferrer">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={getSvgClassName()}>
                <rect width="60" height="60" rx="3" fill={getSvgBgColor()} />
                <path
                    d="M35.6829 21H38.7363L32.0657 28.625L39.913 39H33.7682L28.9556 32.7081L23.4482 39H20.3931L27.5278 30.8449L20 21H26.3004L30.6505 26.7517L35.6829 21ZM34.611 37.1724H36.3034L25.3815 22.7321H23.5657L34.611 37.1724Z"
                    fill={getSvgFill()}
                />
            </svg>

            {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={getSvgClassName()} xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="3" fill={getSvgBgColor()} />
                <path
                    d="M16.9691 4.31995H19.6187L13.8301 10.8266L20.6399 19.6799H15.3075L11.1313 14.3108L6.3521 19.6799H3.70097L9.89231 12.7209L3.35986 4.31995H8.82717L12.6021 9.22811L16.9691 4.31995ZM16.0389 18.1204H17.5075L8.02978 5.79802H6.45407L16.0389 18.1204Z"
                    fill={getSvgFill()}
                />
            </svg> */}
        </a>
    );
};

export default Twitter;
