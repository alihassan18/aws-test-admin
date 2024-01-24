import React from "react";
interface IProps {
  classNames?: string;
}
const King = ({ classNames }: IProps) => {
  return (
    <svg
      className={classNames ? classNames : ""}
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.74951 1.65763C9.98712 0.943099 11.5119 0.943099 12.7495 1.65763L17.4098 4.34823C18.6474 5.06276 19.4098 6.38327 19.4098 7.81233V13.1935C19.4098 14.6226 18.6474 15.9431 17.4098 16.6576L12.7495 19.3482C11.5119 20.0628 9.98712 20.0628 8.74951 19.3482L4.08926 16.6576C2.85165 15.9431 2.08926 14.6226 2.08926 13.1935V7.81233C2.08926 6.38327 2.85165 5.06276 4.08926 4.34823L8.74951 1.65763Z"
        fill="#F1C94A"
      />
      <path
        d="M10.7493 5.50293C10.2533 5.50293 9.85191 5.90953 9.85191 6.41202C9.85191 6.76536 10.0517 7.07076 10.3427 7.22168L8.50576 10.9575L6.50055 9.26713C6.63026 9.10911 6.71089 8.90669 6.71089 8.68475C6.71089 8.18226 6.3095 7.77566 5.81345 7.77566C5.31741 7.77566 4.91602 8.18226 4.91602 8.68475C4.91602 9.18723 5.31741 9.59384 5.81345 9.59384C5.8748 9.59384 5.9379 9.59206 5.99574 9.57963L6.75295 13.2302H14.7457L15.503 9.57963C15.5608 9.59206 15.6239 9.59384 15.6852 9.59384C16.1813 9.59384 16.5827 9.18723 16.5827 8.68475C16.5827 8.18226 16.1813 7.77566 15.6852 7.77566C15.1892 7.77566 14.7878 8.18226 14.7878 8.68475C14.7878 8.90669 14.8684 9.10911 14.9981 9.26713L12.9929 10.9575L11.156 7.22168C11.447 7.07076 11.6468 6.76536 11.6468 6.41202C11.6468 5.90953 11.2454 5.50293 10.7493 5.50293ZM6.71089 14.1393V14.8211C6.71089 15.1975 7.01237 15.5029 7.38396 15.5029H14.1147C14.4863 15.5029 14.7878 15.1975 14.7878 14.8211V14.1393H6.71089Z"
        fill="black"
      />
    </svg>
  );
};

export default King;
