import React from 'react';

interface IProps {
    classNames?: string;
}

const DocsIcon = ({ classNames }: IProps) => {
    return (
        <svg className={`${classNames ? classNames : ''}`} width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M22.0519 6.84741V23.3895C22.0519 24.2791 21.3303 25 20.4414 25H5.55581C4.66621 25 3.94531 24.2791 3.94531 23.3895V1.6105C3.94526 0.720899 4.66616 0 5.55581 0H15.2045L22.0519 6.84741Z"
                fill="#518EF8"
            />
            <path d="M17.6263 12.5508H8.36719V13.5796H17.6263V12.5508Z" fill="white" />
            <path d="M17.6263 14.8477H8.36719V15.8765H17.6263V14.8477Z" fill="white" />
            <path d="M17.6263 17.1445H8.36719V18.1734H17.6263V17.1445Z" fill="white" />
            <path d="M14.9519 19.4453H8.36719V20.4742H14.9519V19.4453Z" fill="white" />
            <path d="M16.1406 6.70049L22.0538 9.13657V6.84927L18.7012 5.85938L16.1406 6.70049Z" fill="#3A5BBC" />
            <path d="M22.0505 6.84741H16.8136C15.924 6.84741 15.2031 6.12651 15.2031 5.23691V0L22.0505 6.84741Z" fill="#ACD1FC" />
        </svg>
    );
};

export default DocsIcon;
