import React from 'react';

interface IProps {
    classNames?: string;
}

const CalenderIcon = ({ classNames }: IProps) => {
    return (
        <svg className={`${classNames ? classNames : ''}`} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.03125 7.10938H8.8125C9.07138 7.10938 9.28125 6.8995 9.28125 6.64062C9.28125 6.38175 9.07138 6.17188 8.8125 6.17188H8.03125C7.77237 6.17188 7.5625 6.38175 7.5625 6.64062C7.5625 6.8995 7.77237 7.10938 8.03125 7.10938Z"
                fill="#CCCCCC"
            />
            <path
                d="M6.03125 6.17188H5.25C4.99112 6.17188 4.78125 6.38175 4.78125 6.64062C4.78125 6.8995 4.99112 7.10938 5.25 7.10938H6.03125C6.29013 7.10938 6.5 6.8995 6.5 6.64062C6.5 6.38175 6.29013 6.17188 6.03125 6.17188Z"
                fill="#CCCCCC"
            />
            <path
                d="M10.8125 7.10938H11.5938C11.8526 7.10938 12.0625 6.8995 12.0625 6.64062C12.0625 6.38175 11.8526 6.17188 11.5938 6.17188H10.8125C10.5536 6.17188 10.3438 6.38175 10.3438 6.64062C10.3438 6.8995 10.5536 7.10938 10.8125 7.10938Z"
                fill="#CCCCCC"
            />
            <path
                d="M3.25 8.28125H2.46875C2.20987 8.28125 2 8.49112 2 8.75C2 9.00888 2.20987 9.21875 2.46875 9.21875H3.25C3.50888 9.21875 3.71875 9.00888 3.71875 8.75C3.71875 8.49112 3.50888 8.28125 3.25 8.28125Z"
                fill="#CCCCCC"
            />
            <path
                d="M6.03125 8.28125H5.25C4.99112 8.28125 4.78125 8.49112 4.78125 8.75C4.78125 9.00888 4.99112 9.21875 5.25 9.21875H6.03125C6.29013 9.21875 6.5 9.00888 6.5 8.75C6.5 8.49112 6.29013 8.28125 6.03125 8.28125Z"
                fill="#CCCCCC"
            />
            <path
                d="M9.28125 8.75C9.28125 8.49112 9.07138 8.28125 8.8125 8.28125H8.03125C7.77237 8.28125 7.5625 8.49112 7.5625 8.75C7.5625 9.00888 7.77237 9.21875 8.03125 9.21875H8.8125C9.07138 9.21875 9.28125 9.00888 9.28125 8.75Z"
                fill="#CCCCCC"
            />
            <path
                d="M3.25 10.3906H2.46875C2.20987 10.3906 2 10.6005 2 10.8594C2 11.1183 2.20987 11.3281 2.46875 11.3281H3.25C3.50888 11.3281 3.71875 11.1183 3.71875 10.8594C3.71875 10.6005 3.50888 10.3906 3.25 10.3906Z"
                fill="#CCCCCC"
            />
            <path
                d="M6.03125 10.3906H5.25C4.99112 10.3906 4.78125 10.6005 4.78125 10.8594C4.78125 11.1183 4.99112 11.3281 5.25 11.3281H6.03125C6.29013 11.3281 6.5 11.1183 6.5 10.8594C6.5 10.6005 6.29013 10.3906 6.03125 10.3906Z"
                fill="#CCCCCC"
            />
            <path
                d="M14.0625 8.72112V2.65625C14.0625 1.70853 13.2915 0.9375 12.3438 0.9375H11.4375V0.46875C11.4375 0.209875 11.2276 0 10.9688 0C10.7099 0 10.5 0.209875 10.5 0.46875V0.9375H8.8125V0.46875C8.8125 0.209875 8.60263 0 8.34375 0C8.08487 0 7.875 0.209875 7.875 0.46875V0.9375H6.1875V0.46875C6.1875 0.209875 5.97763 0 5.71875 0C5.45987 0 5.25 0.209875 5.25 0.46875V0.9375H3.5625V0.46875C3.5625 0.209875 3.35263 0 3.09375 0C2.83487 0 2.625 0.209875 2.625 0.46875V0.9375H1.71875C0.771031 0.9375 0 1.70853 0 2.65625V12.0312C0 12.8067 0.630844 13.4375 1.40625 13.4375H8.42569C8.97469 14.9314 10.4118 16 12.0938 16C14.2477 16 16 14.2477 16 12.0938C16 10.6573 15.2205 9.39972 14.0625 8.72112ZM0.9375 2.65625C0.9375 2.22547 1.28797 1.875 1.71875 1.875H2.625V2.34375C2.625 2.60263 2.83487 2.8125 3.09375 2.8125C3.35263 2.8125 3.5625 2.60263 3.5625 2.34375V1.875H5.25V2.34375C5.25 2.60263 5.45987 2.8125 5.71875 2.8125C5.97763 2.8125 6.1875 2.60263 6.1875 2.34375V1.875H7.875V2.34375C7.875 2.60263 8.08487 2.8125 8.34375 2.8125C8.60263 2.8125 8.8125 2.60263 8.8125 2.34375V1.875H10.5V2.34375C10.5 2.60263 10.7099 2.8125 10.9688 2.8125C11.2276 2.8125 11.4375 2.60263 11.4375 2.34375V1.875H12.3438C12.7745 1.875 13.125 2.22547 13.125 2.65625V4.0625H0.9375V2.65625ZM1.40625 12.5C1.14778 12.5 0.9375 12.2897 0.9375 12.0312V5H13.125V8.32594C12.7963 8.23587 12.4506 8.1875 12.0938 8.1875C9.93984 8.1875 8.1875 9.93984 8.1875 12.0938C8.1875 12.2309 8.19469 12.3664 8.20856 12.5H1.40625ZM12.0938 15.0625C10.4568 15.0625 9.125 13.7307 9.125 12.0938C9.125 10.4568 10.4568 9.125 12.0938 9.125C13.7307 9.125 15.0625 10.4568 15.0625 12.0938C15.0625 13.7307 13.7307 15.0625 12.0938 15.0625Z"
                fill="#CCCCCC"
            />
            <path
                d="M13.6562 11.625H12.5625V10.5312C12.5625 10.2724 12.3526 10.0625 12.0938 10.0625C11.8349 10.0625 11.625 10.2724 11.625 10.5312V12.0938C11.625 12.3526 11.8349 12.5625 12.0938 12.5625H13.6562C13.9151 12.5625 14.125 12.3526 14.125 12.0938C14.125 11.8349 13.9151 11.625 13.6562 11.625Z"
                fill="#CCCCCC"
            />
        </svg>
    );
};

export default CalenderIcon;
