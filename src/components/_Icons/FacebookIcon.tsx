import React from 'react';

interface IProps {
    classNames?: string;
    href?: string;
    icon?: boolean;
    disabled?: boolean;
    bgColor?: string;
    textColor?: string;
}

const FacebookIcon = ({ classNames, href, icon, disabled, bgColor, textColor }: IProps) => {
    const Facebook = () => {
        if (href) {
            return (
                <a href={href} target="_blank">
                    <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        className={`${classNames ? classNames : ''}`}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect x="0.924805" width="24" height="24" rx="3" fill={`${bgColor ? bgColor : '#3C5A99'}`} />
                        <path
                            d="M13.8573 17.9996V12.534H15.6995L15.9761 10.3941H13.8573V9.03242C13.8573 8.41367 14.0284 7.99414 14.9144 7.99414H16.037V6.08633C15.8425 6.06055 15.1722 6.00195 14.3917 6.00195C12.7628 6.00195 11.6472 6.9957 11.6472 8.82148V10.3965H9.81201V12.5363H11.6472V17.9996H13.8573Z"
                            fill={`${textColor ? textColor : 'white'}`}
                        />
                    </svg>
                </a>
            );
        } else if (icon) {
            return (
                <>
                    <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        className={`${classNames ? classNames : ''}`}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect x="0.924805" width="24" height="24" rx="3" fill="#3C5A99" />
                        <path
                            d="M13.8573 17.9996V12.534H15.6995L15.9761 10.3941H13.8573V9.03242C13.8573 8.41367 14.0284 7.99414 14.9144 7.99414H16.037V6.08633C15.8425 6.06055 15.1722 6.00195 14.3917 6.00195C12.7628 6.00195 11.6472 6.9957 11.6472 8.82148V10.3965H9.81201V12.5363H11.6472V17.9996H13.8573Z"
                            fill="white"
                        />
                    </svg>
                </>
            );
        } else if (disabled) {
            return (
                <svg
                    className={`${classNames ? classNames : ''}`}
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect y="0.5" width="24" height="24" rx="3" fill="#D5D5D5" />
                    <path
                        d="M13.1988 20V13.1666H15.5663L15.9217 10.4913H13.1988V8.78883C13.1988 8.01524 13.4187 7.49072 14.5572 7.49072H16V5.10549C15.75 5.07326 14.8886 5 13.8855 5C11.7922 5 10.3584 6.24243 10.3584 8.5251V10.4942H8V13.1696H10.3584V20H13.1988Z"
                        fill="#4E4E57"
                    />
                </svg>
            );
        } else return null;
    };
    return (
        <>
            <Facebook />
        </>
    );
};

export default FacebookIcon;
