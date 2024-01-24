import React from 'react';

interface IProps {
    classNames?: string;
}

const CreatorIcon = ({ classNames }: IProps) => {
    return (
        <svg className={`${classNames ? classNames : ''}`} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="-0.000976562" width="14" height="14" rx="3" fill="#EB503A" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.41512 3.85858C4.45128 3.8083 4.49145 3.74676 4.54266 3.66377C4.57136 3.61727 4.67607 3.44406 4.69319 3.41606C5.11631 2.72393 5.42389 2.40625 5.97852 2.40625H8.02018C8.5748 2.40625 8.88239 2.72393 9.30551 3.41606C9.32263 3.44406 9.42734 3.61727 9.45604 3.66377C9.50725 3.74676 9.54742 3.8083 9.58358 3.85858C9.60743 3.89173 9.62825 3.91807 9.64525 3.9375H11.0827C11.9284 3.9375 12.6139 4.62306 12.6139 5.46875V10.0625C12.6139 10.9082 11.9284 11.5938 11.0827 11.5938H2.91602C2.07033 11.5938 1.38477 10.9082 1.38477 10.0625V5.46875C1.38477 4.62306 2.07033 3.9375 2.91602 3.9375H4.35345C4.37044 3.91807 4.39127 3.89173 4.41512 3.85858ZM2.91602 4.95833C2.63412 4.95833 2.4056 5.18685 2.4056 5.46875V10.0625C2.4056 10.3444 2.63412 10.5729 2.91602 10.5729H11.0827C11.3646 10.5729 11.5931 10.3444 11.5931 10.0625V5.46875C11.5931 5.18685 11.3646 4.95833 11.0827 4.95833H9.55143C9.21234 4.95833 8.98366 4.77275 8.75487 4.45468C8.70223 4.3815 8.65008 4.30159 8.58732 4.1999C8.55563 4.14855 8.44936 3.97276 8.43454 3.94852C8.20368 3.57088 8.06445 3.42708 8.02018 3.42708H5.97852C5.93425 3.42708 5.79502 3.57088 5.56416 3.94852C5.54934 3.97276 5.44307 4.14855 5.41138 4.1999C5.34862 4.30159 5.29647 4.3815 5.24383 4.45468C5.01504 4.77275 4.78636 4.95833 4.44727 4.95833H2.91602ZM10.5723 6.48958C10.8542 6.48958 11.0827 6.26106 11.0827 5.97917C11.0827 5.69727 10.8542 5.46875 10.5723 5.46875C10.2904 5.46875 10.0618 5.69727 10.0618 5.97917C10.0618 6.26106 10.2904 6.48958 10.5723 6.48958ZM6.99935 10.0625C5.58987 10.0625 4.44727 8.91989 4.44727 7.51042C4.44727 6.10094 5.58987 4.95833 6.99935 4.95833C8.40882 4.95833 9.55143 6.10094 9.55143 7.51042C9.55143 8.91989 8.40882 10.0625 6.99935 10.0625ZM6.99935 9.04167C7.84503 9.04167 8.5306 8.3561 8.5306 7.51042C8.5306 6.66473 7.84503 5.97917 6.99935 5.97917C6.15366 5.97917 5.4681 6.66473 5.4681 7.51042C5.4681 8.3561 6.15366 9.04167 6.99935 9.04167Z"
                fill="white"
            />
        </svg>
    );
};

export default CreatorIcon;
