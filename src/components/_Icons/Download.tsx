import React from 'react';

interface IProps {
    classNames?: string;
}

const Download = ({ classNames }: IProps) => {
    return (
        <svg className={`${classNames ? classNames : ''}`} width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.292893 5.70711C-0.0976311 5.31658 -0.0976312 4.68342 0.292893 4.29289L4.2929 0.292894C4.68342 -0.0976312 5.31659 -0.0976312 5.70711 0.292894L9.70711 4.29289C10.0976 4.68342 10.0976 5.31658 9.70711 5.70711C9.31659 6.09763 8.68342 6.09763 8.2929 5.70711L6 3.41421L6 15C6 15.5523 5.55229 16 5 16C4.44772 16 4 15.5523 4 15L4 3.41421L1.70711 5.70711C1.31658 6.09763 0.683418 6.09763 0.292893 5.70711Z"
                fill="black"
            />
        </svg>
    );
};

export default Download;
