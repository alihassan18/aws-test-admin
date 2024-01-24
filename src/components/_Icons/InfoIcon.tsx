import React from 'react';
import { useThemeContext } from 'src/contexts/ThemeContext';

interface IProps {
    classNames?: string;
}

const InfoIcon = ({ classNames }: IProps) => {
    const theme = useThemeContext();
    return (
        <svg width="17" height="16" viewBox="0 0 17 16" className={`${classNames ? classNames : ''}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9.09028 11.1111H8.3125V8H7.53472M8.3125 4.88889H8.32028M15.3125 8C15.3125 11.866 12.1785 15 8.3125 15C4.44651 15 1.3125 11.866 1.3125 8C1.3125 4.13401 4.44651 1 8.3125 1C12.1785 1 15.3125 4.13401 15.3125 8Z"
                stroke={`${theme === 'dark' ? '#CCCCCC' : '#000000'}`}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default InfoIcon;
