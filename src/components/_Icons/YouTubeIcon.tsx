import React from 'react';

interface IProps {
    classNames?: string;
    href?: string;
    icon?: boolean;
    disabled?: boolean;
}
const YoutubeIcon = ({ classNames, href, disabled, icon }: IProps) => {
    const Youtube = () => {
        if (href) {
            return (
                <a href={href} target="_blank">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className={`${classNames ? classNames : ''}`}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="24" height="24" rx="3" fill="#D10909" />
                        <path
                            d="M17.4361 6.39258H7.52199C5.57684 6.39258 4 7.96942 4 9.91456V14.8706C4 16.8157 5.57684 18.3926 7.52199 18.3926H17.4361C19.3813 18.3926 20.9581 16.8157 20.9581 14.8706V9.91456C20.9581 7.96942 19.3813 6.39258 17.4361 6.39258ZM15.0542 12.6337L10.4171 14.8454C10.2935 14.9043 10.1508 14.8142 10.1508 14.6773V10.1158C10.1508 9.97695 10.2973 9.88697 10.4211 9.94973L15.0583 12.2996C15.1961 12.3695 15.1937 12.5672 15.0542 12.6337Z"
                            fill="white"
                        />
                    </svg>
                </a>
            );
        } else if (icon) {
            return (
                <>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className={`${classNames ? classNames : ''}`}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="24" height="24" rx="3" fill="#D10909" />
                        <path
                            d="M17.4361 6.39258H7.52199C5.57684 6.39258 4 7.96942 4 9.91456V14.8706C4 16.8157 5.57684 18.3926 7.52199 18.3926H17.4361C19.3813 18.3926 20.9581 16.8157 20.9581 14.8706V9.91456C20.9581 7.96942 19.3813 6.39258 17.4361 6.39258ZM15.0542 12.6337L10.4171 14.8454C10.2935 14.9043 10.1508 14.8142 10.1508 14.6773V10.1158C10.1508 9.97695 10.2973 9.88697 10.4211 9.94973L15.0583 12.2996C15.1961 12.3695 15.1937 12.5672 15.0542 12.6337Z"
                            fill="white"
                        />
                    </svg>
                </>
            );
        } else if (disabled) {
            return (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`${classNames ? classNames : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect width="24" height="24" rx="3" fill="#D5D5D5" />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.0269 5.30334C14.1367 4.74453 15.5107 5.15161 16.0948 6.21279C16.6789 7.27398 16.2528 8.58682 15.143 9.14563L14.2305 9.60915C15.0167 9.6369 15.7664 10.0542 16.159 10.7675C16.7431 11.8287 16.3179 13.1415 15.2072 13.7003L10.3411 16.1706C9.23133 16.7294 7.85729 16.3223 7.27321 15.2611C6.68912 14.1999 7.11522 12.8871 8.22498 12.3283L9.1375 11.8647C8.35137 11.837 7.60164 11.4197 7.20905 10.7064C6.62497 9.64523 7.05106 8.33239 8.16083 7.77358L13.0269 5.30334ZM10.4005 8.98742L13.3458 10.7443L10.4005 12.4929V8.98742Z"
                        fill="#4E4E57"
                    />
                </svg>
            );
        } else return <></>;
    };

    return (
        <>
            <Youtube />
        </>
    );
};

export default YoutubeIcon;
