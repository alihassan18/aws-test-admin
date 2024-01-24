import { useEffect, useState } from "react";
import OutSideClick from "react-outside-click-handler";

interface TimePickerProps {
  onSelectTime: Function;
  selectedDate?: any;
  selectedTimeProp?: any;
}

const TimePicker: React.FC<TimePickerProps> = ({
  onSelectTime,
  selectedDate,
  selectedTimeProp,
}) => {
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const currentDate: Date = selectedDate ? selectedDate : new Date();
  const handleTimeChange = (time: Date) => {
    setSelectedTime(time);
    onSelectTime(time);
    setDropdownOpen(false);
  };

  useEffect(() => {
    setSelectedTime(selectedTimeProp);
  }, [selectedTimeProp]);

  const getFormattedTime = (time: Date): string => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    if (hours === 0) {
      return `12:${formattedMinutes} AM`;
    } else if (hours < 12) {
      const formattedHours = hours < 10 ? `${hours}` : hours;
      return `${formattedHours}:${formattedMinutes} AM`;
    } else if (hours === 12) {
      return `12:${formattedMinutes} PM`;
    } else {
      const formattedHours = hours < 10 ? `${hours}` : hours;
      const pmHours = hours - 12;
      const formattedPMHours = pmHours < 10 ? `${pmHours}` : pmHours;
      return `${formattedHours}:${formattedMinutes} (${formattedPMHours}:${formattedMinutes} PM)`;
    }
  };

  const times = Array.from({ length: 24 * 2 }, (_, i) => {
    const date = new Date();
    date.setHours(i / 2, i % 2 === 1 ? 30 : 0, 0, 0);
    return date;
  });

  return (
    <div className="relative ">
      <button
        type="button"
        className="
          focus:shadow-outline  flex w-full items-center justify-between rounded-md border  p-2 text-sm   focus:outline-none focus:ring-0 border-borderColor text-secondary focus:border-primary
        "
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {selectedTime ? `${getFormattedTime(selectedTime)}` : "Select Time"}
        <svg
          width="16"
          height="16"
          viewBox="0 0 49 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.6668 48.6666C11.2496 48.6666 0.333496 37.7505 0.333496 24.3333C0.333496 10.9161 11.2496 0 24.6668 0C38.084 0 49.0001 10.9161 49.0001 24.3333C49.0001 37.7505 38.084 48.6666 24.6668 48.6666ZM24.6668 4.24369C13.5897 4.24369 4.57719 13.2558 4.57719 24.3333C4.57719 35.4108 13.5893 44.4229 24.6668 44.4229C35.7443 44.4229 44.7564 35.4108 44.7564 24.3333C44.7564 13.2558 35.7443 4.24369 24.6668 4.24369Z"
            fill="#727279"
          />
          <path
            d="M28.4651 31.1323L22.5454 25.2126V10.7947C22.5454 9.62267 23.4956 8.67285 24.6673 8.67285C25.8393 8.67285 26.7891 9.62304 26.7891 10.7947V23.4544L31.4656 28.1313C32.2943 28.9599 32.2943 30.3032 31.4656 31.1319C30.6373 31.9605 29.2937 31.9605 28.465 31.1322L28.4651 31.1323Z"
            fill="#727279"
          />
        </svg>
      </button>
      <OutSideClick
        onOutsideClick={() => {
          setDropdownOpen(false);
        }}
      >
        {dropdownOpen && (
          <div className="absolute z-10 mt-2 w-full rounded-md shadow-lg">
            <div className="AtShadowEffect cursor-pointer overflow-hidden rounded-md bg-bgColor">
              <div className="AtScrollHide h-[18.8rem] overflow-y-auto py-1 ">
                {times.map((time) => {
                  if (
                    currentDate.toDateString() == time.toDateString() &&
                    currentDate > time
                  )
                    return;
                  return (
                    <div
                      key={time.toISOString()}
                      className={`flex cursor-pointer justify-center p-3 font-normal hover:bg-darkColor text-white`}
                      onClick={() => handleTimeChange(time)}
                    >
                      {getFormattedTime(time)}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </OutSideClick>
    </div>
  );
};

export default TimePicker;
