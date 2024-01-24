import dynamic from "next/dynamic";
import React from "react";
interface IProps {
  classNames?: string;
}
const ContentCreator = ({ classNames }: IProps) => {
  return (
    <svg
      className={classNames ? classNames : ""}
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.749512"
        y="0.50293"
        width="20"
        height="20"
        rx="3"
        fill="#EB503A"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.05808 6.01518C7.10974 5.94336 7.16712 5.85544 7.24028 5.73689C7.28128 5.67046 7.43087 5.42302 7.45532 5.38302C8.05978 4.39425 8.49919 3.94043 9.2915 3.94043H12.2082C13.0005 3.94043 13.4399 4.39425 14.0444 5.38302C14.0688 5.42302 14.2184 5.67046 14.2594 5.73689C14.3326 5.85544 14.3899 5.94336 14.4416 6.01518C14.4757 6.06254 14.5054 6.10018 14.5297 6.12793H16.5832C17.7913 6.12793 18.7707 7.10731 18.7707 8.31543V14.8779C18.7707 16.0861 17.7913 17.0654 16.5832 17.0654H4.9165C3.70838 17.0654 2.729 16.0861 2.729 14.8779V8.31543C2.729 7.10731 3.70838 6.12793 4.9165 6.12793H6.96998C6.99426 6.10018 7.02401 6.06254 7.05808 6.01518ZM4.9165 7.58626C4.5138 7.58626 4.18734 7.91272 4.18734 8.31543V14.8779C4.18734 15.2806 4.5138 15.6071 4.9165 15.6071H16.5832C16.9859 15.6071 17.3123 15.2806 17.3123 14.8779V8.31543C17.3123 7.91272 16.9859 7.58626 16.5832 7.58626H14.3957C13.9113 7.58626 13.5846 7.32114 13.2577 6.86676C13.1825 6.76222 13.108 6.64806 13.0184 6.50279C12.9731 6.42943 12.8213 6.1783 12.8001 6.14367C12.4703 5.60419 12.2714 5.39876 12.2082 5.39876H9.2915C9.22826 5.39876 9.02937 5.60419 8.69956 6.14367C8.67839 6.1783 8.52658 6.42943 8.48131 6.50279C8.39165 6.64806 8.31715 6.76222 8.24195 6.86676C7.91511 7.32114 7.58842 7.58626 7.104 7.58626H4.9165ZM15.854 9.77376C16.2567 9.77376 16.5832 9.4473 16.5832 9.0446C16.5832 8.64189 16.2567 8.31543 15.854 8.31543C15.4513 8.31543 15.1248 8.64189 15.1248 9.0446C15.1248 9.4473 15.4513 9.77376 15.854 9.77376ZM10.7498 14.8779C8.7363 14.8779 7.104 13.2456 7.104 11.2321C7.104 9.21856 8.7363 7.58626 10.7498 7.58626C12.7634 7.58626 14.3957 9.21856 14.3957 11.2321C14.3957 13.2456 12.7634 14.8779 10.7498 14.8779ZM10.7498 13.4196C11.958 13.4196 12.9373 12.4402 12.9373 11.2321C12.9373 10.024 11.958 9.0446 10.7498 9.0446C9.54171 9.0446 8.56234 10.024 8.56234 11.2321C8.56234 12.4402 9.54171 13.4196 10.7498 13.4196Z"
        fill="white"
      />
    </svg>
  );
};

export default ContentCreator;
