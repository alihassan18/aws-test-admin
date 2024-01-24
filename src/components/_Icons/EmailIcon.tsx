import React from 'react';

interface IProps {
    classNames?: string;
}

const EmailIcon = ({ classNames }: IProps) => {
    return (
        <svg className={`${classNames ? classNames : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="3" fill="#607D8B" />
            <path
                d="M16.5957 7H7.87012C6.8374 7 6 7.8374 6 8.87012V15.103C6 16.1357 6.8374 16.9731 7.87012 16.9731H16.5957C17.6284 16.9731 18.4658 16.1357 18.4658 15.103V8.86768C18.4658 7.83496 17.6284 7 16.5957 7ZM16.3418 8.24512L12.6748 11.9097C12.4331 12.1538 12.0376 12.1563 11.7935 11.9121L11.791 11.9097L8.12402 8.24512H16.3418ZM17.2207 15.103C17.2207 15.4473 16.9424 15.7256 16.5981 15.7256H7.87012C7.52588 15.7256 7.24756 15.4473 7.24756 15.103V9.12402L10.9121 12.7886C11.6421 13.5186 12.8237 13.5186 13.5562 12.7886L17.2207 9.12402V15.103Z"
                fill="white"
            />
        </svg>
    );
};

export default EmailIcon;
