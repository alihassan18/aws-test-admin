import React, { useState, useEffect } from "react";
import Countdown, { CountdownRenderProps } from "react-countdown";

interface CountdownProps {
  date: Date;
  style?: string;
  day?: boolean | number;
  AddColon?: boolean;
  ParentStyle?: string;
  InLetter?: string | boolean;
  AtminSec?: boolean | number;
}

const CountdownComponent: React.FC<CountdownProps> = ({
  date,
  style,
  day,
  AddColon,
  ParentStyle,
  InLetter,
  AtminSec,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
  }: CountdownRenderProps) => {
    const timeStyle =
      "text-xs font-display font-bold bg-primary mb-0.5 h-6 w-6 flex justify-center items-center rounded";
    const minSecStyle =
      "text-xs font-display font-bold border border-primary mb-0.5 h-9 w-9 flex justify-center items-center rounded-md";

    const addLeadingZeros = (value: number) => {
      if (value.toString().length < 2) {
        return `0${value}`;
      }
      return value.toString();
    };

    return (
      <div className={` ${ParentStyle} flex flex-row  gap-1`}>
        {AtminSec ? (
          <>
            <div
              className={` ${style ? style : minSecStyle}  ${
                InLetter && "flex flex-col items-center"
              }`}
            >
              {minutes}
              {InLetter && (
                <p className="text-center text-xs dark:text-white">Minutes</p>
              )}
            </div>
            <span className={`${style ? style : ""}`}>:</span>
            <div
              className={` ${style ? style : minSecStyle} ${
                InLetter && "flex flex-col items-center"
              }`}
            >
              {seconds}
              {InLetter && (
                <p className="text-left text-xs dark:text-white">Seconds</p>
              )}
            </div>
          </>
        ) : (
          <>
            {day ? (
              ""
            ) : (
              <div
                className={` ${style ? style : timeStyle} ${
                  InLetter && "flex flex-col items-center"
                } `}
              >
                {addLeadingZeros(days)}
                {InLetter && (
                  <p className="text-center text-xs dark:text-white ">Days</p>
                )}
              </div>
            )}
            {AddColon && <span className={`${style ? style : ""}`}>:</span>}
            <div
              className={` ${style ? style : timeStyle} ${
                InLetter && "flex flex-col items-center"
              } `}
            >
              {addLeadingZeros(hours)}
              {InLetter && (
                <p className="text-center text-xs dark:text-white ">Hours</p>
              )}
            </div>
            <span className={`${style ? style : ""}`}>:</span>
            <div
              className={` ${style ? style : timeStyle}  ${
                InLetter && "flex flex-col items-center"
              }`}
            >
              {addLeadingZeros(minutes)}
              {InLetter && (
                <p className="text-center text-xs dark:text-white">Minutes</p>
              )}
            </div>
            <span className={`${style ? style : ""}`}>:</span>
            <div
              className={` ${style ? style : timeStyle} ${
                InLetter && "flex flex-col items-center"
              }`}
            >
              {addLeadingZeros(seconds)}
              {InLetter && (
                <p className="text-left text-xs dark:text-white">Seconds</p>
              )}
            </div>
          </>
        )}
      </div>
    );
  };

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return <Countdown date={date} renderer={renderer} />;
};

export default CountdownComponent;
